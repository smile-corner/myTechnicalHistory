import Link from "next/link";

export default function StudyRecordProject() {
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
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 text-4xl">📚</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              StudyRecord
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              学びを記録して、成長を見える化するWebアプリケーション
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">プロジェクト概要</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">目的</h3>
                <p className="text-gray-600 mb-4">
                  学習の記録・可視化を通じて、日々の成長を実感できるようにすることを目的としたWebアプリケーションです。
                </p>
                <p className="text-gray-600">
                  記録の作成・一覧・編集・削除、週ごと・カテゴリごとのまとめ表示、ユーザー情報編集やCSVインポートなど、学習管理に必要な機能を備えています。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">開発背景</h3>
                <p className="text-gray-600">
                  日々の学びを継続し、振り返りや分析をしやすくするためのツールが欲しくて開発を始めました。
                  バックエンド・フロントエンド・インフラの実践的なスキル習得も兼ねています。
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
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">Laravel 10</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">Next.js 15</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">React 19</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">MySQL</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">Docker</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">開発期間</h3>
              <p className="text-gray-600 mb-4">2025年5月（約2週間）</p>
              <h3 className="text-xl font-semibold mb-4">開発体制</h3>
              <p className="text-gray-600 mb-4">個人開発</p>
              <h3 className="text-xl font-semibold mb-4">デプロイ</h3>
              <p className="text-gray-600">ローカル環境（Docker）</p>
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
              <h3 className="text-xl font-semibold mb-4 text-blue-600">学習記録管理</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 記録の作成・一覧・編集・削除</li>
                <li>• 週ごと・カテゴリごとのまとめ表示</li>
                <li>• CSVインポート機能</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">ユーザー管理</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ユーザー登録・ログイン</li>
                <li>• ユーザー情報編集</li>
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
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold">要件定義・設計</h3>
              </div>
              <p className="text-gray-600">
                学習記録のデータ構造や集計方法、UI/UXの設計を行い、必要な機能を洗い出しました。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold">バックエンド・フロントエンド開発</h3>
              </div>
              <p className="text-gray-600">
                LaravelでAPIを構築し、Next.js/Reactでフロントエンドを開発。Dockerでローカル開発環境を整備し、MySQLでデータを管理しました。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold">テスト・運用</h3>
              </div>
              <p className="text-gray-600">
                基本的な動作確認を行い、今後はUI/UXの改善や本番環境へのデプロイも検討しています。
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
                <h3 className="text-xl font-semibold mb-4 text-blue-600">技術的な学び</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• LaravelとNext.jsのAPI連携</li>
                  <li>• Dockerによる開発環境構築</li>
                  <li>• データ集計・可視化の実装</li>
                  <li>• UI/UX設計の工夫</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">プロダクト面の学び</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 学習継続のモチベーション向上</li>
                  <li>• ユーザー目線での機能設計</li>
                  <li>• 実践的なフルスタック開発経験</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            関連リンク
          </h2>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/miyo-naka/StudyRecord" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
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