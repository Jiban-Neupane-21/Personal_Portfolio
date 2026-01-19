import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", paddingBottom: "200px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
