import { ProjectDataType } from "../data/projects";
import Tag from "./Tag";

export default function ProjectCard(props: {
  project: ProjectDataType;
  onFilterByTag: (tag: string) => void;
}) {
  const { title, description, tags } = props.project;

  return (
    <div
      key={title}
      className=" w-56 h-96 bg-white rounded-3xl drop-shadow-lg overflow-hidden"
    >
      <div className="p-3 h-24 flex items-center justify-center bg-slate-600 cursor-pointer">
        <div className="text-lg font-bold text-center text-white">{title}</div>
      </div>
      <div className="p-3 h-24 overflow-hidden">
        <div className="text-sm text-black/40">{description}</div>
      </div>
      <div className="p-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div key={title + tag} onClick={() => props.onFilterByTag(tag)}>
              <Tag title={tag} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
