import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/lib/works";
import { asset } from "@/lib/asset";

export function SelectedWorks({ works }: { works: Work[] }) {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Selected Works</p>
            </div>
            <h2 className="display-jp mt-6 text-3xl md:text-5xl">
              これまでの仕事から。
            </h2>
          </div>
          <Link
            href="/works"
            className="hidden md:inline-flex text-[13px] text-muted-strong hover:text-foreground transition-colors"
          >
            All Works →
          </Link>
        </div>

        <ul className="space-y-px">
          {works.map((w, i) => (
            <li key={w.slug}>
              <Link
                href={`/works/${w.slug}`}
                className="group grid grid-cols-12 gap-4 md:gap-6 items-center py-6 md:py-8 border-t hairline hover:bg-surface/40 transition-colors"
              >
                <span className="col-span-1 text-[11px] text-muted font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-3 md:col-span-2">
                  {w.cover ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface">
                      <Image
                        src={asset(w.cover)}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 25vw, 16vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] rounded-md bg-surface" />
                  )}
                </div>
                <div className="col-span-7 md:col-span-5">
                  <p className="text-[11px] text-muted font-mono mb-1">
                    {w.year} · {labelForCategory(w.category)}
                  </p>
                  <h3 className="display text-lg md:text-2xl tracking-tight group-hover:text-accent transition-colors">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-muted-strong line-clamp-1">
                    {w.subtitle}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 hidden md:block">
                  <p className="text-[12px] text-muted-strong leading-relaxed">
                    {w.client}
                  </p>
                </div>
                <div className="col-span-1 text-right">
                  <span aria-hidden className="text-muted group-hover:text-accent group-hover:translate-x-1 inline-block transition-all">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden mt-10">
          <Link
            href="/works"
            className="text-[13px] text-muted-strong hover:text-foreground transition-colors"
          >
            All Works →
          </Link>
        </div>
      </div>
    </section>
  );
}

function labelForCategory(c: Work["category"]) {
  return {
    festival: "Festival",
    series: "Recurring Series",
    production: "Production",
  }[c];
}
