import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";
import { aboutData, skillsData } from "../data/aboutData";

const ParagraphTitle = (props: { children: string }) => (
  <p className="text-lg w-full font-bold">{props.children}</p>
);

export default function About() {
  const PartA = [
    aboutData[0],
    aboutData[1],
    aboutData[2],
    aboutData[3],
    aboutData[4],
    aboutData[5],
  ];
  const PartB = [aboutData[6]];
  return (
    <SectionWrapper id="about">
      <SectionTitle title="About" />
      <div className="grid md:grid-cols-2 md:gap-5 gap-2 w-full">
        <div className="flex flex-col gap-3">
          {PartA.map((data) => (
            <div key={data.title}>
              <ParagraphTitle>{data.title}</ParagraphTitle>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {PartB.map((data) => (
            <div key={data.title}>
              <ParagraphTitle>{data.title}</ParagraphTitle>
              <p>{data.content}</p>
            </div>
          ))}
          <div>
            <ParagraphTitle>Skills</ParagraphTitle>
            <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {Object.entries(skillsData).map(([key, value]) => (
                <div key={key}>
                  <p>{key}</p>
                  <hr className="border-gray-400"></hr>
                  {value.map((data) => (
                    <div
                      key={data.title}
                      className="flex w-full justify-between"
                    >
                      <p>{data.title}</p>
                      <p>{data.score}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
