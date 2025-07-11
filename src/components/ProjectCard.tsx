import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  image: { src: string; alt: string };
  status?: string;
  linkColor?: string;
  bgColor?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  category,
  image,
  status,
  linkColor = "text-green-600 hover:text-green-800",
  bgColor = "bg-green-100",
}: ProjectCardProps) {
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="md:flex">
        <div className={`md:w-1/3 ${bgColor} flex items-center justify-center p-8`}>
        <img src={image.src} alt={image.alt} className="h-16 w-16 object-contain" />
        </div>
        <div className="md:w-2/3 p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              {title}
            </h3>
            {status && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  status
                )}`}
              >
                {status}
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-6">{description}</p>

          {category && (
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
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

          <Link
            href={`/projects/${id}`}
            className={`inline-flex items-center font-medium ${linkColor}`}
          >
            詳細を見る →
          </Link>
        </div>
      </div>
    </div>
  );
} 