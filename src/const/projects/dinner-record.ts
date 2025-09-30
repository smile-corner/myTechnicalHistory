import { ProjectPageData } from "../../type/projectPageType";

export const dinnerRecordData: ProjectPageData = {
  iconSrc: "/projects/DinnerRecord.png",
  iconAlt: "Dinner Record Icon",
  title: "Dinner Record",
  description: "日々の夕食を簡単に記録・管理できるWebアプリケーション",
  overview: {
    purpose:
      "日々の食事記録を簡単に管理し、食生活の振り返りや健康管理を支援するWebアプリケーションを開発しました。シンプルで直感的なUIを重視し、誰でも簡単に使える食事記録アプリを目指しました。",
    features: [
      "ユーザー認証（ログイン/新規登録）",
      "食事記録（日付、料理名、メモ）",
      "記録一覧表示・編集・削除",
      "カレンダー表示",
      "ジャンル別絞り込み",
    ],
    images: [
      {
        src: "/projects/dinner-record-main.png",
        alt: "Dinner Record メイン画面",
        caption: "メイン画面 - 食事記録の一覧表示",
      },
      {
        src: "/projects/dinner-record-calendar.png",
        alt: "Dinner Record カレンダー画面",
        caption: "カレンダー画面 - 月間の食事記録",
      },
    ],
  },
  technical: {
    technologies: [
      { name: "Next.js 14", color: "#000000" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Firebase Realtime Database", color: "#ffca28" },
      { name: "Firebase Authentication", color: "#10b981" },
    ],
    developmentPeriod: "2024年2月 - 2024年3月（1ヶ月）",
    developmentTeam: "個人開発",
    deployment: "Vercel",
  },
  features: [
    {
      title: "認証機能",
      color: "#f97316",
      items: [
        "Firebase Authentication",
        "ログイン/新規登録",
        "ユーザー別データ管理",
      ],
    },
    {
      title: "記録機能",
      color: "#f97316",
      items: ["日付選択", "料理名入力", "メモ機能", "ジャンル分類"],
    },
    {
      title: "表示機能",
      color: "#f97316",
      items: ["一覧表示", "カレンダー表示", "ジャンル絞り込み", "編集・削除"],
    },
    {
      title: "UI/UX",
      color: "#f97316",
      items: [
        "レスポンシブデザイン",
        "直感的な操作",
        "モダンなデザイン",
        "高速な動作",
      ],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義・設計",
      color: "#f97316",
      description:
        "シンプルで使いやすい食事記録アプリの要件を整理。ユーザー認証、CRUD操作、カレンダー表示などの機能を設計しました。",
    },
    {
      number: 2,
      title: "フロントエンド開発",
      color: "#f97316",
      description:
        "Next.jsとTypeScriptを使用してコンポーネントベースの開発を実施。Tailwind CSSでレスポンシブデザインを実現し、直感的なUI/UXを重視しました。",
    },
    {
      number: 3,
      title: "バックエンド・デプロイ",
      color: "#f97316",
      description:
        "Firebase Realtime Databaseでデータ管理を実装。Firebase Authenticationでユーザー認証を実現し、Vercelでデプロイを完了しました。",
    },
  ],
  learnings: [
    {
      title: "技術的な学び",
      color: "#f97316",
      items: [
        "Firebase Realtime Databaseの活用",
        "認証機能の実装",
        "TypeScriptの実践的活用",
        "レスポンシブデザインの実装",
      ],
    },
    {
      title: "プロダクト面の学び",
      color: "#f97316",
      items: [
        "ユーザビリティの重要性",
        "シンプルな設計の効果",
        "実用的なアプリの開発",
        "デプロイから運用まで",
      ],
    },
  ],
  links: [
    {
      href: "https://dinner-record.smile-corner.com/",
      text: "アプリを見る",
      isPrimary: true,
      color: "orange",
      isExternal: true,
    },
    {
      href: "https://github.com/smile-corner/Dinner-Record",
      text: "GitHub",
      color: "orange",
      isExternal: true,
    },
    {
      href: "/projects",
      text: "他のプロジェクトを見る",
      color: "gray",
    },
  ],
};
