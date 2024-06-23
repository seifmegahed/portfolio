import data from "./src/data/projectData.json" assert { type: "json" };
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

import { argv } from "node:process";

const overwrite = argv.includes("--overwrite");

const __dirname = ".";

const projectPageTemplate = readFileSync(
  join(__dirname, "src/templates/ProjectPage.tsx"),
  "utf-8"
);

export function generateProjectPage(project) {
  const { componentName, fileName, filePath } = project;
  if (!existsSync(filePath) || overwrite) {
    console.log("Generating " + fileName);
    const projectPage = projectPageTemplate
      .replace("COMPONENT_NAME", componentName)
      .replace(/\.\.\//g, "../../");
    writeFileSync(filePath, projectPage);
  }
}

const projects = data.projectsJSON.map((project) => {
  const componentName = project.title.replace(/ /g, "").replace(/'/g, "");
  const fileName = componentName + ".tsx";
  const filePath = join(__dirname, "src/pages/projects/", fileName);
  const componentElement = `<${componentName} />`;
  const componentPath = "/" + project.path; 
  return {
    componentElement,
    componentPath,
    componentName,
    fileName,
    filePath,
  };
});

let indexPageContent = "";

console.log("Generating index page...");

projects.forEach((project) => {
  indexPageContent += `import ${project.componentName} from "./${project.fileName}";\n`;
});

indexPageContent += "\nexport const projectsComponents = [\n";

projects.forEach((project) => {
  indexPageContent += "  { \n    component: <" + project.componentName + " />,\n    path: \"" + project.componentPath + "\",\n  },\n";
});

indexPageContent += "];\n";

writeFileSync(
  join(__dirname, "src/pages/projects/index.tsx"),
  indexPageContent
);

console.log("Generating project pages...");

projects.forEach((project) => generateProjectPage(project));

console.log("Done!");
