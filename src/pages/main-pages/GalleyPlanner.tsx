import {
  faBell,
  faBox,
  faCartShopping,
  faPlaneCircleCheck,
  faRotate,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import NavigationCard from "../../components/cards/NavigationCard";

function GalleyPlanner() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <NavigationCard
        title={"Loading Plans"}
        icon={faPlaneCircleCheck}
        to={"/flight-list"}
      />
      <NavigationCard
        title={"Packing Standards"}
        icon={faBox}
        to={"/flight-list"}
      />
      <NavigationCard
        title={"Loading Plan Rules"}
        icon={faTruck}
        to={"/flight-list"}
      />
      <NavigationCard
        title={"Equipment"}
        icon={faCartShopping}
        to={"/flight-list"}
      />
      <NavigationCard
        title={"Provisioning Items"}
        icon={faBell}
        to={"/flight-list"}
      />
      <NavigationCard
        title={"Inventory Substitutions"}
        icon={faRotate}
        to={"/flight-list"}
      />
    </div>
  );
}

export default GalleyPlanner;
