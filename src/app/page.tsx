import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EAF1EB] to-blue-100">
      {/* 1️⃣ Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            My technical history
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            小さく始める、環境×テクノロジーの一歩
          </p>
          <Link
            href="#projects"
            className="bg-[#2C5D47] text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
          >
            プロジェクトを見る
          </Link>
        </div>
      </section>

      {/* 2️⃣ Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          プロジェクト
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Dinner Record */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 bg-orange-100 flex items-center justify-center p-8">
                <span className="text-6xl">🍽</span>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Dinner Record
                </h3>
                <p className="text-gray-600 mb-6">
                  日々の夕食を簡単に記録・管理できるWebアプリケーション。
                  シンプルなUIで料理名やメモを入力し、過去の食事を一覧表示・編集・削除できます。
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Firebase
                  </span>
                </div>
                <Link
                  href="/projects/dinner-record"
                  className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>

          {/* CO₂ Calculator */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 bg-green-100 flex items-center justify-center p-8">
                <span className="text-6xl">🌱</span>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  CO₂排出量計算アプリ
                </h3>
                <p className="text-gray-600 mb-6">
                  家庭や生活スタイルから、月間のCO₂排出量を簡単に計算できるWebアプリ。
                  電気・ガス・水道、交通手段、食生活の影響を総合的に計算します。
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    React 19
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Next.js 15
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
                <Link
                  href="/projects/co2-calculator"
                  className="inline-flex items-center text-[#2C5D47] hover:text-green-800 font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  自己紹介
                </h3>
                <p className="text-gray-600 mb-4">
                  環境問題に関心を持つ開発者として、テクノロジーを通じて
                  持続可能な社会の実現に貢献したいと考えています。
                </p>
                <p className="text-gray-600">
                  現在はWeb開発の基礎を学びながら、小さなプロジェクトから
                  少しずつスキルを積み重ねている段階です。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  興味分野・目標
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 環境技術、サステナビリティ、農業</li>
                  <li>• バックエンド開発（PHP/Laravel）</li>
                  <li>• フロントエンド開発（React/Next.js）</li>
                  <li>• ホームページ作成など</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Footer */}
      <footer className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 My technical history. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
