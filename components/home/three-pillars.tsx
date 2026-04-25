import Link from "next/link";

const PILLARS = [
  {
    no: "01",
    label: "Music",
    titleJp: "音楽の現場で、戦える。",
    body:
      "Music Director の五十嵐 誠は、メジャーアーティストのレコーディング・ツアーサポート・音楽番組で活動する現役プロ。CEO の相楽 賢哉も複数ビッグバンドのリーダーを務めるプレイヤー。プロの楽曲制作・アレンジ・演奏品質を、自社内で保証します。",
    proofs: [
      "GrooveCast（楽曲・編曲）",
      "日比谷 Vibrant City Jazz Orchestra",
      "Major Recording / Touring 経験",
    ],
  },
  {
    no: "02",
    label: "Technology",
    titleJp: "音楽 IT を、理論から実装まで。",
    body:
      "親会社の株式会社サグブレインは、複数業界向けの DX プロダクトを展開する IT 企業。日本・シンガポール（Sagbrain Global）・バングラデシュ（SAGBRAIN Bangladesh）の3拠点で開発し、シンガポールから APAC 展開も推進中（アンサンブル・メーカーも対象）。音楽 IT プロダクトを、その本格的なエンジニアリング基盤の上で、ArtistMerge が理論設計から物理的な実装まで内製しています。「監修だけ」ではなく、コードを書き、プロダクトを動かしているのが、私たちです。",
    proofs: [
      "アンサンブル・メーカー（理論設計〜実装）",
      "LIVEXA-OS（Coming Summer 2026）",
      "親会社：株式会社サグブレイン（DX プラットフォーマー）",
    ],
  },
  {
    no: "03",
    label: "Partnership",
    titleJp: "3年単位で、関係を育てる。",
    body:
      "単発の業務委託ではなく、施設の音楽戦略を一緒に育てる長期パートナーです。日比谷では2023年の MUSIC DAY 月例運営から始まり、年次フェスでは初年度から3倍規模に拡大しながら2年連続で発注を継続いただいています。",
    proofs: [
      "HIBIYA：3年継続（2023〜）",
      "MUSIC DAY：累計 76+ 回",
      "Festival：2年連続・3倍拡大",
    ],
  },
];

export function ThreePillars() {
  return (
    <section className="bg-background text-foreground border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Three Pillars</p>
            </div>
            <h2 className="display-jp mt-6 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
              音楽に強く、IT に強く、
              <br className="hidden md:block" />
              関係を育てます。
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-[14px] md:text-[15px] leading-relaxed text-muted-strong max-w-prose">
            ArtistMerge は、3つの柱で他社と違いをつくっています。
            プロ音楽家の現場感覚、自社開発のテクノロジー、
            そして3年単位で関係を育てる長期パートナーシップです。
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line-strong border border-line-strong">
          {PILLARS.map((p) => (
            <li
              key={p.no}
              className="bg-background p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[11px] font-mono text-muted">{p.no}</span>
                <span className="eyebrow text-accent">{p.label}</span>
              </div>
              <h3 className="display-jp text-2xl md:text-3xl mb-6">
                {p.titleJp}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted-strong flex-1">
                {p.body}
              </p>
              <ul className="mt-8 pt-6 border-t hairline space-y-2">
                {p.proofs.map((proof) => (
                  <li
                    key={proof}
                    className="text-[12px] font-mono text-muted-strong flex items-start gap-2"
                  >
                    <span className="text-accent mt-[2px] leading-none">·</span>
                    <span>{proof}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/why"
            className="group inline-flex items-center gap-2 text-[14px] text-foreground hover:text-accent transition-colors"
          >
            <span className="border-b border-line-strong group-hover:border-accent transition-colors pb-[2px]">
              4象限・競合分析・5つの内製資産まで詳しく見る
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
