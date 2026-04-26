export function ContactCta() {
  return (
    <section data-theme="dark" className="relative bg-background text-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-40">
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-[radial-gradient(ellipse_at_30%_20%,rgba(193,154,75,0.18),transparent_60%),linear-gradient(180deg,#221f18,#1a1813)]">
          <div className="grain absolute inset-0" data-theme="dark" />
          <div className="relative px-8 md:px-16 py-16 md:py-24">
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="eyebrow">Inquiry</p>
            </div>
            <h2 className="display-jp mt-8 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]">
              街・施設の音楽を、
              <br />
              次の景色に。
            </h2>
            <p className="mt-8 max-w-2xl text-[15px] md:text-base leading-relaxed text-muted-strong">
              街区の活性化、施設の名物プログラム化、音楽×IT の導入まで。
              日比谷で実証した運営力を、あなたの街・施設にも。
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="mailto:contact@artistmerge.jp"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 text-[14px] font-medium text-background hover:bg-accent transition-colors"
              >
                contact@artistmerge.jp
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
