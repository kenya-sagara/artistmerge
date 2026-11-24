// 2027/2/14 ダンスイベントの席数監視。GitHub Actions（.github/workflows/valentine-seats.yml）から数分おきに動く。
//
// プランごとに Stripe の決済リンクで売れた人数を数え、
//   - 残り席が1回の最大人数より少なくなったら、決済画面で選べる人数の上限を残り席に下げる
//   - 残りが0になったら決済リンクを止める（active=false）
// 結果を app/events/valentine-dance-2027/seats.json に書き、LP の「残り◯席」「満席」に使う。
//
// 必要な環境変数：STRIPE_API_KEY（制限付きキー。Checkout Sessions＝読み取り、Payment Links＝書き込み）
// DRY_RUN=1 のときは Stripe 側を変更せず、何をするかだけ表示する。

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "app/events/valentine-dance-2027");
const CONFIG = path.join(DIR, "booking.json");
const STATUS = path.join(DIR, "seats.json");

const API = process.env.STRIPE_API_BASE || "https://api.stripe.com";
const KEY = process.env.STRIPE_API_KEY;
const DRY_RUN = process.env.DRY_RUN === "1";

async function stripe(method, pathname, params = {}) {
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (Array.isArray(v)) v.forEach((x) => body.append(k, String(x)));
    else if (v !== undefined && v !== null) body.append(k, String(v));
  }
  const url = method === "GET" ? `${API}${pathname}?${body}` : `${API}${pathname}`;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${KEY}`,
      ...(method === "GET" ? {} : { "Content-Type": "application/x-www-form-urlencoded" }),
    },
    body: method === "GET" ? undefined : body,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Stripe ${method} ${pathname}: ${res.status} ${json?.error?.message ?? ""}`);
  return json;
}

async function listAll(pathname, params) {
  const out = [];
  let starting_after;
  for (;;) {
    const page = await stripe("GET", pathname, { limit: 100, ...params, starting_after });
    out.push(...page.data);
    if (!page.has_more || page.data.length === 0) return out;
    starting_after = page.data[page.data.length - 1].id;
  }
}

// 決済リンクの URL（buy.stripe.com/...）から Payment Link オブジェクトを探す
async function findPaymentLinks(urls) {
  const want = new Set(urls);
  const found = new Map();
  for (const active of [true, false]) {
    for (const link of await listAll("/v1/payment_links", { active })) {
      if (want.has(link.url)) found.set(link.url, link);
    }
  }
  return found;
}

// 完了した決済の人数を合計する。コンビニ払いなどの未入金（payment_status=unpaid）も席を押さえている扱いで数える。
async function countSold(linkId) {
  const sessions = await listAll("/v1/checkout/sessions", {
    payment_link: linkId,
    status: "complete",
    "expand[]": ["data.line_items"],
  });
  let sold = 0;
  for (const s of sessions) {
    for (const li of s.line_items?.data ?? []) sold += li.quantity ?? 0;
  }
  return sold;
}

async function main() {
  const config = JSON.parse(await readFile(CONFIG, "utf8"));
  const prev = JSON.parse(await readFile(STATUS, "utf8"));
  const plans = config.plans.filter((p) => p.paymentUrl);
  if (plans.length === 0) {
    console.log("決済リンクが未設定のため、何もしません。");
    return;
  }
  if (!KEY) throw new Error("STRIPE_API_KEY が設定されていません。");

  const links = await findPaymentLinks(plans.map((p) => p.paymentUrl));
  const next = { ...prev, plans: {} };
  let changed = false;

  for (const plan of plans) {
    const link = links.get(plan.paymentUrl);
    if (!link) throw new Error(`${plan.name}: ${plan.paymentUrl} の決済リンクが Stripe に見つかりません。`);

    const sold = await countSold(link.id);
    const cap = Math.max(0, plan.seats - (config.holdBack ?? 0));
    const remaining = Math.max(0, cap - sold);
    const closed = remaining === 0;
    console.log(`${plan.name}: 販売 ${sold} / 定員 ${plan.seats}（自動停止の基準 ${cap}）残り ${remaining}`);

    if (closed && link.active) {
      console.log(`  → 決済リンクを止めます`);
      if (!DRY_RUN) await stripe("POST", `/v1/payment_links/${link.id}`, { active: false });
    } else if (!closed) {
      const max = Math.min(config.maxPerOrder, remaining);
      const items = await stripe("GET", `/v1/payment_links/${link.id}/line_items`, {});
      const li = items.data[0];
      const current = li?.adjustable_quantity?.maximum;
      if (li && current !== max) {
        console.log(`  → 選べる人数の上限を ${current ?? "未設定"} から ${max} にします`);
        if (!DRY_RUN) {
          await stripe("POST", `/v1/payment_links/${link.id}`, {
            "line_items[0][id]": li.id,
            "line_items[0][quantity]": 1,
            "line_items[0][adjustable_quantity][enabled]": true,
            "line_items[0][adjustable_quantity][minimum]": 1,
            "line_items[0][adjustable_quantity][maximum]": max,
          });
        }
      }
    }

    next.plans[plan.key] = { sold, remaining, closed };
    const before = prev.plans?.[plan.key];
    if (!before || before.sold !== sold || before.remaining !== remaining || before.closed !== closed) changed = true;
  }

  if (changed) {
    next.updatedAt = new Date().toISOString();
    await writeFile(STATUS, JSON.stringify(next, null, 2) + "\n");
    console.log("seats.json を更新しました。");
  } else {
    console.log("変化なし。");
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
