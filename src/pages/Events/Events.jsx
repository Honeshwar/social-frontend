import Lists from "../../components/Lists/Lists";
import { EventsData } from "../../utils/dummy";

export default function Events() {
  return <Lists title="Events" items={EventsData} />;
}
