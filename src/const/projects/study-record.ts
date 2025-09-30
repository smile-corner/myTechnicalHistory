import { ProjectPageData } from "../../type/projectPageType";

export const studyRecordData: ProjectPageData = {
  iconSrc: "/projects/study-record-logo.png",
  iconAlt: "Study Record Icon",
  title: "Learning Tracker",
  description: "学びを記録して、成長を見える化するWebアプリケーション",
  overview: {
    purpose:
      "学習の記録・可視化を通じて、日々の成長を実感できるようにすることを目的としたWebアプリケーションです。記録の作成・一覧・編集・削除、週ごと・カテゴリごとのまとめ表示、ユーザー情報編集やCSVインポートなど、学習管理に必要な機能を備えています。",
    background:
      "日々の学びを継続し、振り返りや分析をしやすくするためのツールが欲しくて開発を始めました。バックエンド・フロントエンド・インフラの実践的なスキル習得も兼ねています。",
    images: [
      {
        src: "/projects/study-record-main.png",
        alt: "Study Record メイン画面",
        caption: "メイン画面 - 学習記録の一覧表示",
      },
      {
        src: "/projects/study-record-summary.png",
        alt: "Study Record サマリー画面",
        caption: "サマリー画面 - 週間・カテゴリ別の集計",
      },
    ],
  },
  technical: {
    technologies: [
      { name: "Laravel 10", color: "#ff2d20" },
      { name: "Next.js 15", color: "#000000" },
      { name: "React 19", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "MySQL", color: "#4479a1" },
      { name: "Docker", color: "#2496ed" },
    ],
    developmentPeriod: "2025年4月～5月（約3週間）",
    developmentTeam: "個人開発",
    deployment: "ローカル環境（Docker）",
  },
  features: [
    {
      title: "学習記録管理",
      color: "#3b82f6",
      items: [
        "記録の作成・一覧・編集・削除",
        "週ごと・カテゴリごとのまとめ表示",
        "CSVインポート機能",
      ],
    },
    {
      title: "ユーザー管理",
      color: "#3b82f6",
      items: ["ユーザー登録・ログイン", "ユーザー情報編集"],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義・設計",
      color: "#3b82f6",
      description:
        "学習記録のデータ構造や集計方法、UI/UXの設計を行い、必要な機能を洗い出しました。",
    },
    {
      number: 2,
      title: "バックエンド・フロントエンド開発",
      color: "#3b82f6",
      description:
        "LaravelでAPIを構築し、Next.js/Reactでフロントエンドを開発。Dockerでローカル開発環境を整備し、MySQLでデータを管理しました。",
    },
    {
      number: 3,
      title: "テスト・運用",
      color: "#3b82f6",
      description:
        "基本的な動作確認を行い、今後はUI/UXの改善や本番環境へのデプロイも検討しています。",
    },
  ],
  learnings: [
    {
      title: "技術的な学び",
      color: "#3b82f6",
      items: [
        "LaravelとNext.jsのAPI連携",
        "Dockerによる開発環境構築",
        "データ集計・可視化の実装",
        "UI/UX設計の工夫",
      ],
    },
    {
      title: "プロダクト面の学び",
      color: "#3b82f6",
      items: [
        "学習継続のモチベーション向上",
        "ユーザー目線での機能設計",
        "実践的なフルスタック開発経験",
      ],
    },
  ],
  links: [
    {
      href: "https://github.com/smile-corner/StudyRecord",
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
