import ProjectPage from "../../../components/ProjectPage";
import { projectPages } from "../../../const/projectPages";

export default function StudyRecordProject() {
  const data = projectPages["study-record"];

  return <ProjectPage data={data} />;
}
