import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — ArtistMerge",
  description:
    "音楽イベント・施設プロデュース・プラットフォーム導入のご相談をお受けしています。",
};

const EMAIL = "contact@artistmerge.jp";

const TOPICS = [
  {
    title: "施設・街区の音楽プロデュース",
    body: "商業施設・駅ビル・ホテル・エリアマネジメントなど、街・施設の音楽プログラム運営。",
  },
  {
    title: "定期ライブシリーズの立ち上げ",
    body: "隔週〜毎週で続く音楽プログラム。施設の名物化・ファン化を支援。",
  },
  {
    title: "オリジナル楽曲制作・編曲",
    body: "ブランドソング、施設テーマ曲、周年式典向けオリジナル制作。",
  },
  {
    title: "LIVEXA-OS（β）の導入相談",
    body: "チケット・配信・投げ銭の統合プラットフォーム。Coming Summer 2026。",
  },
  {
    title: "協業・パートナーシップ",
    body: "デベロッパー・鉄道・メディア等との戦略パートナーシップ。",
  },
];

export default function ContactPage() {
  return (
    <>
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.16),transparent_55%),linear-gradient(180deg,#1a1813,#221f18)]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Inquiry</p>
          </div>
          <h1 className="display-jp mt-8 text-5xl md:text-7xl lg:text-8xl max-w-[14ch]">
            ご相談、お待ちしています。
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-strong">
            街・施設の音楽プロデュースから、プラットフォーム導入まで。
            メールにて受け付けています。
          </p>

          {/* Prominent email card */}
          <div className="mt-14 max-w-2xl">
            <div className="rounded-2xl border border-line-strong bg-[linear-gradient(180deg,rgba(193,154,75,0.08),transparent)] p-6 md:p-8">
              <p className="eyebrow text-accent-soft">Send Email</p>
              <p className="display mt-3 text-3xl md:text-4xl tracking-tight break-all">
                {EMAIL}
              </p>
              <p className="mt-3 text-[12px] font-mono text-muted-strong">
                ※2営業日以内にご返信いたします
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 text-[14px] font-medium text-background hover:bg-accent transition-colors"
                >
                  メールを書く
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">こんなご相談を承ります</p>
          </div>
          <h2 className="display-jp mt-6 text-3xl md:text-5xl max-w-[18ch]">
            こんなことで動いています。
          </h2>

          <ul className="mt-16 border-t hairline">
            {TOPICS.map((t, i) => (
              <li
                key={t.title}
                className="grid grid-cols-12 gap-4 md:gap-8 items-baseline py-8 md:py-10 border-b hairline"
              >
                <span className="col-span-2 md:col-span-1 text-[11px] font-mono text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-5 display-jp text-xl md:text-2xl">
                  {t.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-[14px] md:text-[15px] leading-relaxed text-muted-strong">
                  {t.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32 text-center">
          <p className="eyebrow">Office</p>
          <p className="display-jp mt-4 text-2xl md:text-3xl">
            株式会社アーティストマージ
          </p>
          <p className="mt-4 text-[14px] text-muted-strong">
            東京都江東区永代 ベルウッド永代ビル5階
          </p>
        </div>
      </section>
    </>
  );
}
