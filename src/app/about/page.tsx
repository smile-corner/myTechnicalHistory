"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function About() {
  return (
    <main>
      <section className="min-h-screen max-w-4xl mx-auto px-4 py-16">
        <div className="text-center my-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About me</h1>
        </div>
        <div className="md:flex bg-white rounded-2xl shadow-lg p-10 mb-12">
          <Image
            src="/face.png"
            alt="My face"
            width={80}
            height={80}
            className="h-24 w-24 object-contain rounded-xl shadow-sm mr-6 mb-4 md:mb-0"
          />
          <div>
            <p className="text-sm leading-7">
              オーストラリア在住の日本人Web開発者です。
              <br />
              電気系エンジニアとしてのキャリアから始まり、建設コンサルにて環境調査、ICT関連業務を経て、現在はWeb開発に軸足を移しています。
              <br />
              これまで一貫して「環境」や「持続可能性」に関心を持ち続け、オーストラリアの大学でもSustainabilityのコースを修了しました。
              その背景を活かし、環境データの可視化や日常生活に役立つアプリの開発に取り組んでいます。
              <br />
              2025年からはパートタイムながら実務経験も積み始め、小さなプロジェクトを重ねながら着実にスキルを広げています。「環境
              × IT」というテーマを軸に、データ分析やWebアプリ開発を通じて、
              社会に役立つプロダクトを生み出すことを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            技術・興味分野
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">技術</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• バックエンド: PHP / Laravel</li>
                <li>
                  • フロントエンド: React / Next.js / TypeScript / Tailwind CSS
                </li>
                <li>
                  • データ分析: Python (pandas, matplotlib, seaborn)(今から)
                </li>
                <li>• ツール: Git/GitHub, Docker, Firebase, Vercel</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">興味分野</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 環境技術、サステナビリティ</li>
                <li>• 農業</li>
                <li>• バックエンド開発</li>
                <li>• フロントエンド開発</li>
                <li>• 環境データの可視化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            今後の目標
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  短期目標（3-6ヶ月）
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1 text-sm leading-6">
                  <li>• 環境関連のオープンデータ/APIを活用したWebアプリ開発</li>
                  <li>
                    • Pythonでの基礎的なデータ分析（pandas, matplotlib
                    等）の習得
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  中期目標（6-12ヶ月）
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1 text-sm leading-6">
                  <li>
                    •
                    複雑なWebアプリケーション（認証、データベース連携など）の開発
                  </li>
                  <li>
                    • データ可視化ダッシュボードの構築（Next.js +
                    Python/Streamlit）
                  </li>
                  <li>
                    • Kaggleや公開データセットを用いた分析プロジェクト実践
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  長期目標（1年以上）
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1 text-sm leading-6">
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
      <section className="pb-16">
        <div className="flex justify-center gap-4">
          <Button
            href="/projects"
            label="☞ プロジェクトを見る"
            variant="gradient"
          />
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
