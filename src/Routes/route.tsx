import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Education from "../pages/Education";
import Project from "../pages/Project";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Components/mainLayout";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
