import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { works, getWorkBySlug } from "@/lib/works";
import { ContactCta } from "@/components/contact-cta";
import { asset } from "@/lib/asset";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} — ArtistMerge`,
    description: work.summary,
  };
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const idx = works.findIndex((w) => w.slug === slug);
  const prev = works[(idx - 1 + works.length) % works.length];
  const next = works[(idx + 1) % works.length];

  return (
    <>
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 z-0">
          {work.cover && (
            <Image
              src={asset(work.cover)}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.22),transparent_55%),linear-gradient(180deg,rgba(26,24,19,0.82),rgba(34,31,24,0.92))]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-28">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[12px] text-muted-strong hover:text-foreground transition-colors mb-12"
          >
            <span aria-hidden>←</span> All Works
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] text-muted font-mono">
              {work.year}
            </span>
            <span className="h-1 w-1 rounded-full bg-line-strong" />
            <span className="text-[11px] text-muted font-mono uppercase">
              {work.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-line-strong" />
            <span
              className={`text-[11px] font-mono ${
                work.status === "upcoming"
                  ? "text-accent-soft"
                  : work.status === "ongoing"
                    ? "text-foreground"
                    : "text-muted"
              }`}
            >
              {work.status.toUpperCase()}
            </span>
          </div>

          <h1 className="display-jp text-4xl md:text-7xl lg:text-8xl max-w-[18ch]">
            {work.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-muted-strong leading-relaxed">
            {work.subtitle}
          </p>

          {work.externalUrl && (
            <a
              href={work.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-[13px] font-medium hover:border-accent hover:text-accent transition-colors"
            >
              公式サイトを見る <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {work.scale.map((s) => (
              <div key={s.label}>
                <p className="eyebrow">{s.label}</p>
                <p className="display mt-3 text-3xl md:text-4xl">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-8">
            <Field label="Client" value={work.client} />
            <Field label="Role" value={work.role} />
            <Field label="Date" value={work.dates} />
            <Field label="Venue" value={work.venues.join(" / ")} />
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <div>
              <p className="eyebrow mb-4">Overview</p>
              <p className="text-[15px] md:text-base leading-relaxed text-muted-strong">
                {work.summary}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Highlights</p>
              <ul className="space-y-3">
                {work.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[15px] md:text-base leading-relaxed"
                  >
                    <span className="mt-2 block h-1 w-2 bg-accent flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          <Link
            href={`/works/${prev.slug}`}
            className="group p-8 md:p-10 bg-background hover:bg-surface transition-colors"
          >
            <p className="eyebrow mb-3">← Previous</p>
            <p className="display text-xl md:text-2xl group-hover:text-accent transition-colors">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/works/${next.slug}`}
            className="group p-8 md:p-10 bg-background hover:bg-surface transition-colors text-right"
          >
            <p className="eyebrow mb-3">Next →</p>
            <p className="display text-xl md:text-2xl group-hover:text-accent transition-colors">
              {next.title}
            </p>
          </Link>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-[14px] leading-relaxed">{value}</p>
    </div>
  );
}
