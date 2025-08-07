import Image from "next/image";
import Link from "next/link";
import { ProjectPageData } from "../type/projectPageType";
import {
  ProjectOverview,
  TechnicalDetails,
  MainFeatures,
  DevelopmentProcess,
  ResultsLearning,
  ProjectLinks,
} from "./ProjectSections";

interface ProjectPageProps {
  data: ProjectPageData;
}

export default function ProjectPage({ data }: ProjectPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EAF1EB] to-blue-100">
      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-800 font-medium mr-4"
            >
              ← プロジェクト一覧に戻る
            </Link>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src={data.iconSrc}
                alt={data.iconAlt}
                width={50}
                height={50}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ProjectOverview
        purpose={data.overview.purpose}
        background={data.overview.background}
        features={data.overview.features}
      />

      <TechnicalDetails
        technologies={data.technical.technologies}
        developmentPeriod={data.technical.developmentPeriod}
        developmentTeam={data.technical.developmentTeam}
        deployment={data.technical.deployment}
      />

      <MainFeatures features={data.features} />

      <DevelopmentProcess steps={data.development} />

      <ResultsLearning learnings={data.learnings} />

      <ProjectLinks links={data.links} />
    </main>
  );
}
