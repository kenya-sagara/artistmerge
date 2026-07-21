import Link from "next/link";

const PLATFORM = [
  {
    name: "MUSIC DAY",
    status: "Operating",
    description:
      "HIBIYA FOOD HALL の定期ジャズライブ「MUSIC DAY」を支える公式サイト兼運営プラットフォーム。出演応募・ブッキング・出演料の請求管理・自動通知まで、継続開催の運営業務を一気通貫でデジタル化。",
    href: "https://music-day.main.jp/",
    external: true,
  },
  {
    name: "GrooveCast",
    status: "Operating",
    description:
      "吹奏楽・ビッグバンド向けポップス楽譜のデジタル販売。プロの作編曲家による制作。",
    href: "https://www.groovecast.tokyo/",
    external: true,
  },
  {
    name: "Ensemble Maker",
    status: "Designed & Built In-House",
    description:
      "曲と楽器編成を選ぶだけで、最適なパート割り振りを自動生成する楽譜変換ツール。音楽理論の設計から物理的な実装まで、ArtistMerge が一貫して内製。開発協力は株式会社サグブレイン。",
    href: "https://sagbrain.com/service/music-ensemble-maker/",
    external: true,
  },
];

export function PlatformTeaser() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-accent" />
          <p className="eyebrow">Platform</p>
        </div>

        <h2 className="display-jp mt-8 text-3xl md:text-5xl max-w-[20ch]">
          現場の知見を、共通基盤に。
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {PLATFORM.map((p) => {
            const Inner = (
              <div className="relative h-full p-8 md:p-10 bg-background hover:bg-surface transition-colors">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{p.status}</p>
                  {p.external && (
                    <span aria-hidden className="text-[10px] text-muted">
                      ↗
                    </span>
                  )}
                </div>
                <h3 className="display mt-6 text-2xl md:text-3xl">{p.name}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-strong">
                  {p.description}
                </p>
                <span className="absolute bottom-8 right-8 text-muted group-hover:text-accent">
                  →
                </span>
              </div>
            );

            return p.external ? (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {Inner}
              </a>
            ) : (
              <Link key={p.name} href={p.href} className="group block">
                {Inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
