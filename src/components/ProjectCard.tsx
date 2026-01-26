import { ProjectsType } from "@/type/projectsType";
import FallbackImage from "./FallbackImage";
import Button from "./Button";

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  category,
  image,
  status,
  bgColor = "bg-green-50",
  isHome = false,
}: ProjectsType) {
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

  const cardClasses = `bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 ${isHome ? "" : ""}`;
  const imageWrapperClasses = `${isHome ? bgColor + " flex items-center justify-center p-10" : "md:w-1/3 " + bgColor + " flex items-center justify-center p-10"}`;
  const contentWrapperClasses = `${isHome ? "p-10 flex flex-col justify-between" : "md:w-2/3 p-6 md:p-10 flex flex-col justify-between"}`;
  const titleClasses = `text-2xl font-bold text-gray-900 group-hover:text-[#2C5D47] transition-colors duration-300 ${isHome ? "w-full" : "w-[80%]"}`;

  return (
    <div className={cardClasses}>
      <div className={`${isHome ? "" : "md:flex"}`}>
        <div className={imageWrapperClasses}>
          <FallbackImage
            src={image.src}
            alt={image.alt}
            width={80}
            height={80}
            className="h-20 w-20 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className={contentWrapperClasses}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className={titleClasses}>{title}</h3>
              {status && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    status
                  )}`}
                >
                  {status}
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            {category && (
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border bg-green-50 text-green-800 border-green-200">
                  {category}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Button
              href={`/projects/${id}`}
              label="☞ 詳細を見る"
              variant="gradient"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
