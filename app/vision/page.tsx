import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Vision — ArtistMerge",
  description:
    "現場とプラットフォーム、両方を持つことで、ライブエンタメの収益構造を再設計する。",
};

const STAGES = [
  {
    no: "01",
    title: "現場で実証する",
    body:
      "街・施設の音楽プログラムを自分たちで運営する。日比谷を起点に、街と音楽の関係を再設計する。",
  },
  {
    no: "02",
    title: "知見をプロダクト化する",
    body:
      "現場で得た課題を、楽譜（GrooveCast）・編成変換（Ensemble Maker）・統合 OS（LIVEXA-OS）に落とし込む。",
  },
  {
    no: "03",
    title: "業界の共通基盤になる",
    body:
      "施設・アーティスト・観客が、ひとつの基盤の上で出会える状態を作る。ライブエンタメの収益構造を、三方良しに作り変える。",
  },
];

export default function VisionPage() {
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
            <p className="eyebrow">Vision</p>
          </div>
          <h1 className="display-jp mt-8 text-5xl md:text-7xl lg:text-8xl max-w-[18ch]">
            ライブエンタメの
            <br className="hidden md:block" />
            共通基盤になる。
          </h1>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Why we exist</p>
            </div>
            <h2 className="display-jp mt-6 text-3xl md:text-4xl">
              現場でしか生まれない価値を、現場限りで終わらせない。
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
            <p>
              ライブの感動は、その場でしか起きない。
              でも、その感動が経済として循環していく構造は、まだ十分に整っていません。
            </p>
            <p>
              アーティストは演奏機会と収益化の両立に苦しみ、
              施設は単発のイベントから先に進めず、
              観客はファンとしての関わり方を持ちきれない。
            </p>
            <p>
              <span className="text-foreground">
                この三者を、ひとつの基盤で繋げられないか。
              </span>
              現場で運営しているからこそ見える課題を、
              プラットフォームの設計に落とし込みます。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-12">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">How we get there</p>
          </div>

          <ul className="space-y-px">
            {STAGES.map((s, i) => (
              <li
                key={s.no}
                className="grid grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-14 border-t hairline"
              >
                <span className="col-span-2 md:col-span-1 display text-3xl md:text-5xl text-accent">
                  {s.no}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="display-jp text-2xl md:text-4xl">
                    {s.title}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-6 text-[15px] md:text-base leading-relaxed text-muted-strong">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="block h-[1px] w-10 bg-accent" />
                <p className="eyebrow">Roadmap</p>
              </div>
              <h2 className="display-jp mt-6 text-3xl md:text-5xl">
                これから。
              </h2>
            </div>
            <div className="md:col-span-7 space-y-px">
              {[
                {
                  when: "2025",
                  what: "HIBIYA FESTIVAL 2025 を初プロデュース。1会場・10組で実証。",
                },
                {
                  when: "2026 Spring",
                  what: "HIBIYA LIVE FESTIVAL 2026 を3会場・30+組へ拡大。再発注。",
                },
                {
                  when: "2026 Summer",
                  what: "LIVEXA-OS β リリース。ライブエンタメ統合 OS の運用開始。",
                },
                {
                  when: "2026〜",
                  what: "他エリア・他施設への横展開。OS 上の参加事業者を拡大。",
                },
              ].map((row) => (
                <div
                  key={row.when}
                  className="grid grid-cols-12 gap-4 border-t hairline py-5"
                >
                  <p className="col-span-12 sm:col-span-3 text-[12px] font-mono text-muted">
                    {row.when}
                  </p>
                  <p className="col-span-12 sm:col-span-9 text-[14px] leading-relaxed">
                    {row.what}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
