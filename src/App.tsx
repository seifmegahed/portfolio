import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { projectsComponents } from "./pages/projects";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
        {projectsComponents.map((project) => (
          <Route
            path={project.path}
            element={<Suspense fallback={<Loader />}>
              {project.component}
            </Suspense>}
            key={project.path}
            
          />
        ))}
      </Routes>
    </ScrollToTop>
  );
}

export default App;
