import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/const/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EAF1EB] to-blue-100">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            プロジェクト
          </h1>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            現在取り組んでいるプロジェクトや、これから挑戦したいプロジェクトをご紹介します。
            <br />
            小さな一歩から始めて、少しずつスキルを積み重ねていきます。
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            今後の予定
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                ポートフォリオサイト
              </h3>
              <p className="text-gray-600 mb-4">
                Next.jsとTailwind
                CSSを使用したモダンなポートフォリオサイトの完成
              </p>
              <span className="text-sm text-gray-500">計画中</span>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">環境データ可視化</h3>
              <p className="text-gray-600 mb-4">
                環境データを活用した可視化プロジェクト
              </p>
              <span className="text-sm text-gray-500">計画中</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            もっと知りたい方へ
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              自己紹介を見る
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
