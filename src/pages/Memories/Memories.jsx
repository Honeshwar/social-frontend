import Lists from "../../components/Lists/Lists";
import { MemoriesData } from "../../utils/dummy";

export default function Memories() {
  return <Lists title="Memories" items={MemoriesData} />;
}
