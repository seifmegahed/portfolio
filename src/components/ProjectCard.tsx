import { ProjectDataType } from "../data/projects";

export default function ProjectCard(props: { project: ProjectDataType }) {
  const { title } = props.project;
  return (
    <div key={title} className=" w-48 h-80 bg-white rounded-3xl shadow-sm">
      <div className="h-1/2"></div>
      <div>{title}</div>
    </div>
  );
}
