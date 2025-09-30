import { ProjectPageData } from "../../type/projectPageType";

export const useItOrLoseItData: ProjectPageData = {
  iconSrc: "/projects/UseitorLoseit.png",
  iconAlt: "Use it or Lose it Logo",
  title: "Use it or Lose it",
  description: "自分だけのオリジナル単語管理・クイズ・進捗管理アプリ",
  overview: {
    purpose:
      "英単語クイズを繰り返し解くことによって、英単語の定着を目的としたWebアプリケーションです。英単語一覧の表示・追加・編集・削除、CSVインポートなどにより、自分だけのオリジナルの英単語クイズを作成できます。",
    background:
      "苦手な英単語を覚えるためのツールが欲しくて開発しました。バックエンド・フロントエンド・Dockerの実践的なスキル習得も兼ねています。",
    images: [
      {
        src: "/projects/use-it-or-lose-it-main.png",
        alt: "Use it or Lose it メイン画面",
        caption: "メイン画面 - 単語一覧とクイズ機能",
      },
      {
        src: "/projects/use-it-or-lose-it-progress.png",
        alt: "Use it or Lose it 進捗画面",
        caption: "Progress画面 - 英単語の学習の記録",
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
    developmentPeriod: "2025年7月（約1週間）",
    developmentTeam: "個人開発",
    deployment: "ローカル環境（Docker）",
  },
  features: [
    {
      title: "学習記録管理",
      color: "#3b82f6",
      items: [
        "単語管理：単語の追加、編集、削除",
        "クイズ：ランダム出題、正解/不正解の記録",
        "進捗表示：正解率、最近の間違い単語など",
        "CSV一括インポート",
        "ソート、検索、ページネーション",
      ],
    },
    {
      title: "UI/UX",
      color: "#3b82f6",
      items: ["React Navigationによる画面遷移", "レスポンシブデザイン"],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義・設計",
      color: "#3b82f6",
      description:
        "主に英単語の管理とクイズに機能を絞って、UI/UXの設計を行い、必要な機能を洗い出しました。",
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
        "基本的な動作確認を行いました。今後追加機能として間違った単語の復習提案や英⇔英モード、カテゴリー別の出題なども検討してきたいです。",
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
      href: "https://github.com/smile-corner/Use_It_or_Lose_It",
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
