import Link from "next/link";
import type { Metadata } from "next";

// 2027/2/14 社交ダンスイベントの予約・決済ページ。
// 決済は KOMOJU の決済リンク（ダッシュボードで発行）に飛ばす。サイトは静的書き出しなので、
// 席数の上限は各リンクの「利用回数の上限」で持たせる（1決済＝1名）。
// リンクを発行したら PLANS の paymentUrl に貼る。null のあいだはボタンが「受付開始前」になる。

export const metadata: Metadata = {
  title: "Tokyo Swing Party 2027.2.14 — ArtistMerge",
  description:
    "2027年2月14日（日）東京ミッドタウン日比谷。ビッグバンドの生演奏とプロダンサーと踊る社交ダンス・パーティー。",
  alternates: {
    canonical: "/events/valentine-dance-2027/",
  },
  // 会場との最終確認が済み、受付を始めるまで検索に出さない
  robots: { index: false, follow: false },
};

type Plan = {
  name: string;
  price: number;
  seats: number;
  body: string[];
  paymentUrl: string | null;
};

const PLANS: Plan[] = [
  {
    name: "着席確約プラン",
    price: 20000,
    seats: 20,
    body: ["バンド正面のテーブル・カウンター席（相席）", "フリードリンク・お料理付き", "ダンスタイムに参加（3回）"],
    paymentUrl: null,
  },
  {
    name: "一般席プラン",
    price: 15000,
    seats: 40,
    body: ["両サイドの一般席（半立食）", "フリードリンク・お料理付き", "ダンスタイムに参加（3回）"],
    paymentUrl: null,
  },
];

const TIMETABLE = [
  { time: "16:00", body: "開場（ドリンク・おつまみ）" },
  { time: "16:20", body: "ダンスタイム（20分 × 3セット、間に10分休憩）" },
  { time: "17:40", body: "お食事タイム" },
  { time: "18:10", body: "プロダンサーによるショー" },
  { time: "18:30", body: "終演" },
];

const NOTES = [
  "1回のお申し込みで1名様分です。複数名でご参加の場合は、お一人ずつお申し込みください。",
  "お支払いは KOMOJU の決済ページで行います。決済が完了した時点で予約確定となり、確認メールが届きます。",
  "コンビニ払いなどの後払いは、お支払いが済むまで席は確保されません。定員に達した時点で受付を終了します。",
  "お席の指定はできません（着席確約プランは確約エリア内のいずれかのお席です）。",
  "会場に更衣室はありません。ダンスシューズ等は各自でご用意ください。",
  "ダンスタイムは1曲につきゲスト5名がプロダンサーと踊ります。お一人3回踊れます。",
];

const yen = (n: number) => n.toLocaleString("ja-JP");

// 10/11 告知用フライヤー（店舗制作）のトーンに合わせた配色
const C = {
  red: "#E5524C",
  redDeep: "#C9403B",
  yellow: "#F4D80B",
  teal: "#1E6F6A",
  cream: "#FFF4E4",
  ink: "#2B1714",
};

const HIGHLIGHTS = [
  { title: "豪華生ジャズバンドの演奏で！", body: "ビッグバンドのメンバーによる生演奏。ライブならではのサウンドで踊れます。" },
  { title: "ゲストの方は「3回」踊れる！", body: "グループ管理で、お一人様あたり計3回、プロダンサーとのダンスを確実にお楽しみいただけます。" },
  { title: "美味しいお食事＆フリードリンク付き！", body: "San Antonio TEX-MEX のお料理と、アルコール・ソフトドリンクの飲み放題。" },
  { title: "迫力のプロショータイム！", body: "締めくくりは、プロダンサーによる華麗なパフォーマンスショー。" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-bold tracking-[0.25em] uppercase" style={{ color: C.yellow }}>
      {children}
    </p>
  );
}

export default function ValentineDance2027Page() {
  const stripes = {
    backgroundColor: C.red,
    backgroundImage:
      "repeating-linear-gradient(-35deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 9px)",
  };

  return (
    <div style={{ ...stripes, color: C.cream }} className="font-[family-name:var(--font-jp)]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex items-center gap-2 text-[15px] font-bold tracking-tight">
            <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: C.yellow }} />
            ArtistMerge
          </Link>
          <a
            href="#plans"
            className="inline-flex h-9 items-center rounded-full px-5 text-[13px] font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: C.yellow, color: C.ink }}
          >
            予約する
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-30 blur-2xl"
          style={{ background: `radial-gradient(circle, ${C.yellow}, transparent 65%)` }}
        />
        <div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-40 blur-2xl"
          style={{ background: `radial-gradient(circle, ${C.teal}, transparent 65%)` }}
        />
        <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28 text-center">
          <p
            className="inline-block rounded-full px-4 py-1 text-[12px] md:text-[13px] font-bold tracking-[0.2em]"
            style={{ backgroundColor: C.teal }}
          >
            VALENTINE&apos;S DAY SPECIAL
          </p>
          <h1
            className="mt-6 font-black leading-[0.95] tracking-tight"
            style={{ color: C.yellow }}
          >
            <span className="block text-6xl md:text-8xl">東京</span>
            <span className="block text-7xl md:text-[9rem] font-[family-name:var(--font-inter)]">Swing</span>
            <span className="block text-7xl md:text-[9rem] font-[family-name:var(--font-inter)]">Party</span>
          </h1>
          <p className="mt-10 font-black tracking-tight font-[family-name:var(--font-inter)]" style={{ color: C.yellow }}>
            <span className="text-5xl md:text-7xl">2027.2.14</span>
            <span className="ml-3 text-2xl md:text-3xl">SUN</span>
          </p>
          <p className="mt-3 text-xl md:text-2xl font-bold" style={{ color: C.yellow }}>
            16:00 開場 / 18:30 終了
          </p>
          <div className="mt-10 inline-flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-[13px] font-black"
              style={{ backgroundColor: C.cream, color: C.red }}
            >
              会場
            </span>
            <p className="text-lg md:text-xl font-bold leading-snug">
              HIBIYA FOOD HALL 内<br className="md:hidden" />{" "}
              <span className="whitespace-nowrap">San Antonio TEX-MEX</span>
              <br />
              （東京ミッドタウン日比谷 B1F）
            </p>
          </div>
          <div className="mt-12">
            <a
              href="#plans"
              className="inline-flex h-14 items-center gap-3 rounded-full px-8 text-[16px] font-black shadow-[0_6px_0_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: C.yellow, color: C.ink }}
            >
              プランを選んで予約する ↓
            </a>
            <p className="mt-4 text-[13px] opacity-90">定員60名・先着順</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ backgroundColor: C.redDeep }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 grid gap-5 md:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="rounded-2xl p-6 md:p-7" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <p className="flex items-center gap-3 text-lg md:text-xl font-black">
                <span aria-hidden style={{ color: C.yellow }}>♪</span>
                {h.title}
              </p>
              <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed opacity-90">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-16">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24">
          <div className="text-center">
            <Eyebrow>Plans</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">参加プラン</h2>
            <p className="mt-3 text-[14px] opacity-90">表示価格はお一人様・税込です。</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-3xl p-6 md:p-8 shadow-[0_10px_0_rgba(0,0,0,0.12)]"
                style={{ backgroundColor: C.cream, color: C.ink }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <span
                    className="rounded-full px-3 py-1 text-[12px] font-bold text-white"
                    style={{ backgroundColor: C.teal }}
                  >
                    {plan.seats}席限定
                  </span>
                </div>
                <p className="mt-4 font-black tracking-tight font-[family-name:var(--font-inter)]" style={{ color: C.red }}>
                  <span className="text-5xl md:text-6xl">{yen(plan.price)}</span>
                  <span className="ml-1 text-xl font-bold">円（税込）</span>
                </p>
                <ul className="mt-6 space-y-2 text-[15px]">
                  {plan.body.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden style={{ color: C.red }}>●</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  {plan.paymentUrl ? (
                    <a
                      href={plan.paymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full text-[16px] font-black transition-transform hover:-translate-y-0.5"
                      style={{ backgroundColor: C.red, color: "#fff" }}
                    >
                      このプランで予約する →
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-dashed text-[14px] font-bold opacity-60"
                      style={{ borderColor: C.ink }}
                    >
                      受付開始前です（12月中旬開始予定）
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable + notes */}
      <section style={{ backgroundColor: C.redDeep }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Time Table</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black">当日の流れ</h2>
            <ul className="mt-8 space-y-2">
              {TIMETABLE.map((t) => (
                <li
                  key={t.time}
                  className="grid grid-cols-[4.5rem_1fr] items-center gap-4 rounded-xl px-4 py-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <span className="text-lg font-black font-[family-name:var(--font-inter)]" style={{ color: C.yellow }}>
                    {t.time}
                  </span>
                  <span className="text-[15px] font-bold">{t.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Notes</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black">ご予約の前に</h2>
            <ul className="mt-8 space-y-3 text-[14px] md:text-[15px] leading-relaxed">
              {NOTES.map((n) => (
                <li key={n} className="flex gap-3">
                  <span aria-hidden style={{ color: C.yellow }}>●</span>
                  <span className="opacity-95">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section style={{ backgroundColor: C.cream, color: C.ink }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-14 md:py-20">
          <h2 className="text-xl md:text-2xl font-black">特定商取引法に基づく表記</h2>
          <dl className="mt-6 text-[13px] md:text-[14px]" style={{ borderTop: "1px solid rgba(43,23,20,0.15)" }}>
            {[
              ["販売事業者", "株式会社アーティストマージ"],
              ["運営責任者", "相楽 賢哉"],
              ["所在地", "〒135-0034 東京都江東区永代2-31-15 ベルウッド永代ビル 5階"],
              ["電話番号", "03-4563-9901"],
              ["メールアドレス", "info@artistmerge.jp"],
              ["販売価格", "各プランに表示（税込）"],
              ["商品代金以外の必要料金", "なし（コンビニ払い等の手数料が発生する場合はお客様のご負担）"],
              ["お支払い方法", "KOMOJU の決済ページで選べる方法（クレジットカード等）"],
              ["お支払い時期", "お申し込み時。後払いの方法は各決済方法の期限まで"],
              ["提供時期", "2027年2月14日（日）イベント当日"],
              ["キャンセル・返金", "キャンセル規定は受付開始時に掲載します"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 md:grid-cols-[14rem_1fr] py-3"
                style={{ borderBottom: "1px solid rgba(43,23,20,0.15)" }}
              >
                <dt className="opacity-60">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[12px] opacity-70">
            運営：株式会社アーティストマージ　／　会場：San Antonio TEX-MEX 東京ミッドタウン日比谷（株式会社クリエイト・ダイニング）　／　ダンサー：dance place FELICE
          </p>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] opacity-60">ORGANIZED BY</p>
            <Link href="/" className="mt-3 inline-flex items-center gap-2 text-xl font-bold">
              <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: C.yellow }} />
              ArtistMerge
            </Link>
            <p className="mt-2 text-[13px] opacity-80">運営：株式会社アーティストマージ</p>
          </div>
          <div className="flex flex-col gap-2 text-[13px] md:items-end">
            <Link href="/" className="font-bold hover:opacity-80" style={{ color: C.yellow }}>
              ArtistMerge ホームページへ →
            </Link>
            <a href="mailto:info@artistmerge.jp" className="opacity-80 hover:opacity-100">
              お問い合わせ：info@artistmerge.jp
            </a>
            <p className="opacity-50">© 2026 ArtistMerge Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
