import Link from "next/link";

const ROWS = [
  {
    no: "01",
    fromEn: "SINGLE",
    toEn: "SERIES",
    fromJp: "単発のイベント",
    toJp: "続く音楽プログラム",
    body:
      "打ち上げ花火のようなイベントを、毎月・毎週という頻度で続く文化に育てます。施設の名物プログラムとして、ファン・常連・周辺住民との関係を蓄積します。",
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
      "専属フラッグシップバンドと、公開募集・キュレーション・育成のプロセスを内製。施設のトーンに合わせた、長期的に質を担保できるアーティスト体制を提供します。",
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

export function WhyArtistMerge() {
  return (
    <section className="relative bg-background text-foreground border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Why ArtistMerge</p>
            </div>
            <h2 className="display-jp mt-6 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
              普通のイベント会社とは、
              <br className="hidden md:block" />
              ここが違います。
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-[14px] md:text-[15px] leading-relaxed text-muted-strong max-w-prose">
            施設の集客・ブランディング・収益化に「音楽」を効かせたい。
            けれど、業者選びでつまずくケースが多くあります。
            5つの観点で、私たちが提供できる違いを整理しました。
          </p>
        </div>

        {/* Rows */}
        <ul className="border-t hairline">
          {ROWS.map((row) => (
            <li
              key={row.no}
              className="grid grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-14 border-b hairline"
            >
              <span className="col-span-2 md:col-span-1 text-[11px] font-mono text-muted">
                {row.no}
              </span>

              {/* From → To (English transition labels) */}
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

              {/* Body */}
              <p className="col-span-12 md:col-span-7 text-[14px] md:text-[15px] leading-relaxed text-muted-strong">
                {row.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/why"
            className="group inline-flex items-center gap-2 text-[14px] text-foreground hover:text-accent transition-colors"
          >
            <span className="border-b border-line-strong group-hover:border-accent transition-colors pb-[2px]">
              4象限の比較・競合分析・5つの資産まで詳しく見る
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
