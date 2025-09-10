import galleyXplanner from "../assets/logos/galleyXplanner.png";
import airTransat from "../assets/logos/airTransat.png";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white h-16 flex items-center justify-between px-6 ">
      <div className="flex items-center">
        <img src={galleyXplanner} alt="Main Logo" className="h-7 w-auto" />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-700 ">Shitanshu</span>
        <img src={airTransat} alt="User Logo" className="h-13 w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
