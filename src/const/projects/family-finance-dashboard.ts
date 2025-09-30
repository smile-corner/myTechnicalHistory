import { ProjectPageData } from "../../type/projectPageType";

export const familyFinanceDashboardData: ProjectPageData = {
  iconSrc: "/projects/family-finance-dashboard.png",
  iconAlt: "Family Finance Dashboard Icon",
  title: "Family Finance Dashboard",
  description: "家計データを可視化・分析するNext.js製ダッシュボード",
  overview: {
    purpose:
      "家計データを可視化・分析することで、支出の内訳を分かりやすく表示し、家族で共有しやすい形にしました。これにより「家計の透明性」を高め、日常的な支出を客観的に把握できるようにしました。",
    background:
      "従来の家計簿では入力や閲覧が個人単位で完結しやすく、家族間での共有や支出傾向の直感的な把握が難しいと感じていました。そこで、実際の家計データを基に「グラフ中心」で直感的に理解できる仕組みを試したいと考え、このアプリを開発しました。",
    images: [
      {
        src: "/projects/family-finance-dashboard-main.png",
        alt: "Family Finance Dashboard メイン画面",
        caption: "メイン画面 - 家計データの可視化ダッシュボード",
      },
      {
        src: "/projects/family-finance-dashboard-detail.png",
        alt: "Family Finance Dashboard 詳細画面",
        caption: "詳細画面 - 支出カテゴリ別の分析",
      },
    ],
  },
  technical: {
    technologies: [
      { name: "Next.js 15", color: "#000000" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Recharts（グラフ描画）", color: "#ff6384" },
      { name: "Firestore（データ管理）", color: "#ffca28" },
      { name: "Firebase（認証）", color: "#10b981" },
    ],
    developmentPeriod: "2025年7月 - 2025年9月（2ヶ月）",
    developmentTeam: "個人開発",
    deployment: "Vercel、Firebase",
  },
  features: [
    {
      title: "データ可視化機能",
      color: "#f97316",
      items: [
        "月別・年別の支出分析",
        "カテゴリ別支出の棒グラフ",
        "支出カテゴリ別の円グラフ表示",
        "支出の内訳を分かりやすく表示",
        "夫婦間でのデータ共有",
      ],
    },
    {
      title: "UI/UX機能",
      color: "#f97316",
      items: [
        "直感的なダッシュボードUI",
        "データの視覚的な表示",
        "サイドバーによるページナビゲーション",
      ],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義・設計",
      color: "#f97316",
      description:
        "家計管理の課題を分析し、支出の可視化に焦点を当てた要件定義を行いました。家族間での共有を前提とした設計を行い、データの透明性を重視した機能設計を実施しました。",
    },
    {
      number: 2,
      title: "フロントエンド開発",
      color: "#f97316",
      description:
        "Next.js 15とTypeScriptを使用して、型安全な開発を実施。Rechartsを活用してグラフ描画機能を実装し、データはFirestore及びFirebase Authenticationを利用して管理しました。この時点でフィードバックをもらい、UI改善や機能追加を行いました。",
    },
    {
      number: 3,
      title: "テスト・デプロイ",
      color: "#f97316",
      description:
        "家計データの正確性とUI/UXの使いやすさを重視したテストを実施。Vercelでデプロイし、実際の家計管理での使用を開始しました。",
    },
  ],
  learnings: [
    {
      title: "技術的な学び",
      color: "#f97316",
      items: [
        "Rechartsを使ったデータ可視化の実装",
        "家計データの構造設計とデータベース設計",
        "Firebaseを使ったデータおよび認証の実装",
      ],
    },
    {
      title: "プロダクト面の学び",
      color: "#f97316",
      items: [
        "家計管理におけるユーザビリティの重要性",
        "データの可視化による家計の透明性向上",
        "家族間での共有を前提とした設計",
        "実際の家計管理での継続的な利用を想定した場合の課題",
      ],
    },
  ],
  links: [
    {
      href: "https://family-finance-dashboard.vercel.app/",
      text: "デモを見る",
      isPrimary: true,
      color: "blue",
      isExternal: true,
    },
    {
      href: "https://github.com/smile-corner/family_finance_dashboard",
      text: "GitHub",
      color: "blue",
      isExternal: true,
    },
    {
      href: "/projects",
      text: "他のプロジェクトを見る",
      color: "gray",
    },
  ],
};
