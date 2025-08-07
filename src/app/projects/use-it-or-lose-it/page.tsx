import ProjectPage from "../../../components/ProjectPage";
import { projectPages } from "../../../const/projectPages";

export default function UseItOrLoseItProject() {
  const data = projectPages["use-it-or-lose-it"];

  return <ProjectPage data={data} />;
}
