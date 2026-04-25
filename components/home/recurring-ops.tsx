const YEARS = [
  { year: "2023", count: 17, note: "6月10日 開始" },
  { year: "2024", count: 24, note: "+ 41% YoY" },
  { year: "2025", count: 35, note: "+ 46% YoY" },
];
const TOTAL = YEARS.reduce((a, b) => a + b.count, 0);
const MAX = Math.max(...YEARS.map((y) => y.count));

export function RecurringOps() {
  return (
    <section
      data-theme="dark"
      className="relative bg-background text-foreground border-b hairline"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-accent" />
          <p className="eyebrow">Recurring Operation</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <h2 className="display-jp md:col-span-7 text-3xl md:text-5xl lg:text-6xl max-w-[18ch]">
            3年で、76回以上。
            <br />
            隔週〜毎週、開催。
          </h2>
          <p className="md:col-span-5 text-[14px] leading-relaxed text-muted-strong max-w-prose">
            HIBIYA FOOD HALL の音楽プログラム MUSIC DAY は、
            2023年6月から私たちが運営している、
            <span className="text-foreground">隔週〜毎週</span>
            のジャズイベントです。
            出演バンドは公開募集とキュレーションで選定し、
            専属フラッグシップバンド『日比谷 Vibrant City Jazz Orchestra』が毎月レジデンシー出演する、
            <span className="text-foreground">小さなプラットフォーム</span>
            として育てています。
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-px md:bg-line">
          {YEARS.map((y) => (
            <div key={y.year} className="bg-background p-6 md:p-8">
              <p className="text-[11px] font-mono text-muted">{y.year}</p>
              <p className="display mt-3 text-5xl md:text-6xl">
                {y.count}
                <span className="text-xl ml-1 text-muted-strong">回</span>
              </p>
              <p className="mt-3 text-[11px] font-mono text-muted-strong">
                {y.note}
              </p>
              {/* Bar */}
              <div className="mt-6 h-1 w-full bg-line-strong rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent"
                  style={{ width: `${(y.count / MAX) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <div className="bg-background p-6 md:p-8 border-t md:border-t-0 md:border-l border-accent/30 bg-[linear-gradient(180deg,rgba(193,154,75,0.05),transparent)]">
            <p className="text-[11px] font-mono text-accent-soft">CUMULATIVE</p>
            <p className="display mt-3 text-5xl md:text-6xl text-accent-soft">
              {TOTAL}+
              <span className="text-xl ml-1 text-muted-strong">回</span>
            </p>
            <p className="mt-3 text-[11px] font-mono text-muted-strong">
              ＋ 2026 進行中
            </p>
            <div className="mt-6 h-1 w-full bg-line-strong rounded-full overflow-hidden">
              <div className="h-full bg-accent" style={{ width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-[12px] text-muted-strong">
          <a
            href="https://music-day.main.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            MUSIC DAY 公式
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
