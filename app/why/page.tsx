import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Why ArtistMerge — 他社にない、4つの揃い方。",
  description:
    "楽曲・バンド・運営・テクノロジー。ライブエンタメに必要な4領域すべてを内製している、ただひとつの音楽プロデュース会社。",
  alternates: {
    canonical: "/why/",
  },
};

const QUADRANTS = [
  {
    label: "Music & IP",
    title: "楽曲・編曲",
    detail: "プロの作編曲家による楽譜・音源を内製。",
    proof: "GrooveCast",
  },
  {
    label: "Live Bands",
    title: "出演バンド・育成",
    detail: "自前のフラッグシップバンドと、公開募集・キュレーション・育成のプロセス。",
    proof: "日比谷 Vibrant City Jazz Orchestra",
  },
  {
    label: "Operations",
    title: "現場運営・キュレーション",
    detail: "街・施設の音楽プログラムを、企画から当日運営まで自社で完結。",
    proof: "HIBIYA FESTIVAL / MUSIC DAY",
  },
  {
    label: "Technology",
    title: "プロダクト・エンジニアリング",
    detail: "音楽 IT プロダクトを、理論設計から物理的な実装まで自社内製。「監修だけ」ではなく、コードを書くチームです。",
    proof: "LIVEXA-OS / Ensemble Maker",
  },
];

const COMPETITORS = [
  {
    type: "大手イベント制作会社",
    missing: "楽曲・自前バンド・テクノロジー",
    am: "4領域すべて内製",
  },
  {
    type: "音楽事務所・キャスティング",
    missing: "現場運営・テクノロジー",
    am: "現場 76+ 回 ＋ LIVEXA-OS",
  },
  {
    type: "楽譜出版社",
    missing: "現場運営・出演体制・テクノロジー",
    am: "全レイヤーを内製",
  },
  {
    type: "チケット／配信プラットフォーム",
    missing: "音楽コンテンツ・現場知見",
    am: "3年運営の現場知見からプロダクト化",
  },
  {
    type: "個人プロデューサー",
    missing: "スケール・継続性",
    am: "法人体制＋3年継続",
  },
];

const REASONS = [
  {
    no: "01",
    fromEn: "SINGLE",
    toEn: "SERIES",
    fromJp: "単発のイベント",
    toJp: "続く音楽プログラム",
    body:
      "打ち上げ花火のようなイベントを、毎月・毎週という頻度で続く文化に育てます。施設の名物として、ファン・常連・周辺住民との関係を蓄積していきます。",
  },
  {
    no: "02",
    fromEn: "MULTI-VENDOR",
    toEn: "INTEGRATED",
    fromJp: "業者の調整・統括が大変",
    toJp: "ワンストップで内製",
    body:
      "楽曲制作・出演バンドのキャスティング・運営・配信・収益化テクノロジーまで、すべて自社で揃えています。発注先1社で完結します。",
  },
  {
    no: "03",
    fromEn: "CASTING",
    toEn: "ENSEMBLE",
    fromJp: "都度キャスティング、品質にバラツキ",
    toJp: "自前バンド ＋ 育成プロセス",
    body:
      "専属フラッグシップバンドと、公開募集・キュレーション・育成のプロセスを内製。施設のトーンに合わせ、長期的に質を担保できるアーティスト体制を提供します。",
  },
  {
    no: "04",
    fromEn: "EVENT",
    toEn: "PROGRAM",
    fromJp: "当日で終わってしまう",
    toJp: "データ・配信・収益化まで",
    body:
      "夏に β リリースの LIVEXA-OS で、チケット販売・ライブ配信・投げ銭・観客データを一気通貫で。当日の感動を、翌日の集客と継続的な売上につなげます。",
  },
  {
    no: "05",
    fromEn: "VENDOR",
    toEn: "PARTNER",
    fromJp: "下請け・業務委託",
    toJp: "共創パートナー",
    body:
      "「指示通りに動く業者」ではなく、施設の音楽戦略を一緒に設計するパートナーです。日比谷との取引は2023年の MUSIC DAY 月例運営から始まり、年次フェスティバルでは初年度から規模2倍以上に拡大しながら2年連続で発注を継続いただいています。3年にわたり、関係を育てています。",
  },
];

const ASSETS = [
  {
    name: "楽曲・編曲 IP",
    detail: "プロの作編曲チームによる楽譜・音源",
    proof: "GrooveCast",
  },
  {
    name: "自前アーティスト",
    detail: "フラッグシップバンドの自社運営",
    proof: "日比谷 Vibrant City Jazz Orchestra ほか",
  },
  {
    name: "アンカー会場との関係",
    detail: "再発注を呼ぶ継続的な信頼関係",
    proof: "HIBIYA エリア・2年連続・76+回",
  },
  {
    name: "プラットフォーム IP",
    detail: "音楽 IT プロダクトを、理論設計から実装まで内製",
    proof: "LIVEXA-OS（2026 夏 β）／Ensemble Maker",
  },
  {
    name: "アーティスト育成プロセス",
    detail: "公開募集 → キュレーション → 育成 → レジデンシー出演",
    proof: "MUSIC DAY 内で運用中",
  },
];

export default function WhyPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.18),transparent_55%),linear-gradient(180deg,#1a1813,#221f18)]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Why ArtistMerge</p>
          </div>
          <h1 className="display-jp mt-8 text-5xl md:text-7xl lg:text-8xl max-w-[18ch]">
            他社にない、
            <br className="hidden md:block" />
            4つの揃い方。
          </h1>
          <p className="mt-12 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-strong">
            ArtistMerge は、楽曲・バンド・運営・テクノロジー。
            ライブエンタメに必要な4領域すべてを内製しています。
            この4つを揃えている事業者は、業界にほとんどいません。
          </p>
        </div>
      </section>

      {/* 4-Quadrant */}
      <section className="bg-background text-foreground border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="block h-[1px] w-10 bg-accent" />
                <p className="eyebrow">All Four Layers, In-House</p>
              </div>
              <h2 className="display-jp mt-6 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
                4象限すべてを、
                <br className="hidden md:block" />
                自社で持っています。
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-[14px] md:text-[15px] leading-relaxed text-muted-strong max-w-prose">
              一般的に、ライブエンタメは「企画」「演者」「制作」「テクノロジー」に分業されます。
              私たちは、この4つすべてを社内で揃えました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line-strong border border-line-strong">
            {QUADRANTS.map((q, i) => (
              <div
                key={q.label}
                className="relative bg-background p-8 md:p-12"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, "0")} / {q.label}
                  </p>
                  <span className="block h-2 w-2 rounded-full bg-accent" />
                </div>
                <h3 className="display-jp text-2xl md:text-3xl lg:text-4xl">
                  {q.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-muted-strong max-w-prose">
                  {q.detail}
                </p>
                <div className="mt-6 pt-6 border-t hairline">
                  <p className="text-[11px] font-mono text-muted">EVIDENCE</p>
                  <p className="display mt-2 text-base md:text-lg text-accent">
                    {q.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="bg-background text-foreground border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Competitive Landscape</p>
          </div>
          <h2 className="display-jp mt-6 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
            業界のプレイヤーは、
            <br className="hidden md:block" />
            それぞれ強みが限定的です。
          </h2>

          <div className="mt-16 border-t hairline">
            <div className="grid grid-cols-12 gap-4 md:gap-6 py-4 border-b hairline text-[11px] font-mono text-muted">
              <p className="col-span-12 md:col-span-3">プレイヤー</p>
              <p className="hidden md:block md:col-span-4">不足している領域</p>
              <p className="hidden md:block md:col-span-5">ArtistMerge の答え</p>
            </div>
            {COMPETITORS.map((c) => (
              <div
                key={c.type}
                className="grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-b hairline"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="display text-lg md:text-xl">{c.type}</p>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-[11px] font-mono text-muted md:hidden mb-1">
                    不足している領域
                  </p>
                  <p className="text-[14px] leading-relaxed text-muted-strong">
                    {c.missing}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[11px] font-mono text-accent md:hidden mb-1">
                    ArtistMerge の答え
                  </p>
                  <p className="text-[14px] leading-relaxed">{c.am}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="bg-background text-foreground border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="block h-[1px] w-10 bg-accent" />
                <p className="eyebrow">5 Reasons</p>
              </div>
              <h2 className="display-jp mt-6 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
                普通のイベント会社とは、
                <br className="hidden md:block" />
                ここが違います。
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-[14px] md:text-[15px] leading-relaxed text-muted-strong max-w-prose">
              施設の集客・ブランディング・収益化に「音楽」を効かせたい時、
              業者選びでつまずくケースが多くあります。
              5つの観点で、私たちの違いを整理しました。
            </p>
          </div>

          <ul className="border-t hairline">
            {REASONS.map((row) => (
              <li
                key={row.no}
                className="grid grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-14 border-b hairline"
              >
                <span className="col-span-2 md:col-span-1 text-[11px] font-mono text-muted">
                  {row.no}
                </span>
                <div className="col-span-10 md:col-span-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="display text-base md:text-lg text-muted line-through decoration-1 decoration-muted/60">
                      {row.fromEn}
                    </span>
                    <span aria-hidden className="text-accent text-base md:text-lg">
                      →
                    </span>
                    <span className="display text-base md:text-lg text-foreground">
                      {row.toEn}
                    </span>
                  </div>
                  <h3 className="display-jp mt-4 text-xl md:text-2xl lg:text-3xl">
                    <span className="block text-muted text-[13px] md:text-[14px] font-normal">
                      {row.fromJp}
                    </span>
                    <span className="block mt-1">→ {row.toJp}</span>
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-7 text-[14px] md:text-[15px] leading-relaxed text-muted-strong">
                  {row.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Asset Map (dark) */}
      <section
        data-theme="dark"
        className="relative bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(193,154,75,0.16),transparent_60%),linear-gradient(180deg,#221f18,#1a1813)]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Five Layers Built In-House</p>
          </div>
          <h2 className="display-jp mt-6 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
            5つのレイヤーを、
            <br className="hidden md:block" />
            すべて内製。
          </h2>

          <ul className="mt-16 border-t hairline">
            {ASSETS.map((a, i) => (
              <li
                key={a.name}
                className="grid grid-cols-12 gap-4 md:gap-8 items-baseline py-8 md:py-10 border-b hairline"
              >
                <span className="col-span-2 md:col-span-1 text-[11px] font-mono text-muted">
                  L{i + 1}
                </span>
                <h3 className="col-span-10 md:col-span-4 display-jp text-xl md:text-2xl">
                  {a.name}
                </h3>
                <p className="col-span-12 md:col-span-4 text-[14px] leading-relaxed text-muted-strong">
                  {a.detail}
                </p>
                <p className="col-span-12 md:col-span-3 text-[12px] font-mono text-accent-soft">
                  {a.proof}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closer */}
      <section
        data-theme="dark"
        className="relative bg-background text-foreground border-b hairline"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center">
          <p className="eyebrow mb-6">Our Position</p>
          <p className="display-jp text-3xl md:text-5xl lg:text-6xl max-w-[28ch] mx-auto">
            楽曲・バンド・運営・テクノロジーを、
            <br className="hidden md:block" />
            すべて自社で持つ、
            <br className="hidden md:block" />
            <span className="text-accent-soft">ただひとつの音楽プロデュース会社。</span>
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
