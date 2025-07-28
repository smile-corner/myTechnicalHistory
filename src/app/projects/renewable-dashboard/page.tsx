import { projects } from "@/const/projects";
import { ProjectsType } from "@/type/projectsType";
import Image from "next/image";
import Link from "next/link";

export default function RenewableDashboardProject() {
  const targetProject: ProjectsType | undefined = projects.find(
    (project) => project.id === "renewable-dashboard"
  );
  if (!targetProject) {
    return <p>指定されたプロジェクトは見つかりませんでした。</p>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EAF1EB] to-blue-100">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-800 font-medium mr-4"
            >
              ← プロジェクト一覧に戻る
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src={targetProject.image.src}
                alt={targetProject.image.alt}
                width={50}
                height={50}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {targetProject.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {targetProject.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              プロジェクト概要
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">目的</h3>
                <p className="text-gray-600 mb-4">
                  ITエンジニアとして環境問題に貢献しつつ、自身のスキルアップを図ることを目的としました。特に、再生可能エネルギーの普及率や地域ごとの進捗状況について、漠然としたイメージだけでなく、具体的なデータに基づいて分析し可視化する過程そのものが大きな学びとなると考え、このダッシュボードの作成に着手しました。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">開発背景</h3>
                <p className="text-gray-600">
                  このダッシュボード開発を通じて、単に技術を習得するだけでなく、現実のデータに触れ、それをどのようにユーザーに分かりやすく提示するかという実践的な思考力を養うことを目指しました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            技術詳細
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">使用技術</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Next.js 15</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">
                    Papaparse（CSVデータ処理）
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Recharts（グラフ描画）</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">開発期間</h3>
              <p className="text-gray-600 mb-4">
                2025年7月 - 2025年7月（1週間）
              </p>

              <h3 className="text-xl font-semibold mb-4">開発体制</h3>
              <p className="text-gray-600 mb-4">個人開発</p>

              <h3 className="text-xl font-semibold mb-4">デプロイ</h3>
              <p className="text-gray-600">Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主な機能
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                計算機能
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • 地域別・年別の再生可能エネルギー比率の推移（折れ線グラフ）
                </li>
                <li>
                  • エネルギー源ごとの発電量推移（折れ線グラフ、地域選択可）
                </li>
                <li>• 特定年のエネルギー源別構成（積み上げ棒グラフ）</li>
                <li>• 特定地域のエネルギー源別構成（円グラフ）</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                UI/UX機能
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• サイドバーによるページナビゲーション</li>
                <li>• レスポンシブデザイン</li>
                <li>• グラフ描画</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            開発過程
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold">要件定義・設計</h3>
              </div>
              <p className="text-gray-600">
                Our World In
                Dataのデータを参考に、何のデータを可視化するかを選定。
                元となるCSVデータの構造を理解し、どのようにグラフ化するかを設計しました。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold">フロントエンド開発</h3>
              </div>
              <p className="text-gray-600">
                PapaParseおよびRechartを利用して、CSVデータからグラフ描画を実装。
                Tailwind CSSを使用して、シンプルで直感的なUIを構築しました。
                また、ダッシュボード風のUI/UXを選びました。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold">テスト・デプロイ</h3>
              </div>
              <p className="text-gray-600">
                基本的な動作確認を実施し、Vercelでデプロイ。
                個人開発として機能を完成させました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Learning */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            成果・学び
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  技術的な学び
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    •
                    Papaparse（CSVデータ解析）やRecharts（チャート描画）といったライブラリの導入
                  </li>
                  <li>• TypeScriptの型安全性の重要性</li>
                  <li>• データ整理とデータ選定の際の設計の重要性</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  プロダクト面の学び
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 客観的なデータの選定</li>
                  <li>• データの可視化の難しさ</li>
                  <li>• 短時間での効率的な開発</li>
                  <li>• サイドバーでの情報へのアクセス向上</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">関連リンク</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://renewablesummarydashboard.vercel.app/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/miyo-naka/renewable_dashboard"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link
              href="/projects"
              className="border border-gray-600 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              他のプロジェクトを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
