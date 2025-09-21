import Lists from "../../components/Lists/Lists";
import { CoursesData } from "../../utils/dummy";

export default function Courses() {
  return <Lists title="Courses" items={CoursesData} />;
}
