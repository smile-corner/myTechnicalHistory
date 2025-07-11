import Image from "next/image";
import Link from "next/link";

export default function CO2CalculatorProject() {
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
              <Image src="/CO2.png" alt="CO₂ Icon" width={40} height={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              CO₂排出量計算アプリ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              家庭や生活スタイルから、月間のCO₂排出量を簡単に計算できるWebアプリケーション
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
                  環境意識の向上とサステナブルな生活の促進を目的として、
                  家庭や生活スタイルから月間のCO₂排出量を簡単に計算できる
                  Webアプリケーションを開発しました。
                </p>
                <p className="text-gray-600">
                  電気・ガス・水道、交通手段、食生活の影響を総合的に計算し、
                  ユーザーが自分の生活が環境に与える影響を理解できるようにしています。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">開発背景</h3>
                <p className="text-gray-600">
                  環境問題への関心が高まる中、個人レベルでのCO₂排出量を
                  簡単に計算できるツールの必要性を感じ、開発を開始しました。
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
                  <span className="font-medium">React 19</span>
                </div>
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
                  <span className="font-medium">Framer Motion</span>
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
                <li>• 電気・ガス・水道の使用量からCO₂排出量を計算</li>
                <li>• 交通手段（車・電車・バス）の排出量計算</li>
                <li>• 食生活（肉・魚・野菜）の影響計算</li>
                <li>• 月間総排出量の表示と比較</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                UI/UX機能
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 段階的な入力フォーム</li>
                <li>• スムーズなアニメーション</li>
                <li>• レスポンシブデザイン</li>
                <li>• 環境に配慮した生活の提案</li>
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
                環境省のデータを参考に、家庭の電気・ガス・水道、交通手段、食生活から
                CO₂排出量を計算するロジックを設計。直感的なUI/UXを重視しました。
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
                React 19とNext.js 15を使用してコンポーネントベースの開発を実施。
                Tailwind CSSでレスポンシブデザインを実現し、 Framer
                Motionでスムーズなアニメーションを追加しました。
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
                  <li>• React 19とNext.js 15の最新機能の活用</li>
                  <li>• Framer Motionを使ったアニメーション実装</li>
                  <li>• TypeScriptの型安全性の重要性</li>
                  <li>• レスポンシブデザインの実装</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  プロダクト面の学び
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 環境データの正確な計算ロジック</li>
                  <li>• ユーザビリティを重視したUI設計</li>
                  <li>• 短時間での効率的な開発</li>
                  <li>• Vercelでのデプロイと運用</li>
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
              href="https://co2-calculator-pink.vercel.app/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/miyo-naka/co2-calculator"
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
