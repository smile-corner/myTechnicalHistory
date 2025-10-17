import Image from "next/image";
import {
  Technology,
  Feature,
  DevelopmentStep,
  Learning,
  ProjectLink,
} from "../type/projectPageType";
import Button from "./Button";

// プロジェクト概要セクション
interface ProjectOverviewProps {
  purpose: string;
  background?: string;
  features?: string[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export function ProjectOverview({
  purpose,
  background,
  features,
  images,
}: ProjectOverviewProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold  text-center text-gray-900 mb-6">
            プロジェクト概要
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">目的</h3>
              <p className="text-gray-600 mb-4">{purpose}</p>
            </div>
            {background && (
              <div>
                <h3 className="text-lg font-semibold mb-4">開発背景</h3>
                <p className="text-gray-600">{background}</p>
              </div>
            )}
            {features && (
              <div>
                <h3 className="text-lg font-semibold mb-4">主な機能</h3>
                <ul className="space-y-2 text-gray-600">
                  {features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* プロジェクト画像 */}
          {images && images.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-center">
                プロジェクト画像
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-100 rounded-lg p-4 mb-2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md mx-auto"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-sm text-gray-600 mt-2">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 技術詳細セクション
interface TechnicalDetailsProps {
  technologies: Technology[];
  developmentPeriod: string;
  developmentTeam: string;
  deployment: string;
}

export function TechnicalDetails({
  technologies,
  developmentPeriod,
  developmentTeam,
  deployment,
}: TechnicalDetailsProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          技術詳細
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">使用技術</h3>
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-3`}
                    style={{ backgroundColor: tech.color }}
                  ></span>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">開発期間</h3>
            <p className="text-gray-600 mb-4">{developmentPeriod}</p>

            <h3 className="text-xl font-semibold mb-4">開発体制</h3>
            <p className="text-gray-600 mb-4">{developmentTeam}</p>

            <h3 className="text-xl font-semibold mb-4">デプロイ</h3>
            <p className="text-gray-600">{deployment}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 主な機能セクション
interface MainFeaturesProps {
  features: Feature[];
}

export function MainFeatures({ features }: MainFeaturesProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          主な機能
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 開発過程セクション
interface DevelopmentProcessProps {
  steps: DevelopmentStep[];
}

export function DevelopmentProcess({ steps }: DevelopmentProcessProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          開発過程
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 成果・学びセクション
interface ResultsLearningProps {
  learnings: Learning[];
}

export function ResultsLearning({ learnings }: ResultsLearningProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          成果・学び
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {learnings.map((learning, index) => (
              <div key={index}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: learning.color }}
                >
                  {learning.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {learning.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 関連リンクセクション
interface ProjectLinksProps {
  links: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  const getVariant = (link: ProjectLink): "gradient" | "outline" | "shine" => {
    if (link.isPrimary && link.isExternal) return "gradient";
    if (link.isExternal) return "outline";
    return "shine";
  };

  // const getLinkClasses = (link: ProjectLink) => {
  //   const baseClasses = "px-6 py-3 rounded-lg transition-colors";

  //   if (link.isPrimary) {
  //     const colorMap: { [key: string]: string } = {
  //       green: "bg-green-600 text-white hover:bg-green-700",
  //       blue: "bg-blue-600 text-white hover:bg-blue-700",
  //       orange: "bg-orange-600 text-white hover:bg-orange-700",
  //       purple: "bg-purple-600 text-white hover:bg-purple-700",
  //       red: "bg-red-600 text-white hover:bg-red-700",
  //     };
  //     return `${baseClasses} ${colorMap[link.color || "blue"]}`;
  //   } else {
  //     const colorMap: { [key: string]: string } = {
  //       green: "border border-green-600 text-green-600 hover:bg-green-50",
  //       blue: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  //       orange: "border border-orange-600 text-orange-600 hover:bg-orange-50",
  //       purple: "border border-purple-600 text-purple-600 hover:bg-purple-50",
  //       red: "border border-red-600 text-red-600 hover:bg-red-50",
  //       gray: "border border-gray-600 text-gray-600 hover:bg-gray-50",
  //     };
  //     return `${baseClasses} ${colorMap[link.color || "gray"]}`;
  //   }
  // };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">関連リンク</h2>
        <div className="flex justify-center gap-4">
          {links.map((link, index) => {
            const variant = getVariant(link);

            // 外部リンク
            if (link.isExternal) {
              return (
                <Button
                  key={index}
                  href={link.href}
                  label={link.text}
                  variant={variant}
                />
              );
            }

            // 内部リンク
            return (
              <Button
                key={index}
                href={link.href}
                label={link.text}
                variant={variant}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
