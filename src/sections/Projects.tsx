import { useEffect, useState } from "react";
import ProjectCard, { ProjectCardDataType } from "../components/ProjectCard";
import { projects } from "../data/projectsData";
import Tag from "../components/Tag";
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";

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
          const tagTests = filters.map((filter) =>
            project.tags.includes(filter)
          );
          return {
            ...project,
            display: tagTests.includes(true),
          };
        })
      );
    else setFilteredProjects(initialProjects);
  }, [filters]);

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Projects" />
      <div className="flex flex-wrap gap-2 w-full">
        {!filters.length && "Click on tags to filter by multiple tags!"}
        {filters.map((tag) => (
          <div key={tag} onClick={() => handleFilterByTag(tag)}>
            <Tag title={tag} />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-slate-500 py-5 sm:gap-6 gap-4 h-full transition-all duration-500 ease-in-out auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onFilterByTag={handleFilterByTag} />
        ))}
      </div>
    </SectionWrapper>
  );
}
