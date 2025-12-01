import { ProjectPageData } from "../../type/projectPageType";

export const myBooknoteData: ProjectPageData = {
  iconSrc: "/projects/mybooknote.png",
  iconAlt: "mybooknote Icon",
  title: "私の読書記録",
  description: "自分自身の読書記録をカードで一覧表示するためのWebサイト",
  overview: {
    purpose:
      "自分自身の読書記録を素敵なデザインで表示するための特化サイト。自分用のため無駄な機能は削ぎ落し、シンプルな作りに注力しました。",
    background:
      "手書きで書き留めておいた読書記録カードを分かりやすく一覧表示にしたいとの思いから作成しました。",
    images: [
      {
        src: "/projects/mybooknote-main.png",
        alt: "mybooknote メイン画面",
        caption: "カード一覧画面",
      },
    ],
  },
  technical: {
    technologies: [
      { name: "astro 5", color: "#ff0000ff" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "papaparse（CSVデータ処理）", color: "#10b981" },
    ],
    developmentPeriod: "2025年11月（1日）",
    developmentTeam: "個人開発",
    deployment: "Vercel",
  },
  features: [
    {
      title: "カードのフリップ",
      color: "#3b82f6",
      items: [
        "カードの表面にタイトルと著者、裏面にレビューと日付を表示",
        "クリックでカードを裏返す",
      ],
    },
    {
      title: "UI/UX機能",
      color: "#3b82f6",
      items: ["スムーズなアニメーション", "レスポンシブデザイン"],
    },
  ],
  development: [
    {
      number: 1,
      title: "要件定義～実装",
      color: "#3b82f6",
      description:
        "今回は自分用のみという目的が絞られていたため、シンプルなUI/UXを重視しました。また、用途も限られていたため、最低限の設計のみで実装を行い、１日で完成を目指しました。",
    },
  ],
  learnings: [
    {
      title: "技術的な学び",
      color: "#3b82f6",
      items: [
        "Astro.jsの初導入",
        "papaparse（CSVデータ解析）導入時のデータの取り扱い",
      ],
    },
    {
      title: "プロダクト面の学び",
      color: "#3b82f6",
      items: ["シンプルさを追求したUI設計", "短時間での効率的な開発"],
    },
  ],
  links: [
    {
      href: "https://github.com/smile-corner/co2-calculator",
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
