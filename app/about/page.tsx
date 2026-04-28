import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "About / The Producer — ArtistMerge",
  description:
    "株式会社アーティストマージの会社情報・チーム・ミッション。",
};

type TeamMember = {
  name: string;
  role: string;
  titles?: string[];
  bio: string[];
};

const TEAM: TeamMember[] = [
  {
    name: "相楽 賢哉",
    role: "代表取締役 CEO",
    titles: [
      "ArtistMerge 創業者・代表取締役",
      "株式会社サグブレイン 代表取締役（親会社）",
      "Sagbrain Global Pte. Ltd. 代表取締役 CEO（シンガポール）",
      "SAGBRAIN Bangladesh Co., Ltd. Chairman",
      "複数ビッグバンドのバンドリーダー",
    ],
    bio: [
      "1989年、大学卒業後に東京ガスへ入社。ガス配管設計の実務と CAD 導入、営業技術分野の IT 化を企画・推進し、並行して建築業界の EDI や CAD モデル標準化にも携わる。1999年に IT プロジェクトマネジメント会社へ転職後、2002年に株式会社サグブレインを設立。",
      "サグブレインではビジネスシステム構築とデータマネジメントを軸に、2005年にバイオ研究市場向けデータベース「LDB」を構築・事業化。2012年に EDI プラットフォーム「DOG」、2018年にバイオ研究資機材 EC「BPM」、2021年に「SCM-BIO」を順次立ち上げ、受発注業務の自動化を牽引。2022年からは建築 BIM 分野へ進出し、BIM ライブラリプラットフォームを運用している。",
      "2025年にバングラデシュへ開発拠点 SAGBRAIN Bangladesh Co., Ltd. を設立、2026年3月にはシンガポールに Sagbrain Global Pte. Ltd. を設立。日本・バングラデシュ・シンガポールの三極連携による「グローバル DX プラットフォーム」を構築し、EOR（国際人材ソリューション）や自社プロダクトの APAC 展開を通じて、テクノロジーと人材の力でアジアと世界の距離をゼロにする「Borderless」な社会の実現に取り組む。",
      "2023年、自身が12歳から続けてきた音楽活動と IT プラットフォームの知見を統合し、株式会社アーティストマージを設立。音楽体験・教育・出版を包括するプラットフォーム開発に着手した。LIVEXA-OS をはじめとするライブエンタメ・プラットフォーム開発は、サグブレイン／グループ各社との協業から生まれている。",
      "自身も複数のビッグバンドでバンドリーダーを務める現役プレイヤー。経営者でありながら、ステージで音を鳴らし続ける現場感覚を持ち合わせている。ArtistMerge では音楽プロデュースと事業開発の両輪を担い、街・施設の音楽プログラム運営から、ライブエンタメ統合 OS（LIVEXA-OS）の立ち上げまで指揮する。",
    ],
  },
  {
    name: "五十嵐 誠",
    role: "執行役員 / Music Director",
    titles: [
      "ArtistMerge 執行役員（音楽制作・編曲統括）",
      "日比谷 Vibrant City Jazz Orchestra ミュージックディレクター",
      "Trombonist / Composer-Arranger / Conductor / Big Band Director / Whistler",
    ],
    bio: [
      "トロンボーン奏者、作編曲家、指揮者、ビッグバンドディレクター。演奏・編曲・指揮・音楽監督、さらにはアンサンブルメーカーの思想設計まで手がける、現場型の総合音楽家。",
      "DREAMS COME TRUE、Superfly など日本を代表するアーティストのサポートミュージシャンとして長年活動し、NHK紅白歌合戦、ミュージックステーションをはじめ、数多くのテレビ番組・ライブ・レコーディングに参加。トロンボーン奏者としての豊かな音色と安定した演奏力に加え、アンサンブル全体を俯瞰する音楽的視野を持ち、プレイヤー、アレンジャー、ディレクターの各立場から音楽を構築できる稀有な存在。大手男性アイドルグループのドームツアーではオーケストラのコンダクターを務めるなど、大規模公演における指揮・音楽統括の現場経験も持つ。",
      "作編曲家としては、ホーンセクション、ビッグバンド、番組音楽などを中心に幅広く制作。NHK『探検バクモン』の音楽を担当したほか、数々の公演で音楽監督も務める。単に音を並べるのではなく、演奏者の身体性・楽器の特性・アンサンブルの機能性を踏まえた「鳴るスコア」を追求している。",
      "また珍しい口笛奏者として CM レコーディングなどにも参加。トロンボーン、トランペット、ピアノ、指揮、口笛という多彩な表現手段を活かし、ジャンルや編成にとらわれない柔軟な音楽活動を展開している。地元・石川県での凱旋コンサートは NHK 金沢でも特集され、地域に根ざした活動にも注目が集まった。",
      "現在は演奏・制作活動に加え、編曲アプリ「アンサンブル・メーカー」に関する思想設計にも取り組み、現場の感覚と理論的な構造設計をつなぐ新しい音楽表現の可能性を探求している。ArtistMerge では音楽制作・編曲チームを統括し、GrooveCast の編曲品質を支えつつ、フラッグシップバンド『日比谷 Vibrant City Jazz Orchestra』のミュージックディレクターを務める。",
    ],
  },
];

const COMPANY = [
  { label: "会社名", value: "株式会社アーティストマージ（ArtistMerge Inc.）" },
  { label: "設立", value: "2023年5月29日" },
  { label: "資本金", value: "900万円" },
  { label: "本社", value: "東京都江東区永代 ベルウッド永代ビル5階" },
  {
    label: "事業内容",
    value:
      "音楽イベント企画・運営／楽曲制作・出版（GrooveCast）／音楽 IT プロダクトの理論設計・実装（アンサンブル・メーカー／LIVEXA-OS）",
  },
  {
    label: "親会社",
    value: "株式会社サグブレイン",
    href: "https://sagbrain.com/",
    note: "建設・バイオサイエンス・ERP・音楽など複数業界向けの DX プロダクトを展開する IT 企業（One Bio／ArcChain／Riflex／アンサンブル・メーカー）。",
  },
  {
    label: "グループ会社",
    value:
      "Sagbrain Global Pte. Ltd.（シンガポール／2026年3月16日設立） ／ SAGBRAIN Bangladesh Co., Ltd.（ダッカ／2025年1月2日設立）",
    note: "Sagbrain Global は APAC 展開ハブとして、自社プロダクト（アンサンブル・メーカー等）のグローバル販売、高度 IT 人材ソリューション、グローバル SaaS 契約ハブ事業を推進。SAGBRAIN Bangladesh は ICT・ソフトウェア開発・クラウド・BPO/ITO のオフショア開発拠点。",
  },
];

export default function AboutPage() {
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
            <p className="eyebrow">About / The Producer</p>
          </div>
          <h1 className="display-jp mt-8 text-5xl md:text-7xl lg:text-8xl max-w-[18ch]">
            音楽の現場と、その先の構造を。
          </h1>
          <p className="mt-12 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-strong">
            ArtistMerge は、音楽イベントのプロデュースと、
            ライブエンタメの基盤づくりを両輪で進める会社です。
            街や施設の現場で運営しているからこそ見える課題を、
            プラットフォームとして業界に開いていきます。
          </p>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="block h-[1px] w-10 bg-accent" />
                <p className="eyebrow">Mission</p>
              </div>
              <h2 className="display-jp mt-6 text-3xl md:text-5xl">
                Unify Creativity, Empower Artists.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-6 text-[15px] md:text-base leading-relaxed text-muted-strong max-w-prose">
                <p>
                  アーティストの自由な創造力を支援し、
                  音楽を豊かにする共感の場を提供する。
                </p>
                <p>
                  そのために私たちは、
                  楽曲制作・出演バンド・運営現場・テクノロジーを内製し、
                  音楽が生まれる工程を一気通貫で設計しています。
                </p>
                <p>
                  日比谷からはじまり、街・自治体・全国へ。
                  ライブエンタメの収益構造を、
                  アーティスト・施設・観客の三方良しで再設計していきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Team</p>
          </div>
          <h2 className="display-jp mt-6 text-3xl md:text-5xl">
            現場と経営、両方を知るチーム。
          </h2>

          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-line items-stretch">
            {TEAM.map((m) => (
              <li
                key={m.name}
                className="bg-background p-8 md:p-12 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[linear-gradient(135deg,#c19a4b22,#2a262011)] border border-line-strong flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="display text-2xl md:text-3xl">{m.name}</p>
                    <p className="text-[12px] text-muted-strong font-mono mt-1">
                      {m.role}
                    </p>
                  </div>
                </div>

                {m.titles && m.titles.length > 0 && (
                  <ul className="mb-6 space-y-2 border-y hairline py-4">
                    {m.titles.map((t) => (
                      <li
                        key={t}
                        className="text-[12px] text-muted-strong font-mono flex items-start gap-2"
                      >
                        <span className="text-accent leading-none mt-[2px]">·</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="text-[13px] md:text-[14px] leading-relaxed text-muted-strong space-y-3">
                  {m.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="block h-[1px] w-10 bg-accent" />
            <p className="eyebrow">Company</p>
          </div>
          <h2 className="display-jp mt-6 text-3xl md:text-5xl">
            会社情報。
          </h2>

          <dl className="mt-16 max-w-3xl divide-y divide-line">
            {COMPANY.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5"
              >
                <dt className="sm:col-span-3 eyebrow self-start">
                  {row.label}
                </dt>
                <dd className="sm:col-span-9 text-[14px] md:text-[15px] leading-relaxed">
                  {"href" in row && row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                    >
                      {row.value}
                      <span aria-hidden className="text-[10px]">↗</span>
                    </a>
                  ) : (
                    row.value
                  )}
                  {"note" in row && row.note && (
                    <span className="block mt-2 text-[12px] leading-relaxed text-muted">
                      {row.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
