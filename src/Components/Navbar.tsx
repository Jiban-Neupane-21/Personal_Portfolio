import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";

function Navbar() {
  return (
    <nav>
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
