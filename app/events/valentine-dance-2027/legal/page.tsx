import Link from "next/link";
import type { Metadata } from "next";
import { asset } from "@/lib/asset";

// 2/14 ダンスイベントの特定商取引法に基づく表記。イベントページ下部のリンクから開く。
export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜東京 Swing Party 2027.2.14 — ArtistMerge",
  alternates: { canonical: "/events/valentine-dance-2027/legal/" },
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: asset("/images/valentine-dance-2027/icon.svg"), type: "image/svg+xml" },
      { url: asset("/images/valentine-dance-2027/icon-32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: asset("/images/valentine-dance-2027/apple-icon.png"),
  },
};

const C = { red: "#E5524C", cream: "#FFF4E4", ink: "#2B1714" };

const ROWS: [string, string][] = [
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
];

export default function ValentineDance2027LegalPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.cream, color: C.ink }}>
      <div className="mx-auto max-w-[900px] px-5 md:px-10 py-14 md:py-20">
        <p className="text-[12px] font-bold tracking-[0.2em]" style={{ color: C.red }}>
          東京 Swing Party 2027.2.14
        </p>
        <h1 className="mt-2 text-2xl md:text-3xl font-black">特定商取引法に基づく表記</h1>
        <dl className="mt-8 text-[13px] md:text-[14px]" style={{ borderTop: "1px solid rgba(43,23,20,0.15)" }}>
          {ROWS.map(([k, v]) => (
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
        <Link href="/events/valentine-dance-2027/" className="mt-10 inline-block text-[14px] font-bold underline underline-offset-4" style={{ color: C.red }}>
          ← イベントページへ戻る
        </Link>
      </div>
    </div>
  );
}
