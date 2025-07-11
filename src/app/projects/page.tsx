import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "co2-calculator",
      title: "CO₂排出量計算アプリ",
      description:
        "家庭や生活スタイルから、月間のCO₂排出量を簡単に計算できるWebアプリ。電気・ガス・水道、交通手段、食生活の影響を総合的に計算します。",
      technologies: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "環境技術",
      image: "🌱",
      status: "完了",
    },
    {
      id: "dinner-record",
      title: "Dinner Record",
      description:
        "日々の夕食を簡単に記録・管理できるWebアプリケーション。シンプルなUIで料理名やメモを入力し、過去の食事を一覧表示・編集・削除できます。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      category: "Webアプリ",
      image: "🍽",
      status: "完了",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "完了":
        return "bg-green-100 text-green-800";
      case "開発中":
        return "bg-yellow-100 text-yellow-800";
      case "計画中":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow mb-8"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-green-100 flex items-center justify-center p-8">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>
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
    </main>
  );
}
