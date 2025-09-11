import { faPlane } from "@fortawesome/free-solid-svg-icons";
import NavigationCard from "../../components/cards/NavigationCard";

function Flight() {
  return (
    <div className="flex flex-row">
      <NavigationCard
        title={"Standard view"}
        icon={faPlane}
        to={"/flight-list"}
      />
    </div>
  );
}

export default Flight;
