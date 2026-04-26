import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden bg-background text-foreground border-b hairline"
    >
      {/* Background — photo + dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset("/images/hibiya-2025-cover.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.20),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(216,184,122,0.10),transparent_50%),linear-gradient(180deg,rgba(26,24,19,0.72)_0%,rgba(34,31,24,0.82)_60%,rgba(26,24,19,0.90)_100%)]" />
        <div className="grain absolute inset-0" data-theme="dark" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-44 pb-24 md:pb-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-accent" />
          <p className="eyebrow">Entertainment Platform Producer</p>
        </div>

        {/* Display headline */}
        <h1 className="display-jp mt-8 text-[44px] sm:text-6xl md:text-[88px] lg:text-[104px] max-w-[16ch]">
          施設の音楽を、
          <br className="hidden md:block" />
          続く文化に。
        </h1>

        {/* Sub */}
        <p className="mt-10 max-w-2xl text-[15px] md:text-base leading-relaxed text-muted-strong">
          単発のイベントではなく、続く音楽プログラムを設計する会社です。
          <br />
          楽曲制作・出演バンド・運営・テクノロジーまで、すべて内製。
          <br className="hidden md:block" />
          施設の音楽を、街と人の文化に育てます。
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/works"
            className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 text-[13px] font-medium text-background hover:bg-accent hover:text-background transition-colors"
          >
            Selected Works
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href="mailto:contact@artistmerge.jp"
            className="group inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-[13px] font-medium hover:border-accent hover:text-accent transition-colors"
          >
            contact@artistmerge.jp
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Proof strip */}
        <div className="mt-20 md:mt-32 border-t hairline pt-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-[1px] w-6 bg-accent" />
            <p className="eyebrow">Proof — Hibiya, Tokyo</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <Stat
              eyebrow="Annual Festival"
              value="2 × HIBIYA"
              caption="2025 → 2026 連続プロデュース"
            />
            <Stat
              eyebrow="Account Expansion"
              value="3.0×"
              caption="出演 10 → 30+ 組"
            />
            <Stat
              eyebrow="Recurring Operation"
              value="76+ Sessions"
              caption="隔週〜毎週、3年継続"
            />
            <Stat
              eyebrow="Coming this Summer"
              value="LIVEXA-OS"
              caption="ライブエンタメ統合 OS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  eyebrow,
  value,
  caption,
}: {
  eyebrow: string;
  value: string;
  caption: string;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <p className="display mt-3 text-2xl md:text-3xl">{value}</p>
      <p className="mt-2 text-[12px] text-muted">{caption}</p>
    </div>
  );
}
