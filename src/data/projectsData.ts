export type ProjectDataType = {
  title: string;
  path: string;
  year: number;
  description: string;
  tags: string[];
};

import dataJSON from "./projectData.json";

export const projects: ProjectDataType[] = dataJSON.projectsJSON;
