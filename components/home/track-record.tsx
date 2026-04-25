export function TrackRecord() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-accent" />
          <p className="eyebrow">Selected Twice in a Row</p>
        </div>

        <h2 className="display-jp mt-8 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
          選ばれて、次の年も。
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <p className="text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
            日比谷で開催される音楽フェスティバルを、私たちは2025年に続いて2026年もプロデュースします。
            出演アーティストは10組から30組以上に。会場は1拠点から街区連動の3拠点へ。
            <br />
            <br />
            これは単発の業務委託ではなく、街と施設の音楽プログラムを共に育てるパートナーシップの証です。
            <span className="text-foreground">同じパートナーから2年連続で指名され、規模を3倍に拡大できる事業者は、業界でも限られます。</span>
          </p>

          <div className="grid grid-cols-2 gap-6">
            <Cell year="2025" title="Year One" stats={[
              { label: "出演", value: "10 組" },
              { label: "会場", value: "1 エリア" },
              { label: "発注", value: "初回" },
            ]} />
            <Cell year="2026" title="Year Two" highlighted stats={[
              { label: "出演", value: "30+ 組" },
              { label: "会場", value: "3 エリア" },
              { label: "発注", value: "再発注" },
            ]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cell({
  year,
  title,
  stats,
  highlighted,
}: {
  year: string;
  title: string;
  stats: { label: string; value: string }[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 md:p-8 ${
        highlighted
          ? "border-accent/40 bg-[linear-gradient(180deg,rgba(193,154,75,0.05),transparent)]"
          : "border-line-strong"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-2 right-4 rounded-full bg-accent px-2 py-[2px] text-[10px] font-mono text-background">
          NOW
        </span>
      )}
      <p className="eyebrow">{title}</p>
      <p className="display mt-2 text-4xl md:text-5xl">{year}</p>
      <ul className="mt-6 space-y-3">
        {stats.map((s) => (
          <li
            key={s.label}
            className="flex items-baseline justify-between gap-4 border-t hairline pt-3"
          >
            <span className="text-[12px] text-muted">{s.label}</span>
            <span className={`text-[14px] font-medium ${highlighted ? "text-accent-soft" : ""}`}>
              {s.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
