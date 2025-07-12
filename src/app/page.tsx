import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/const/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        />
        <div className="relative z-10 text-center px-4 py-24">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            My technical history
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow">
            小さく始める、環境×テクノロジーの一歩
          </p>
          <Link
            href="#projects"
            className="bg-[#2C5D47] text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium shadow-lg"
          >
            プロジェクトを見る
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gradient-to-br from-white to-blue-50 py-20"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          プロジェクト
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-[#e0f2f1] to-white py-20">
        <div className="max-w-4xl mx-auto px-4">
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

      <Footer />
    </main>
  );
}
