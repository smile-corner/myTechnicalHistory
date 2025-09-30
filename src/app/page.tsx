"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { projects } from "@/const/projects";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import ProjectCardForHome from "@/components/ProjectCardForHome";

const MotionImage = motion(Image);
const heroImageFadeUp: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 0.2,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        <MotionImage
          src="/hero-bg2.JPG"
          alt="Background Image"
          width={1920}
          height={1080}
          variants={heroImageFadeUp}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        />
        <div className="relative z-10 text-center px-4 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            Eco Data Studio - 環境 × IT
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow">
            環境×ITを目指すエンジニアの小さな実験と記録。
            <br />
            試作・実装・考察をまとめた技術の備忘録。
          </p>
          <Link
            href="#projects"
            className="bg-[#2C5D47] text-white px-8 py-3 rounded-xl hover:scale-105 hover:bg-green-600
            text-lg font-medium shadow-lg
            transition-transform duration-200 inline-block"
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

        <div className="flex flex-wrap gap-6 w-[80%] mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="w-[31%]"
            >
              <ProjectCardForHome {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-[#e0f2f1] to-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About me
          </h2>
          <div className="flex bg-white rounded-2xl shadow-lg p-10 mb-12">
            <Image
              src="/face.png"
              alt="My face"
              width={80}
              height={80}
              className="h-24 w-24 object-contain rounded-xl shadow-sm mr-6"
            />
            <div>
              <p>
                オーストラリア在住の日本人。環境問題に関心を持つWeb開発者です。
                テクノロジーを通じて
                持続可能な社会の実現に貢献したいと考えています。
                現在はWeb開発の基礎を学びながら、小さなプロジェクトから
                少しずつスキルを積み重ねている段階です。
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#2C5D47] text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition-colors duration-200 font-medium text-base inline-block mt-4"
              >
                自己紹介を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
