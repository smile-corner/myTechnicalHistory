import { ProjectPageData } from "../type/projectPageType";

export const projectPages: { [key: string]: ProjectPageData } = {
  "co2-calculator": {
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
        href: "https://co2-calculator-pink.vercel.app/",
        text: "デモを見る",
        isPrimary: true,
        color: "green",
        isExternal: true,
      },
      {
        href: "https://github.com/miyo-naka/co2-calculator",
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
  },
  "dinner-record": {
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
        color: "#10b981",
        items: [
          "Firebase Realtime Databaseの活用",
          "認証機能の実装",
          "TypeScriptの実践的活用",
          "レスポンシブデザインの実装",
        ],
      },
      {
        title: "プロダクト面の学び",
        color: "#10b981",
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
        href: "https://dinner-record.vercel.app/",
        text: "アプリを見る",
        isPrimary: true,
        color: "orange",
        isExternal: true,
      },
      {
        href: "https://github.com/miyo-naka/Dinner-Record",
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
  },
  "study-record": {
    iconSrc: "/projects/study-record-logo.png",
    iconAlt: "Study Record Icon",
    title: "StudyRecord",
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
        href: "https://github.com/miyo-naka/StudyRecord",
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
  },
  "use-it-or-lose-it": {
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
        href: "https://github.com/miyo-naka/Use_It_or_Lose_It",
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
  },
  "renewable-dashboard": {
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
        href: "https://renewablesummarydashboard.vercel.app/",
        text: "デモを見る",
        isPrimary: true,
        color: "green",
        isExternal: true,
      },
      {
        href: "https://github.com/miyo-naka/renewable_dashboard",
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
  },
};
