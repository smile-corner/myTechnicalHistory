export const projects = [
  {
    id: "co2-calculator",
    title: "CO₂排出量計算アプリ",
    description:
      "家庭や生活スタイルから、月間のCO₂排出量を簡単に計算できるWebアプリ。電気・ガス・水道、交通手段、食生活の影響を総合的に計算します。",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "環境技術",
    image: "🌱",
    status: "完了",
    linkColor: "text-[#2C5D47] hover:text-green-800",
    bgColor: "bg-green-100",
  },
  {
    id: "dinner-record",
    title: "Dinner Record",
    description:
      "日々の夕食を簡単に記録・管理できるWebアプリケーション。シンプルなUIで料理名やメモを入力し、過去の食事を一覧表示・編集・削除できます。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Webアプリ",
    image: "🍽",
    status: "完了",
    linkColor: "text-orange-600 hover:text-orange-800",
    bgColor: "bg-orange-100",
  },
  {
    id: "study-record",
    title: "StudyRecord",
    description:
      "学びを記録して、成長を見える化するWebアプリ。学習記録の作成・一覧・編集・削除、週ごと/カテゴリごとのまとめ表示、ユーザー情報編集やCSVインポートも可能。",
    technologies: [
      "Laravel 10",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Docker"
    ],
    category: "学習管理",
    image: "📚",
    status: "開発中",
    linkColor: "text-blue-600 hover:text-blue-800",
    bgColor: "bg-blue-100",
    github: "https://github.com/miyo-naka/StudyRecord"
  },
];
