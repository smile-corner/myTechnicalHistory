export interface ProjectsType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  image: { src: string; alt: string };
  status?: string;
  linkColor?: string;
  bgColor?: string;
  github?: string;
}
