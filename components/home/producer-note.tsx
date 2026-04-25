import Link from "next/link";

export function ProducerNote() {
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Producer&apos;s Note</p>
            </div>
            <h2 className="display-jp mt-6 text-2xl md:text-4xl">
              なぜ、現場とプラットフォームを両方やるのか。
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-6 text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
              <p>
                ライブエンタメの価値は、現場でしか生まれません。
                けれど、その価値が現場限りで終わってしまうのが、これまでの構造でした。
              </p>
              <p>
                私たちは、街・施設・アーティスト・観客が出会う現場を自分たちの手で運営し、
                そこで得た知見を <span className="text-foreground">ライブエンタメの共通基盤（OS）</span>
                として、業界に開いていきます。
              </p>
              <p>
                日比谷で2年連続のフェスティバルをプロデュースし、
                隔週〜毎週の定期ライブを3年間運営する。
                その延長線上に、<span className="text-foreground">LIVEXA-OS</span>
                を立ち上げます。
              </p>
              <p>
                単発のイベント屋ではない。
                エンタメ・プラットフォームを、現場から立ち上げる。
                それが私たちの仕事です。
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[13px] text-foreground hover:text-accent transition-colors group"
                >
                  代表・チームについて
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
