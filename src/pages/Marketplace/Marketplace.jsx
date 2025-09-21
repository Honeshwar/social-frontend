import Lists from "../../components/Lists/Lists";
import { MarketplaceData } from "../../utils/dummy";

export default function Marketplace() {
  return <Lists title="Marketplace" items={MarketplaceData} />;
}
