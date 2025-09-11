import galleyXplanner from "../assets/logos/galleyXplanner.png";
import airTransat from "../assets/logos/airTransat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="w-full bg-white h-14 md:h-16 flex items-center justify-between px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <img
          src={galleyXplanner}
          alt="Main Logo"
          className="h-6 md:h-7 w-auto"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <span className="hidden sm:inline text-gray-700">Shitanshu</span>
        <img src={airTransat} alt="User Logo" className="h-10 md:h-13 w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
