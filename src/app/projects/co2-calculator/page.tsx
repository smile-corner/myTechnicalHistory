import ProjectPage from "../../../components/ProjectPage";
import { projectPages } from "../../../const/projectPages";

export default function CO2CalculatorProject() {
  const data = projectPages["co2-calculator"];

  return <ProjectPage data={data} />;
}
