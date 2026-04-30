import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { works } from "@/lib/works";
import { ContactCta } from "@/components/contact-cta";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Works — ArtistMerge",
  description:
    "ArtistMerge がプロデュースした音楽イベント・定期ライブの実績一覧。",
  alternates: {
    canonical: "/works/",
  },
};

const STATUS_LABEL: Record<(typeof works)[number]["status"], string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

export default function WorksIndex() {
  return (
    <>
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.16),transparent_55%),linear-gradient(180deg,#1a1813,#221f18)]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Works</p>
          </div>
          <h1 className="display-jp mt-8 text-5xl md:text-7xl lg:text-8xl max-w-[14ch]">
            実績で、語る。
          </h1>
          <p className="mt-10 max-w-2xl text-[15px] md:text-base leading-relaxed text-muted-strong">
            街と施設の音楽プログラムをプロデュースしています。
            年次のフェスティバルから隔週〜毎週の定期ライブまで、継続的に運営される案件が中心です。
          </p>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
          <ul className="space-y-px">
            {works.map((w, i) => (
              <li key={w.slug}>
                <Link
                  href={`/works/${w.slug}`}
                  className="group grid grid-cols-12 gap-4 md:gap-6 items-center py-8 md:py-10 border-t hairline hover:bg-surface/40 transition-colors"
                >
                  <span className="col-span-1 text-[11px] text-muted font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-3 md:col-span-3">
                    {w.cover ? (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface">
                        <Image
                          src={asset(w.cover)}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 25vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-md bg-surface" />
                    )}
                  </div>
                  <div className="col-span-8 md:col-span-5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[11px] text-muted font-mono">
                        {w.year}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-line-strong" />
                      <span className="text-[11px] text-muted font-mono">
                        {labelForCategory(w.category)}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-line-strong" />
                      <span
                        className={`text-[11px] font-mono ${
                          w.status === "upcoming"
                            ? "text-accent-soft"
                            : w.status === "ongoing"
                              ? "text-foreground"
                              : "text-muted"
                        }`}
                      >
                        {STATUS_LABEL[w.status]}
                      </span>
                    </div>
                    <h2 className="display text-xl md:text-3xl tracking-tight group-hover:text-accent transition-colors">
                      {w.title}
                    </h2>
                    <p className="mt-3 text-[13px] md:text-[14px] text-muted-strong max-w-2xl">
                      {w.subtitle}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-2 hidden md:block">
                    <p className="text-[12px] text-muted-strong leading-relaxed">
                      {w.client}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 text-right">
                    <span
                      aria-hidden
                      className="text-muted group-hover:text-accent group-hover:translate-x-1 inline-block transition-all"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

function labelForCategory(c: (typeof works)[number]["category"]) {
  return {
    festival: "Festival",
    series: "Recurring Series",
    production: "Production",
  }[c];
}
