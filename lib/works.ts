export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  status: "completed" | "upcoming" | "ongoing";
  category: "festival" | "series" | "production";
  venues: string[];
  dates: string;
  scale: { label: string; value: string }[];
  summary: string;
  highlights: string[];
  cover?: string;
  externalUrl?: string;
};

export const works: Work[] = [
  {
    slug: "hibiya-live-festival-2026",
    title: "HIBIYA LIVE FESTIVAL 2026",
    subtitle: "Music Weekend — 街が、ステージになる2日間",
    client: "日比谷エリアマネジメント協会／東京ミッドタウン日比谷",
    role: "音楽プロデュース・出演ブッキング",
    year: "2026",
    status: "upcoming",
    category: "festival",
    venues: [
      "日比谷ステップ広場",
      "東京ミッドタウン日比谷 HIBIYA FOOD HALL",
      "日比谷OKUROJI",
    ],
    dates: "2026年5月16日（土）・17日（日）",
    scale: [
      { label: "出演", value: "30組以上" },
      { label: "会場", value: "3エリア" },
      { label: "開催", value: "2日間" },
      { label: "入場", value: "無料" },
    ],
    summary:
      "2025年に続く2年目のプロデュース。出演数を10組から30組以上に、会場をステップ広場の1拠点から街区連動の3拠点へ拡大。ランチタイムから仕事帰りまで、街そのものをステージ化する。",
    highlights: [
      "前年からのアカウント拡大（規模約3倍）",
      "街区横断の3会場連動運営",
      "ビッグバンド・デュオ・クインテット等の多様な編成",
    ],
    cover: "/images/hibiya-2026-cover.jpg",
    externalUrl: "https://hibiya-festival.artistmerge.jp/",
  },
  {
    slug: "hibiya-festival-2025",
    title: "HIBIYA FESTIVAL 2025",
    subtitle: "Music Weekend ジャズライブ — 1年目の実証",
    client: "Create Dining inc. ／ 東京ミッドタウン日比谷",
    role: "音楽プロデュース・出演ブッキング",
    year: "2025",
    status: "completed",
    category: "festival",
    venues: ["日比谷ステップ広場", "HIBIYA FOOD HALL（雨天時）"],
    dates: "2025年5月17日（土）・18日（日）",
    scale: [
      { label: "出演", value: "10バンド" },
      { label: "会場", value: "1エリア" },
      { label: "開催", value: "2日間" },
      { label: "入場", value: "無料" },
    ],
    summary:
      "日比谷ステップ広場を主会場に、慶應・早稲田などの学生ビッグバンドから社会人バンドまで10組が出演。日比谷エリアの音楽プログラムの起点となり、翌年の3倍規模の発注へとつながった。",
    highlights: [
      "学生〜社会人のビッグバンドを横断キャスティング",
      "翌年の規模拡大（3倍）と再発注の起点に",
      "施設運営者・主催からの継続パートナー関係を確立",
    ],
    cover: "/images/hibiya-2025-cover.jpg",
    externalUrl: "https://music-day.main.jp/event/music-weekend/",
  },
  {
    slug: "music-day-hibiya-food-hall",
    title: "MUSIC DAY at HIBIYA FOOD HALL",
    subtitle: "2023年6月から続く、HIBIYA FOOD HALL の音楽プログラム",
    client: "Create Dining inc.",
    role: "音楽プロデュース・出演ブッキング・バンド育成・フラッグシップバンド運営",
    year: "2023〜継続中",
    status: "ongoing",
    category: "series",
    venues: ["東京ミッドタウン日比谷 B1F HIBIYA FOOD HALL"],
    dates: "土曜日 ディナータイム（隔週〜毎週開催）",
    scale: [
      { label: "2023", value: "17 回" },
      { label: "2024", value: "24 回" },
      { label: "2025", value: "35 回" },
      { label: "累計", value: "76+ 回" },
    ],
    summary:
      "2023年6月10日から続く、HIBIYA FOOD HALL の隔週〜毎週のジャズプログラム。年々開催数が増加し（17→24→35回）、出演バンドの公開募集とキュレーション・育成を行いながら、施設の名物プログラムとして定着させてきました。さらに当社は本イベントの専属フラッグシップバンドとして「日比谷 Vibrant City Jazz Orchestra」を自社運営し、毎月レジデンシー出演するアンカーアクトとして、アーティスト育成のループを内製しています。",
    highlights: [
      "3年継続・累計76回以上の運営実績（隔週〜毎週、年ごとに開催数が拡大）",
      "出演バンドの公開募集・キュレーション・育成プロセスを内製",
      "専属フラッグシップバンド『日比谷 Vibrant City Jazz Orchestra』が毎月レジデンシー出演",
      "LIVEXA-OS の前身となる、リアルなプラットフォーム運営",
    ],
    cover: "/images/music-day-signage.jpg",
    externalUrl: "https://music-day.main.jp/",
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
