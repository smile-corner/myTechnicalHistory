import ProjectPage from "../../../components/ProjectPage";
import { projectPages } from "../../../const/projectPages";

export default function DinnerRecordProject() {
  const data = projectPages["dinner-record"];

  return <ProjectPage data={data} />;
}
