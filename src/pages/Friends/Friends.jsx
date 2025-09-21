// pages/Friends/Friends.jsx
import Lists from "../../components/Lists/Lists";
import { FriendsData } from "../../utils/dummy";

export default function Friends() {
  return <Lists title="Friends" items={FriendsData} />;
}
