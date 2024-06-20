import { useEffect, useState } from "react";
import ProjectCard, { ProjectCardDataType } from "../components/ProjectCard";
import { projects } from "../data/projects";
import Tag from "../components/Tag";

const initialProjects = projects.map((project) => ({
  ...project,
  display: true,
}));

export default function Projects() {
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardDataType[]>(initialProjects);
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterByTag = (tag: string) => {
    if (filters.includes(tag)) {
      setFilters((prev) => prev.filter((filter) => filter !== tag));
    } else {
      setFilters((prev) => [...prev, tag]);
    }
  };

  useEffect(() => {
    if (filters.length)
      setFilteredProjects((prev) =>
        prev.map((project) => {
          const tagTests = filters.map((filter) => project.tags.includes(filter));
          return {
            ...project,
            display: tagTests.includes(true),
          };
        })
      );
    else setFilteredProjects(initialProjects);
  }, [filters]);

  return (
    <div className="md:col-span-2 w-full h-full flex flex-col items-center">
      <div className="sm:text-5xl text-3xl w-full">PROJECTS</div>
      <hr className="w-full my-4" />
      <div className="flex flex-wrap gap-2 w-full">
        {!filters.length && "Click on tags to filter by multiple tags!"}
        {filters.map((tag) => (
          <div key={tag} onClick={() => handleFilterByTag(tag)}>
            <Tag title={tag} />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-slate-500 py-5 gap-6 h-full transition-all duration-500 ease-in-out">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} onFilterByTag={handleFilterByTag} />
        ))}
      </div>
    </div>
  );
}
