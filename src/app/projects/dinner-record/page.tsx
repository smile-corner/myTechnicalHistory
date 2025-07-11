import Image from "next/image";
import Link from "next/link";

export default function DinnerRecordProject() {
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
                src="/DinnerRecord.png"
                alt="CO₂ Icon"
                width={40}
                height={40}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Dinner Record
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              日々の夕食を簡単に記録・管理できるWebアプリケーション
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
                  日々の食事記録を簡単に管理し、食生活の振り返りや健康管理を支援する
                  Webアプリケーションを開発しました。
                </p>
                <p className="text-gray-600">
                  シンプルで直感的なUIを重視し、誰でも簡単に使える
                  食事記録アプリを目指しました。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">主な機能</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ユーザー認証（ログイン/新規登録）</li>
                  <li>• 食事記録（日付、料理名、メモ）</li>
                  <li>• 記録一覧表示・編集・削除</li>
                  <li>• カレンダー表示</li>
                  <li>• ジャンル別絞り込み</li>
                </ul>
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
                  <span className="font-medium">Next.js 14</span>
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
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="font-medium">
                    Firebase Realtime Database
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Firebase Authentication</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">開発期間</h3>
              <p className="text-gray-600 mb-4">
                2024年2月 - 2024年3月（1ヶ月）
              </p>

              <h3 className="text-xl font-semibold mb-4">開発体制</h3>
              <p className="text-gray-600 mb-4">個人開発</p>

              <h3 className="text-xl font-semibold mb-4">デプロイ</h3>
              <p className="text-gray-600">Vercel</p>
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
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold">要件定義・設計</h3>
              </div>
              <p className="text-gray-600">
                シンプルで使いやすい食事記録アプリの要件を整理。
                ユーザー認証、CRUD操作、カレンダー表示などの機能を設計しました。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold">フロントエンド開発</h3>
              </div>
              <p className="text-gray-600">
                Next.jsとTypeScriptを使用してコンポーネントベースの開発を実施。
                Tailwind CSSでレスポンシブデザインを実現し、
                直感的なUI/UXを重視しました。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold">
                  バックエンド・デプロイ
                </h3>
              </div>
              <p className="text-gray-600">
                Firebase Realtime Databaseでデータ管理を実装。 Firebase
                Authenticationでユーザー認証を実現し、
                Vercelでデプロイを完了しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主な機能
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                認証機能
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Firebase Authentication</li>
                <li>• ログイン/新規登録</li>
                <li>• ユーザー別データ管理</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                記録機能
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 日付選択</li>
                <li>• 料理名入力</li>
                <li>• メモ機能</li>
                <li>• ジャンル分類</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                表示機能
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 一覧表示</li>
                <li>• カレンダー表示</li>
                <li>• ジャンル絞り込み</li>
                <li>• 編集・削除</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                UI/UX
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• レスポンシブデザイン</li>
                <li>• 直感的な操作</li>
                <li>• モダンなデザイン</li>
                <li>• 高速な動作</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
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
                  <li>• Firebase Realtime Databaseの活用</li>
                  <li>• 認証機能の実装</li>
                  <li>• TypeScriptの実践的活用</li>
                  <li>• レスポンシブデザインの実装</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  プロダクト面の学び
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ユーザビリティの重要性</li>
                  <li>• シンプルな設計の効果</li>
                  <li>• 実用的なアプリの開発</li>
                  <li>• デプロイから運用まで</li>
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
              href="https://dinner-record.vercel.app/"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              アプリを見る
            </a>
            <a
              href="https://github.com/miyo-naka/Dinner-Record"
              className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors"
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
