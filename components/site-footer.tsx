import Link from "next/link";

const FOOTER_NAV = {
  Sitemap: [
    { href: "/works", label: "Works" },
    { href: "/why", label: "Why ArtistMerge" },
    { href: "/platform", label: "Platform" },
    { href: "/about", label: "About / The Producer" },
    { href: "/vision", label: "Vision" },
    { href: "/contact", label: "Contact" },
  ],
  Platform: [
    { href: "/platform#livexa", label: "LIVEXA-OS" },
    { href: "https://www.groovecast.tokyo/", label: "GrooveCast", external: true },
    {
      href: "https://sagbrain.com/service/music-ensemble-maker/",
      label: "Ensemble Maker",
      external: true,
    },
    {
      href: "https://sagbrain.com/",
      label: "株式会社サグブレイン（親会社）",
      external: true,
    },
  ],
  Showcases: [
    {
      href: "https://hibiya-festival.artistmerge.jp/",
      label: "HIBIYA LIVE FESTIVAL 2026",
      external: true,
    },
    {
      href: "https://music-day.main.jp/event/music-weekend/",
      label: "HIBIYA FESTIVAL 2025",
      external: true,
    },
    {
      href: "https://music-day.main.jp/",
      label: "MUSIC DAY at HIBIYA FOOD HALL",
      external: true,
    },
  ],
};

export function SiteFooter() {
  return (
    <footer
      data-theme="dark"
      className="bg-background text-foreground border-t hairline mt-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="block h-2 w-2 rounded-full bg-accent" />
              <span className="display text-lg font-semibold">ArtistMerge</span>
            </Link>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-muted-strong">
              エンタメ・プラットフォームを、現場から立ち上げる。
              <br />
              街・施設・アーティスト・観客をひとつの基盤で繋ぎ、
              ライブエンタメの収益構造を再設計します。
            </p>
            <div className="mt-8">
              <p className="eyebrow mb-2">Inquiry</p>
              <a
                href="mailto:info@artistmerge.jp"
                className="display text-2xl tracking-tight hover:text-accent transition-colors"
              >
                info@artistmerge.jp
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_NAV).map(([title, items]) => (
              <div key={title}>
                <p className="eyebrow mb-4">{title}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.href}>
                      {"external" in item && item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] text-muted-strong hover:text-foreground transition-colors inline-flex items-center gap-1"
                        >
                          {item.label}
                          <span aria-hidden className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-[13px] text-muted-strong hover:text-foreground transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t hairline flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-[11px] text-muted">
            © {new Date().getFullYear()} ArtistMerge Inc. All rights reserved.
          </p>
          <p className="text-[11px] text-muted">
            株式会社アーティストマージ — 東京都江東区永代
          </p>
        </div>
      </div>
    </footer>
  );
}
