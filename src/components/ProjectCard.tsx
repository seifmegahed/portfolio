import { useRef } from "react";
import { ProjectDataType } from "../data/projectsData";
import Tag from "./Tag";
import { Link } from "react-router-dom";

export interface ProjectCardDataType extends ProjectDataType {
  display: boolean;
}

export default function ProjectCard(props: {
  project: ProjectCardDataType;
  onFilterByTag: (tag: string) => void;
}) {
  const { title, description, tags, display, path } = props.project;
  const parentDivRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={parentDivRef}
      key={title}
      className={`sm:w-56 w-full sm:h-90 bg-white font-light rounded-xl drop-shadow-lg transition-all duration-500 ease-in-out ${
        display ? "opacity-100" : "opacity-50"
      }`}
    >
      <Link
        to={path}
        className="p-5 rounded-t-xl sm:h-24 flex items-center justify-start bg-slate-600 cursor-pointer"
        onMouseOver={() => {
          display && parentDivRef.current?.classList.add("scale-105");
        }}
        onMouseOut={() => {
          display && parentDivRef.current?.classList.remove("scale-105");
        }}
      >
        <div className="text-2xl font-bold text-white w-full">{title}</div>
      </Link>
      <div className="p-3 sm:h-24 overflow-hidden">
        <div className="text-sm text-black/40">{description}</div>
      </div>
      <div className="p-3 h-full">
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
