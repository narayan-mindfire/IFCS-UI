import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faPlaneUp,
  faBowlRice,
  faFileLines,
  faCog,
  faServer,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import IFCSLogo from "../assets/logos/IFCSLogo.png";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: faGauge },
  { to: "/flights", label: "Flights", icon: faPlaneUp },
  { to: "/galley-planner", label: "Galley Planner", icon: faServer },
  { to: "/meal-planner", label: "Meal Planner", icon: faBowlRice },
  { to: "/compliance", label: "Compliance", icon: faCircleCheck },
  { to: "/reports", label: "Reports", icon: faFileLines },
  { to: "/setup", label: "Setup", icon: faCog },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex min-h-[92vh] max-h-auto flex-col justify-between bg-[var(--backgroundAccent)] shadow-md w-64 py-10">
      <nav className="flex-1 px-4 space-y-3">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 transition ${
                isActive
                  ? "bg-white text-black"
                  : "text-gray-500 hover:bg-gray-200"
              }`
            }
          >
            <FontAwesomeIcon icon={icon} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4">
        <img src={IFCSLogo} alt="Bottom Logo" className="w-32 mx-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
