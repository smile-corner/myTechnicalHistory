import { ProjectPageData } from "../../type/projectPageType";

export const co2CalculatorData: ProjectPageData = {
  iconSrc: "/projects/CO2.png",
  iconAlt: "CO₂ Icon",
  title: "CO₂排出量計算アプリ",
  description:
    "家庭や生活スタイルから、月間のCO₂排出量を簡単に計算できるWebアプリケーション",
  overview: {
    purpose:
      "環境意識の向上とサステナブルな生活の促進を目的として、家庭や生活スタイルから月間のCO₂排出量を簡単に計算できるWebアプリケーションを開発しました。電気・ガス・水道、交通手段、食生活の影響を総合的に計算し、ユーザーが自分の生活が環境に与える影響を理解できるようにしています。",
    background:
      "環境問題への関心が高まる中、個人レベルでのCO₂排出量を簡単に計算できるツールの必要性を感じ、開発を開始しました。",
    images: [
      {
        src: "/projects/co2-calculator-main.png",
        alt: "CO₂ Calculator メイン画面",
        caption: "メイン画面 - 段階的な入力フォーム",
      },
      {
        src: "/projects/co2-calculator-result.png",
        alt: "CO₂ Calculator 結果画面",
        caption: "結果画面 - 月間CO₂排出量の表示",
      },
    ],
  },
  technical: {
    technologies: [
      { name: "React 19", color: "#61dafb" },
      { name: "Next.js 15", color: "#000000" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Framer Motion", color: "#0055ff" },
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
        "電気・ガス・水道の使用量からCO₂排出量を計算",
        "交通手段（車・電車・バス）の排出量計算",
        "食生活（肉・魚・野菜）の影響計算",
        "月間総排出量の表示と比較",
      ],
    },
    {
      title: "UI/UX機能",
      color: "#10b981",
      items: [
        "段階的な入力フォーム",
        "スムーズなアニメーション",
        "レスポンシブデザイン",
        "環境に配慮した生活の提案",
      ],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義・設計",
      color: "#10b981",
      description:
        "環境省のデータを参考に、家庭の電気・ガス・水道、交通手段、食生活からCO₂排出量を計算するロジックを設計。直感的なUI/UXを重視しました。",
    },
    {
      number: 2,
      title: "フロントエンド開発",
      color: "#10b981",
      description:
        "React 19とNext.js 15を使用してコンポーネントベースの開発を実施。Tailwind CSSでレスポンシブデザインを実現し、Framer Motionでスムーズなアニメーションを追加しました。",
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
        "React 19とNext.js 15の最新機能の活用",
        "Framer Motionを使ったアニメーション実装",
        "TypeScriptの型安全性の重要性",
        "レスポンシブデザインの実装",
      ],
    },
    {
      title: "プロダクト面の学び",
      color: "#10b981",
      items: [
        "環境データの正確な計算ロジック",
        "ユーザビリティを重視したUI設計",
        "短時間での効率的な開発",
        "Vercelでのデプロイと運用",
      ],
    },
  ],
  links: [
    {
      href: "https://co2-calculator.smile-corner.com/",
      text: "デモを見る",
      isPrimary: true,
      color: "green",
      isExternal: true,
    },
    {
      href: "https://github.com/smile-corner/co2-calculator",
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
