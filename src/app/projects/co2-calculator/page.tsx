import Link from 'next/link';

export default function CO2CalculatorProject() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-4xl">🌱</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              CO₂計算機
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              日常生活での二酸化炭素排出量を計算し、環境への影響を可視化するWebアプリケーション
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">プロジェクト概要</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">目的</h3>
                <p className="text-gray-600 mb-4">
                  環境意識の向上とサステナブルな生活の促進を目的として、
                  個人の日常生活における二酸化炭素排出量を簡単に計算できる
                  Webアプリケーションを開発しました。
                </p>
                <p className="text-gray-600">
                  ユーザーが自分の行動が環境に与える影響を理解し、
                  より環境に配慮した選択を促すことを目指しています。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">主な機能</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 日常生活の行動からCO₂排出量を計算</li>
                  <li>• 月別・年別の排出量グラフ表示</li>
                  <li>• 環境への影響度の可視化</li>
                  <li>• 削減目標の設定と進捗管理</li>
                  <li>• 環境に配慮した生活の提案</li>
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
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">使用技術</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">React 18</span>
                </div>
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
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">Chart.js</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">開発期間</h3>
              <p className="text-gray-600 mb-4">2024年1月 - 2024年3月（3ヶ月）</p>
              
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
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold">要件定義・設計</h3>
              </div>
              <p className="text-gray-600">
                環境省のデータを参考に、日常生活で発生するCO₂排出量の計算ロジックを設計。
                ユーザビリティを重視した直感的なUI/UXを計画しました。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold">フロントエンド開発</h3>
              </div>
              <p className="text-gray-600">
                ReactとTypeScriptを使用してコンポーネントベースの開発を実施。
                Tailwind CSSでレスポンシブデザインを実現し、
                Chart.jsでデータの可視化を行いました。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold">テスト・デプロイ</h3>
              </div>
              <p className="text-gray-600">
                ユニットテストとユーザビリティテストを実施し、
                Vercelでデプロイ。継続的な改善とフィードバックの収集を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            課題と解決策
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">課題</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 正確なCO₂排出量の計算ロジック</li>
                <li>• 複雑なデータの可視化</li>
                <li>• ユーザーの継続的な利用促進</li>
                <li>• モバイル対応の最適化</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">解決策</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 環境省のデータベースを活用</li>
                <li>• Chart.jsでインタラクティブなグラフ</li>
                <li>• ゲーミフィケーション要素の導入</li>
                <li>• レスポンシブデザインの徹底</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            成果・効果
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <p className="text-gray-600">月間アクティブユーザー</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                <p className="text-gray-600">ユーザー評価</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                <p className="text-gray-600">平均CO₂削減率</p>
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
              href="#" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              デモを見る
            </a>
            <a 
              href="#" 
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