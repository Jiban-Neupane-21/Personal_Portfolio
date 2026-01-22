import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import Footer from "./footer";

function MainLayout() {
  return (
    <>
      <Snowfall color="white" style={{ opacity: 0.5 }} />
      <Navbar />
      <main style={{ paddingTop: "64px",  paddingBottom: "64px" }}>
        <Outlet  />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
