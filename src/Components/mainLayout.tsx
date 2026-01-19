import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
