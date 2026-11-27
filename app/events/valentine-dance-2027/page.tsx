import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import booking from "./booking.json";
import seatStatus from "./seats.json";
import type { Metadata } from "next";

// 2027/2/14 社交ダンスイベントの予約・決済ページ。
// 決済は Stripe の決済リンク（ダッシュボードで発行、人数は決済画面で選ぶ。上限は booking.json の maxPerOrder）に飛ばす。
// プラン・定員・リンクは booking.json に持つ。リンクを貼るまでボタンは受付開始日の表示になる。
// サイトは静的書き出しなので、売れた人数の集計と定員での締め切りは GitHub Actions
// （.github/workflows/valentine-seats.yml）が行い、結果を seats.json に書く。

const SHARE_TITLE = "東京 Swing Party 2027.2.14（日）｜生バンドとプロダンサーと踊る社交ダンスパーティー";
const SHARE_DESC =
  "バレンタインの日比谷で、7人編成のジャズバンドの生演奏とプロダンサーと踊る社交ダンスパーティー。東京ミッドタウン日比谷 B1F・San Antonio TEX-MEX、16:00開場。お食事・フリードリンク付き、定員60名。";
const SHARE_IMAGE = { url: asset("/images/valentine-dance-2027/og.jpg"), width: 1200, height: 630, alt: "東京 Swing Party 2027.2.14" };

export const metadata: Metadata = {
  title: "東京 Swing Party 2027.2.14 — ArtistMerge",
  description: SHARE_DESC,
  // SNS でシェアしたときのタイトル・説明・画像（サイト共通の設定を置き換える）
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESC,
    url: "https://artistmerge.jp/events/valentine-dance-2027/",
    siteName: "ArtistMerge",
    type: "website",
    locale: "ja_JP",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESC,
    images: [SHARE_IMAGE.url],
  },
  alternates: {
    canonical: "/events/valentine-dance-2027/",
  },
  // 会場との最終確認が済み、受付を始めるまで検索に出さない
  robots: { index: false, follow: false },
  // このページだけ専用のファビコン（サイト共通の favicon.ico を置き換える）
  icons: {
    icon: [
      { url: asset("/images/valentine-dance-2027/icon.svg"), type: "image/svg+xml" },
      { url: asset("/images/valentine-dance-2027/icon-32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: asset("/images/valentine-dance-2027/apple-icon.png"),
  },
};

type Plan = {
  key: string;
  name: string;
  price: number;
  seats: number;
  body: string[];
  paymentUrl: string | null;
};

const PLAN_BODY: Record<string, string[]> = {
  seated: ["バンド正面のテーブル席（相席）", "フリードリンク・お料理付き", "プロダンサーがお相手するダンスタイム"],
  general: ["両サイドとカウンターの一般席（半立食）", "フリードリンク・お料理付き", "プロダンサーがお相手するダンスタイム"],
};

const PLANS: Plan[] = booking.plans.map((p) => ({ ...p, body: PLAN_BODY[p.key] ?? [] }));

type SeatState = { sold: number; remaining: number; closed: boolean };
const SEATS = seatStatus.plans as Record<string, SeatState | undefined>;

const TIMETABLE = [
  { time: "16:00", body: "開場（ドリンク・おつまみ）" },
  { time: "16:20", body: "ダンスタイム（20分 × 3セット、間に10分休憩）" },
  { time: "17:40", body: "お食事タイム" },
  { time: "18:10", body: "プロダンサーによるショー" },
  { time: "18:30", body: "終演" },
];

const NOTES = [
  `1回のお申し込みで${booking.maxPerOrder}名様までご予約いただけます（人数は決済画面で選べます）。${booking.maxPerOrder + 1}名様以上でご参加の場合は、複数回に分けてお申し込みください。`,
  "お支払いは Stripe の決済ページで行います。決済が完了した時点で予約確定となり、確認メールが届きます。",
  "各プランとも、定員に達した時点で受付を終了します。",
  "キャンセル・返金の条件は、ページ下部の「特定商取引法に基づく表記」をご覧ください。",
  "お席の指定はできません（着席確約プランは確約エリア内のいずれかのお席です）。",
  "会場に更衣室はありません。ダンスシューズ等は各自でご用意ください。",
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
  { title: "豪華生ジャズバンドの演奏で！", body: "MUSIC DAY の専属バンドから選抜した7人編成の生演奏。ライブならではのサウンドで踊れます。" },
  { title: "プロダンサーと踊れる！", body: "ダンスタイムでは、プロダンサーがゲストのお相手をします。" },
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
          <Link href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[15px] font-bold tracking-tight">
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
            <p className="mt-4 text-[13px] opacity-90">
              {PLANS.some((p) => p.paymentUrl) ? "定員60名・先着順" : "11月28日（土）15:00 予約受付開始・定員60名・先着順"}
            </p>
          </div>
        </div>
      </section>

      {/* Dancer photos */}
      <section style={{ backgroundColor: C.redDeep }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-16 md:pt-24">
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-[760px] mx-auto">
            {[
              { src: "/images/dance-stage.jpg", rot: "-rotate-2" },
              { src: "/images/dance-ayumihama.jpg", rot: "rotate-2 md:translate-y-8" },
            ].map((p) => (
              <div
                key={p.src}
                className={`relative aspect-[2/3] overflow-hidden rounded-2xl border-4 shadow-[0_10px_0_rgba(0,0,0,0.18)] ${p.rot}`}
                style={{ borderColor: C.cream }}
              >
                <Image src={asset(p.src)} alt="プロダンサーのペア" fill sizes="(min-width: 768px) 380px, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-6 md:mt-14 text-center text-[12px] opacity-75">写真は過去のイベントに出演したプロダンサーです</p>
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

      {/* Performers */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24">
          <div className="text-center">
            <Eyebrow>Performers</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">出演</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl p-6 md:p-8" style={{ backgroundColor: C.cream, color: C.ink }}>
              <p className="text-[12px] font-bold tracking-[0.2em]" style={{ color: C.red }}>
                LIVE BAND
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-black leading-tight">
                日比谷 Vibrant City
                <br />
                Jazz Orchestra
              </h3>
              <p className="mt-1 text-[13px] font-bold opacity-70">選抜メンバーによるダンスバンド（7名）</p>
              <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed">
                2023年から HIBIYA FOOD HALL で続く音楽プログラム「MUSIC DAY」の専属フラッグシップバンド。毎月のレジデンシー出演で日比谷の週末を盛り上げてきたメンバーが、ドラム・ベース・ピアノ・ホーンにパーカッションを加えた編成で、スウィングからラテンまで踊れるナンバーを生演奏します。
              </p>
              <Link
                href="/works/music-day-hibiya-food-hall/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[13px] font-bold underline underline-offset-4"
                style={{ color: C.red }}
              >
                MUSIC DAY の活動を見る →
              </Link>
            </div>
            <div className="rounded-3xl p-6 md:p-8" style={{ backgroundColor: C.cream, color: C.ink }}>
              <p className="text-[12px] font-bold tracking-[0.2em]" style={{ color: C.red }}>
                PRO DANCERS
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-black leading-tight">
                プロダンサー
              </h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed">
                競技会やパーティーで活躍するプロダンサーが、ダンスタイムでゲストのお相手を務めます。締めくくりは、プロダンサーによるショーです。
              </p>
              <p className="mt-5 text-[13px] opacity-70">出演ダンサーは決まり次第お知らせします。</p>
            </div>
          </div>
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
                  {SEATS[plan.key] && !SEATS[plan.key]!.closed && (
                    <p className="mb-3 text-center text-[14px] font-bold" style={{ color: C.red }}>
                      残り {SEATS[plan.key]!.remaining} 席
                    </p>
                  )}
                  {SEATS[plan.key]?.closed ? (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-14 w-full items-center justify-center rounded-full text-[15px] font-black text-white"
                      style={{ backgroundColor: C.ink }}
                    >
                      満席になりました
                    </span>
                  ) : plan.paymentUrl ? (
                    <a
                      href={plan.paymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full text-[16px] font-black transition-transform hover:-translate-y-0.5"
                      style={{ backgroundColor: C.red, color: "#fff" }}
                    >
                      人数を選んで予約する →
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-dashed text-[14px] font-bold opacity-60"
                      style={{ borderColor: C.ink }}
                    >
                      11月28日（土）15:00 受付開始
                    </span>
                  )}
                  <p className="mt-3 text-center text-[12px] opacity-70">1回で{booking.maxPerOrder}名様までお申し込みいただけます</p>
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

      {/* Venue */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 grid gap-10 md:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <Eyebrow>Venue</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black">会場</h2>
            <p className="mt-6 text-2xl font-black leading-snug">San Antonio TEX-MEX</p>
            <p className="mt-1 text-[15px] font-bold">HIBIYA FOOD HALL（東京ミッドタウン日比谷 B1F）</p>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed opacity-95">
              日比谷のフードホールにあるテックスメックス・レストラン。当日は貸切で、お料理とフリードリンクを楽しみながら踊れます。
            </p>
          </div>
          <dl
            className="rounded-3xl p-6 md:p-8 text-[14px] md:text-[15px]"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            {[
              ["住所", "〒100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 B1F"],
              ["アクセス", "東京メトロ日比谷線・千代田線、都営三田線「日比谷駅」直結／JR「有楽町駅」徒歩約5分"],
              ["更衣室", "ありません。動きやすい服装でお越しください"],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 md:grid-cols-[6rem_1fr] py-3 first:pt-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <dt className="font-bold" style={{ color: C.yellow }}>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
            <a
              href="https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3%E6%97%A5%E6%AF%94%E8%B0%B7+San+Antonio+TEX-MEX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-full px-5 text-[14px] font-bold"
              style={{ backgroundColor: C.yellow, color: C.ink }}
            >
              Google マップで見る →
            </a>
          </dl>
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
              ["商品代金以外の必要料金", "なし"],
              ["お支払い方法", "クレジットカード（Apple Pay・Google Pay を含む）。Stripe の決済ページでお支払いいただきます"],
              ["お支払い時期", "お申し込み時"],
              ["提供時期", "2027年2月14日（日）イベント当日"],
              ["キャンセル・返金", "お客様のご都合によるキャンセルは、info@artistmerge.jp までご連絡ください。2月6日（土）までは全額、2月7日（日）〜11日（木・祝）は参加費の70%、2月12日（金）〜13日（土）は50%を返金します。当日および無断でのキャンセルは返金できません。主催者の都合でイベントを中止した場合は全額を返金します。"],
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
            運営：株式会社アーティストマージ　／　会場：San Antonio TEX-MEX 東京ミッドタウン日比谷（株式会社クリエイト・ダイニング）
          </p>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] opacity-60">ORGANIZED BY</p>
            <Link href="/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-xl font-bold">
              <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: C.yellow }} />
              ArtistMerge
            </Link>
            <p className="mt-2 text-[13px] opacity-80">運営：株式会社アーティストマージ</p>
          </div>
          <div className="flex flex-col gap-2 text-[13px] md:items-end">
            <Link href="/" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-80" style={{ color: C.yellow }}>
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
