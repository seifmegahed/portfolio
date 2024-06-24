import data from "./src/data/projectData.json" assert { type: "json" };
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

import { argv } from "node:process";

const overwrite = argv.includes("--overwrite");

const __dirname = ".";

const projectPageTemplate = readFileSync(
  join(__dirname, "src/templates/ProjectPage.tsx"),
  "utf-8"
);

export function generateProjectPage(project) {
  const {
    componentName,
    fileName,
    filePath,
    componentPath,
    description,
    title,
  } = project;
  if (!existsSync(filePath + "/" + fileName) || overwrite) {
    console.log("Generating " + fileName);
    const projectPage = projectPageTemplate
      .replace("COMPONENT_NAME", componentName)
      .replace("COMPONENT_ID", componentPath)
      .replace("COMPONENT_TITLE", title)
      .replace("COMPONENT_DESCRIPTION", description)
      .replace(/\.\.\//g, "../../../");
    if(!existsSync(filePath + "/" + fileName)){
      mkdirSync(filePath);
    }
    writeFileSync(filePath + "/" + fileName, projectPage);
  }
}

const projects = data.projectsJSON.map((project) => {
  const componentName = project.title.replace(/ /g, "").replace(/'/g, "");
  const fileName = "index.tsx";
  const componentElement = `<${componentName} />`;
  const componentPath = "/" + project.path;
  const filePath = join(__dirname, "src/pages/projects/", componentPath);
  return {
    componentElement,
    componentPath,
    componentName,
    title: project.title,
    fileName,
    filePath,
    description: project.description,
  };
});

let indexPageContent = "// Do not edit this file, it is auto-generated!\n\n";

console.log("Generating index page...");

projects.forEach((project) => {
  indexPageContent += `import ${project.componentName} from ".${project.componentPath}";\n`;
});

indexPageContent += "\nexport const projectsComponents = [\n";

projects.forEach((project) => {
  indexPageContent +=
    "  { \n    component: <" +
    project.componentName +
    ' />,\n    path: "' +
    project.componentPath +
    '",\n  },\n';
});

indexPageContent += "];\n";

writeFileSync(
  join(__dirname, "src/pages/projects/index.tsx"),
  indexPageContent
);

console.log("Generating project pages...");

projects.forEach((project) => generateProjectPage(project));

console.log("Done!");
