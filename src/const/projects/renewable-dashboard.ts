import { ProjectPageData } from "../../type/projectPageType";

export const renewableDashboardData: ProjectPageData = {
  iconSrc: "/projects/renewable_dashboard.png",
  iconAlt: "Renewable Dashboard Icon",
  title: "Renewable Energy Dashboard",
  description: "再生可能エネルギーの普及状況を可視化するダッシュボード",
  overview: {
    purpose:
      "世界および各地域の再生可能エネルギー導入の推移を可視化。再生可能エネルギー（太陽光・風力・水力・バイオエネルギー等）のシェアや発電量の変化を、グラフで直感的に把握できます",
    background:
      "このダッシュボード開発を通じて、単に技術を習得するだけでなく、現実のデータに触れ、それをどのようにユーザーに分かりやすく提示するかという実践的な思考力を養うことを目指しました。特に、再生可能エネルギーの普及率や地域ごとの進捗状況について、漠然としたイメージだけでなく、具体的なデータに基づいて分析し可視化する過程そのものが大きな学びとなると考え、このダッシュボードの作成に着手しました",
    images: [
      {
        src: "/projects/renewable-dashboard-main.png",
        alt: "Renewable Dashboard メイン画面",
        caption: "メイン画面 - 再生可能エネルギーの推移グラフ",
      },
      {
        src: "/projects/renewable-dashboard-detail.png",
        alt: "Renewable Dashboard 詳細画面",
        caption: "詳細画面 - 地域別・エネルギー源別の分析",
      },
    ],
  },
  technical: {
    technologies: [
      { name: "Next.js 15", color: "#000000" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Papaparse（CSVデータ処理）", color: "#10b981" },
      { name: "Recharts（グラフ描画）", color: "#10b981" },
    ],
    developmentPeriod: "2025年7月 - 2025年7月（1週間）",
    developmentTeam: "個人開発",
    deployment: "Vercel",
  },
  features: [
    {
      title: "計算機能",
      color: "#10b981",
      items: [
        "地域別・年別の再生可能エネルギー比率の推移（折れ線グラフ）",
        "エネルギー源ごとの発電量推移（折れ線グラフ、地域選択可）",
        "特定年のエネルギー源別構成（積み上げ棒グラフ）",
        "特定地域のエネルギー源別構成（円グラフ）",
      ],
    },
    {
      title: "UI/UX機能",
      color: "#10b981",
      items: [
        "サイドバーによるページナビゲーション",
        "レスポンシブデザイン",
        "グラフ描画",
      ],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義・設計",
      color: "#10b981",
      description:
        "Our World In Dataのデータを参考に、何のデータを可視化するかを選定。元となるCSVデータの構造を理解し、どのようにグラフ化するかを設計しました。",
    },
    {
      number: 2,
      title: "フロントエンド開発",
      color: "#10b981",
      description:
        "PapaParseおよびRechartを利用して、CSVデータからグラフ描画を実装。Tailwind CSSを使用して、シンプルで直感的なUIを構築しました。また、ダッシュボード風のUI/UXを選びました。",
    },
    {
      number: 3,
      title: "テスト・デプロイ",
      color: "#10b981",
      description:
        "基本的な動作確認を実施し、Vercelでデプロイ。個人開発として機能を完成させました。",
    },
  ],
  learnings: [
    {
      title: "技術的な学び",
      color: "#10b981",
      items: [
        "Papaparse（CSVデータ解析）やRecharts（チャート描画）といったライブラリの導入",
        "TypeScriptの型安全性の重要性",
        "データ整理とデータ選定の際の設計の重要性",
      ],
    },
    {
      title: "プロダクト面の学び",
      color: "#10b981",
      items: [
        "客観的なデータの選定",
        "データの可視化の難しさ",
        "短時間での効率的な開発",
        "サイドバーでの情報へのアクセス向上",
      ],
    },
  ],
  links: [
    {
      href: "https://renewabledashboard.smile-corner.com/",
      text: "デモを見る",
      isPrimary: true,
      color: "green",
      isExternal: true,
    },
    {
      href: "https://github.com/smile-corner/renewable_dashboard",
      text: "GitHub",
      color: "green",
      isExternal: true,
    },
    {
      href: "/projects",
      text: "他のプロジェクトを見る",
      color: "gray",
    },
  ],
};
