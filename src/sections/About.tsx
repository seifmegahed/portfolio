import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";

const ParagraphTitle = (props: { children: string }) => (
  <p className="text-lg w-full font-bold">{props.children}</p>
);

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle title="About" />
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 row-span-3">
          <div>
            <ParagraphTitle>
              My Passion for Automating Electronics with Software
            </ParagraphTitle>
            <p>
              I've always been captivated by electronics and their potential to
              create intelligent systems. Throughout my career, I've combined my
              electronics expertise with software development to bring projects
              to life.
            </p>
          </div>
          <div>
            <ParagraphTitle>
              From Hardware to Streamlined Processes
            </ParagraphTitle>
            <p>
              My experience spans various electronic projects, working with
              circuits and components. I've also developed software using C and
              C++ for these projects.
            </p>
            <p>
              In a previous role at a company specializing in industrial
              electrical systems, I managed the Purchasing and Planning
              department. Initially, the process was paper-based, decentralized,
              and inefficient.
            </p>
          </div>
          <div>
            <ParagraphTitle>Building an Automated Solution</ParagraphTitle>
            <p>
              I spearheaded a transformation, implementing a system that
              leveraged a computerized database and automated software for
              ordering and tracking components. This Google Sheets-based
              solution significantly reduced purchasing time and effort while
              boosting accuracy and efficiency.
            </p>
          </div>
          <div>
            <ParagraphTitle>A Journey into Web Development</ParagraphTitle>
            <p>
              As the system evolved, I recognized the need for scripting to
              enhance its complexity. This sparked my interest in web
              development. Starting with Google Apps Script, I automated tasks
              and built front-end interfaces using HTML and CSS. Additionally, I
              convinced the accounting department to transition from Excel to
              Google Sheets.
            </p>
          </div>
          <div>
            <ParagraphTitle>A Centralized and Scalable System</ParagraphTitle>
            <p>
              I built a centralized accounting system using Google Sheets,
              ensuring a single source of truth for financial data. It offered
              user-friendly forms for data entry and reporting, replacing the
              previous system of shared Excel files. This new system was modular
              and scalable, allowing for future integrations and feature
              additions.
            </p>
          </div>
          <div>
            <ParagraphTitle>Discovering a New Passion</ParagraphTitle>
            <p>
              This experience ignited a passion for web development. Recognizing
              the limitations of Apps Script, I delved into real web
              development. After researching popular libraries, I learned React
              through an online course on Scrimba. Since then, I've actively
              applied my React skills in multiple projects.
            </p>
          </div>
        </div>
        <div className="grid-rows-1">
          <ParagraphTitle>TL;DR</ParagraphTitle>
          <p>
            Electronics engineer + software developer. Built automated systems
            using electronics and code (C/C++). Streamlined a company's
            purchasing process with a custom database and web interface (Google
            Sheets, Apps Script). Learned React for web development and applied
            it to new projects. Now passionate about using software
          </p>
        </div>
        <div>
          <ParagraphTitle>Skills</ParagraphTitle>
        </div>
      </div>
    </SectionWrapper>
  );
}
