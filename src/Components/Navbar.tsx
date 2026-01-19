import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <HomeIcon />
      </NavLink>

      <NavLink to="/about">
        <InfoIcon />
      </NavLink>

      <NavLink to="/contact">
        <ContactMailIcon />
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
