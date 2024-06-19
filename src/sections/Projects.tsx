import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="md:col-span-2 w-full h-full flex flex-col items-center">
      <div className="sm:text-5xl text-3xl w-full">PROJECTS</div>
      <hr className="w-full my-4"/>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-slate-500 py-5 gap-6 h-full">
        {[...projects, ...projects].map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
