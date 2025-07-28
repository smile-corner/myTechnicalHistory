import Image from "next/image";
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
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/projects/UseitorLoseit.png"
                alt="Use it or Lose it Logo"
                width={50}
                height={50}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Use it or Lose it
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              自分だけのオリジナル単語管理・クイズ・進捗管理アプリ
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
                  英単語クイズを繰り返し解くことによって、英単語の定着を目的としたWebアプリケーションです。
                </p>
                <p className="text-gray-600">
                  英単語一覧の表示・追加・編集・削除、CSVインポートなどにより、自分だけのオリジナルの英単語クイズを作成できます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">開発背景</h3>
                <p className="text-gray-600">
                  苦手な英単語を覚えるためのツールが欲しくて開発しました。
                  バックエンド・フロントエンド・Dockerの実践的なスキル習得も兼ねています。
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
              <p className="text-gray-600 mb-4">2025年7月（約1週間）</p>
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
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                学習記録管理
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 単語管理：単語の追加、編集、削除</li>
                <li>• クイズ：ランダム出題、正解/不正解の記録</li>
                <li>• 進捗表示：正解率、最近の間違い単語など</li>
                <li>• CSV一括インポート</li>
                <li>• ソート、検索、ページネーション</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                UI/UX
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React Navigationによる画面遷移</li>
                <li>• レスポンシブデザイン</li>
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
                主に英単語の管理とクイズに機能を絞って、UI/UXの設計を行い、必要な機能を洗い出しました。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold">
                  バックエンド・フロントエンド開発
                </h3>
              </div>
              <p className="text-gray-600">
                LaravelでAPIを構築し、Next.js/Reactでフロントエンドを開発。
                Dockerでローカル開発環境を整備し、MySQLでデータを管理しました。
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
                基本的な動作確認を行いました。
                今後追加機能として間違った単語の復習提案や英⇔英モード、カテゴリー別の出題なども検討してきたいです。
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
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  技術的な学び
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• LaravelとNext.jsのAPI連携</li>
                  <li>• Dockerによる開発環境構築</li>
                  <li>• データ集計・可視化の実装</li>
                  <li>• UI/UX設計の工夫</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  プロダクト面の学び
                </h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">関連リンク</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/miyo-naka/Use_It_or_Lose_It"
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
