import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";

function Navbar() {
  return (
    <nav className="navbar-container fixed top-0 left-0 right-0 p-6 bg-gray-800 text-white z-50">
      <NavLink to="/">
        <HomeIcon />
      </NavLink>

      <NavLink to="/blog">
        <BookIcon />
      </NavLink>

      <NavLink to="/education">
        <SchoolIcon />
      </NavLink>

      <NavLink to="/projects">
        <SystemSecurityUpdateGoodIcon />
      </NavLink>
    </nav>
  );
}

export default Navbar;
