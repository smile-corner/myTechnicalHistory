"use client";

import Footer from "@/components/Footer";
import { projects } from "@/const/projects";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import ProjectCardForHome from "@/components/ProjectCardForHome";
import Button from "@/components/Button";

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
    transition: { delay: i * 0.2, duration: 0.3 },
  }),
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1]"
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
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow">
            環境×ITを目指すエンジニアの小さな実験と記録。
            <br />
            試作・実装・考察をまとめた技術の備忘録。
          </p>
          <div className="flex gap-6">
            <Button
              href="/projects"
              label="☞ プロジェクトを見る"
              variant="gradient"
            />
            <Button href="/about" label="☞ 自己紹介を見る" variant="gradient" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
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
      <section className="bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1] py-10">
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
              <p className="text-sm leading-7">
                オーストラリア在住の日本人Web開発者です。
                <br />
                「環境 ×
                IT」というテーマを軸に、データ分析やWebアプリ開発を通じて、
                社会に役立つプロダクトを生み出すことを目指しています。
              </p>
              <Button
                href="/about"
                label="☞ 自己紹介を見る"
                variant="gradient"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
