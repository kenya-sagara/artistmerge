import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Platform — ArtistMerge",
  description:
    "LIVEXA-OS / GrooveCast / Ensemble Maker — ライブエンタメの共通基盤を、現場から立ち上げています。",
};

export default function PlatformPage() {
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
            <p className="eyebrow">Platform</p>
          </div>
          <h1 className="display-jp mt-8 text-5xl md:text-7xl lg:text-8xl max-w-[16ch]">
            現場の知見を、
            <br className="hidden md:block" />
            共通基盤に。
          </h1>
          <p className="mt-12 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-strong">
            ライブエンタメの現場で得た課題を、
            アーティスト・施設・観客のためのプロダクトとして開いていきます。
            日比谷で実証し、全国の街・施設・アーティストへ。
          </p>
        </div>
      </section>

      {/* LIVEXA-OS */}
      <section
        id="livexa"
        data-theme="dark"
        className="relative overflow-hidden bg-background text-foreground border-b hairline"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(193,154,75,0.18),transparent_55%),linear-gradient(180deg,#221f18,#1a1813)]" />
          <div className="grain absolute inset-0" data-theme="dark" />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-accent-soft">Coming Summer 2026</p>
              <h2 className="display mt-6 text-5xl md:text-7xl text-accent-soft">
                LIVEXA-OS
              </h2>
              <p className="mt-6 text-[14px] text-muted-strong">
                ライブエンタメ統合 OS
              </p>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
                チケット販売・ライブ配信・投げ銭・収益化を、
                ひとつのプラットフォームに統合します。
                アーティストの稼ぎ方、施設の集客、観客の体験——
                それぞれを最適化するための共通 OS。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
                {[
                  { title: "Ticketing", desc: "チケット販売・受付・QR入場" },
                  { title: "Live Streaming", desc: "AWS IVS による低遅延配信" },
                  { title: "Tips & Donations", desc: "Stripe Connect による投げ銭・収益分配" },
                  { title: "Artist Suite", desc: "アーティスト管理・データ分析" },
                ].map((f) => (
                  <div key={f.title} className="bg-background p-6">
                    <p className="display text-lg">{f.title}</p>
                    <p className="mt-2 text-[12px] text-muted-strong">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="eyebrow mb-3">Tech Stack</p>
                <p className="text-[12px] text-muted-strong font-mono leading-relaxed">
                  Next.js 16 · TypeScript · PostgreSQL (Aurora) · Redis ·
                  Stripe / Stripe Connect · AWS IVS · WebSocket (API Gateway +
                  Lambda) · ECS Fargate · Terraform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GrooveCast */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Operating</p>
              <h2 className="display mt-6 text-5xl md:text-7xl">GrooveCast</h2>
              <p className="mt-6 text-[14px] text-muted-strong">
                吹奏楽・ビッグバンド向け楽譜出版
              </p>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
                プロの作編曲家による吹奏楽ポップス・ビッグバンド楽譜のデジタル販売。
                団体名印字までのカスタマイズと、YouTube による解説・デモ音源で、
                アマチュア演奏団体の "演奏したい曲" を支えるコンテンツレイヤーです。
              </p>
              <a
                href="https://www.groovecast.tokyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-[13px] font-medium hover:border-accent hover:text-accent transition-colors"
              >
                groovecast.tokyo を見る <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ensemble Maker */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Designed & Built In-House</p>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Ensemble Maker
              </h2>
              <p className="mt-6 text-[14px] text-muted-strong">
                編成自動変換ツール（理論設計から物理的な実装まで）
              </p>
            </div>
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-4 text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
                <p>
                  「アンサンブル・メーカー」は、サービス内にあらかじめ準備された楽譜データを、
                  使用する楽器編成に合わせて自動的に最適なパート割り振りへ変換してくれる
                  音楽アレンジ支援ツールです。
                </p>
                <p>
                  ユーザーは「どの曲を、どんな楽器で演奏したいか」を選ぶだけ。
                  キーや音域の調整、メロディや伴奏などのロール分けはシステムが自動で処理し、
                  完成したアンサンブル譜をすぐに利用できます。
                </p>
                <p>
                  音楽理論・アルゴリズム設計から物理的な実装まで、
                  ArtistMerge の相楽・五十嵐が一貫して手がけています。
                  音楽を理解した者がコードを書き、エンジニアリングを理解した者が音楽を設計する。
                  それが私たちの作り方です。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line">
                {[
                  {
                    label: "Theory & Algorithm",
                    value: "ArtistMerge（相楽・五十嵐）",
                  },
                  {
                    label: "Implementation",
                    value: "ArtistMerge（相楽・五十嵐）",
                  },
                  {
                    label: "Service Provider",
                    value: "株式会社サグブレイン",
                    href: "https://sagbrain.com/",
                  },
                ].map((c) => (
                  <div key={c.label} className="bg-background p-5">
                    <p className="eyebrow">{c.label}</p>
                    <p className="mt-3 text-[13px] leading-relaxed">
                      {"href" in c && c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                        >
                          {c.value}
                          <span aria-hidden className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        c.value
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://sagbrain.com/service/music-ensemble-maker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-[13px] font-medium hover:border-accent hover:text-accent transition-colors"
              >
                サービスページを見る <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
