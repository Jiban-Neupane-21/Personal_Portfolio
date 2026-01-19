import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-96">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
