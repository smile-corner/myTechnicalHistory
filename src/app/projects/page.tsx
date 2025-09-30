"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/const/projects";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            現在取り組んでいるプロジェクトや、これから挑戦したいプロジェクトをご紹介します。
            <br />
            小さな一歩から始めて、少しずつスキルを積み重ねていきます。
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            今後の予定
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-3">環境データ可視化</h3>
              <p className="text-gray-600 mb-4">
                環境データを活用した可視化プロジェクト
              </p>
              <span className="text-sm text-gray-500">計画中</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-3">ブログサイト運営</h3>
              <p className="text-gray-600 mb-4">
                オーストラリア生活についてのブログサイトを運営予定
              </p>
              <span className="text-sm text-gray-500">計画中</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            もっと知りたい方へ
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="inline-block bg-[#2C5D47] text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition-colors duration-200 font-medium text-base"
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
