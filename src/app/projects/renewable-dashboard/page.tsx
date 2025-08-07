import ProjectPage from "../../../components/ProjectPage";
import { projectPages } from "../../../const/projectPages";

export default function RenewableDashboardProject() {
  const data = projectPages["renewable-dashboard"];

  return <ProjectPage data={data} />;
}
