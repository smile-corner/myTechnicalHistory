import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EAF1EB] to-blue-100">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center my-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">自己紹介</h2>
            環境問題に関心を持つ開発者として、テクノロジーを通じて
            持続可能な社会の実現に貢献したいと考えています。
            現在はWeb開発の基礎を学びながら、小さなプロジェクトから
            少しずつスキルを積み重ねている段階です。
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            技術・興味分野
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">技術</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">PHP / Laravel</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">React / Next.js</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">興味分野</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 環境技術、サステナビリティ、農業</li>
                <li>• バックエンド開発</li>
                <li>• フロントエンド開発</li>
                <li>• 環境データの可視化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            今後の目標
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  短期目標（3-6ヶ月）
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• 小さなプロジェクトを完成させる</li>
                  <li>• 環境関連のAPIやデータを活用したアプリ開発</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  中期目標（6-12ヶ月）
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• より複雑なWebアプリケーションの開発</li>
                  <li>• オープンソースプロジェクトへの貢献</li>
                  <li>• 環境技術分野での実践的なスキル習得</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  長期目標（1年以上）
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• 環境問題解決に貢献するプロダクトの開発</li>
                  <li>• サステナビリティ分野でのキャリア構築</li>
                  <li>• 技術を通じた社会貢献の実現</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            プロジェクトを見る
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
