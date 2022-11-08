import { FaBars } from "react-icons/fa";
import { useAppContext } from "../contexts";
const Navbar = () => {
  const { openSidebar } = useAppContext();

  return (
    <nav className=" py-6 lg:py-8  mb-4 lg:mb-0 fixed top-0 ">
      <button className="nav-btn" onClick={openSidebar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
