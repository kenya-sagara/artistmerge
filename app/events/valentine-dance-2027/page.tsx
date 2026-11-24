import Image from "next/image";
import type { Metadata } from "next";
import { asset } from "@/lib/asset";

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
    body: ["バンド正面の確約席", "フリードリンク・お料理付き", "ダンスタイムに参加（3回）"],
    paymentUrl: null,
  },
  {
    name: "通常プラン",
    price: 15000,
    seats: 40,
    body: ["両サイド・カウンターの一般席", "フリードリンク・お料理付き", "ダンスタイムに参加（3回）"],
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

const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

export default function ValentineDance2027Page() {
  return (
    <>
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={asset("/images/hibiya-vibrant-city-jo.jpg")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.18),transparent_55%),linear-gradient(180deg,rgba(26,24,19,0.6),#1a1813)]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">2027.2.14 SUN — Valentine&apos;s Day</p>
          </div>
          <h1 className="display mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Tokyo Swing Party
          </h1>
          <p className="display-jp mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-muted-strong">
            ビッグバンドの生演奏で、プロダンサーと踊る。
            <br className="hidden md:block" />
            日比谷のフードホールで過ごす、バレンタインの午後。
          </p>
          <dl className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl">
            <div>
              <dt className="eyebrow">Date</dt>
              <dd className="mt-2 text-lg">2027年2月14日（日）16:00〜18:30</dd>
            </div>
            <div>
              <dt className="eyebrow">Venue</dt>
              <dd className="mt-2 text-lg">
                San Antonio TEX-MEX
                <br />
                東京ミッドタウン日比谷 B1
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Capacity</dt>
              <dd className="mt-2 text-lg">60名（先着順）</dd>
            </div>
          </dl>
          <div className="mt-12">
            <a
              href="#plans"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 text-[14px] font-medium text-background hover:bg-accent transition-colors"
            >
              プランを選んで予約する
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="plans" className="border-b hairline scroll-mt-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Plans</p>
          </div>
          <h2 className="display-jp mt-6 text-3xl md:text-5xl">参加プラン</h2>
          <p className="mt-6 text-[14px] text-muted-strong">表示価格はお一人様・税込です。</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-2xl border border-line-strong bg-surface p-6 md:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display-jp text-2xl">{plan.name}</h3>
                  <span className="text-[12px] font-mono text-muted">{plan.seats}席</span>
                </div>
                <p className="display mt-4 text-4xl md:text-5xl tracking-tight">{yen(plan.price)}</p>
                <ul className="mt-6 space-y-2 text-[15px] text-muted-strong">
                  {plan.body.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="text-accent">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8" />
                <div className="mt-auto pt-6 border-t hairline">
                  {plan.paymentUrl ? (
                    <a
                      href={plan.paymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 text-[14px] font-medium text-background hover:bg-accent transition-colors"
                    >
                      このプランで予約する（決済へ）
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-line-strong px-6 text-[14px] text-muted"
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

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid gap-16 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Timetable</p>
            </div>
            <h2 className="display-jp mt-6 text-3xl md:text-4xl">当日の流れ</h2>
            <ul className="mt-10 border-t hairline">
              {TIMETABLE.map((t) => (
                <li key={t.time} className="grid grid-cols-[5rem_1fr] gap-4 py-5 border-b hairline">
                  <span className="font-mono text-[14px] text-accent">{t.time}</span>
                  <span className="text-[15px]">{t.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Notes</p>
            </div>
            <h2 className="display-jp mt-6 text-3xl md:text-4xl">ご予約の前に</h2>
            <ul className="mt-10 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-muted-strong">
              {NOTES.map((n) => (
                <li key={n} className="flex gap-3">
                  <span aria-hidden className="text-accent">・</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Legal</p>
          </div>
          <h2 className="display-jp mt-6 text-2xl md:text-3xl">特定商取引法に基づく表記</h2>
          <dl className="mt-10 border-t hairline text-[14px]">
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
              <div key={k} className="grid gap-2 md:grid-cols-[14rem_1fr] py-4 border-b hairline">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-[13px] text-muted">
            主催：株式会社アーティストマージ　／　会場：San Antonio TEX-MEX 東京ミッドタウン日比谷（株式会社クリエイト・ダイニング）　／　ダンサー：dance place FELICE
          </p>
          <p className="mt-2 text-[13px] text-muted">
            お問い合わせ：info@artistmerge.jp
          </p>
        </div>
      </section>
    </>
  );
}
