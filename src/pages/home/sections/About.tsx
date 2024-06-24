import { useEffect, useRef, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import { aboutData, skillsData, tldr } from "../../../data/aboutData";

const ParagraphTitle = (props: { children: string }) => (
  <p className="text-lg w-full font-bold">{props.children}</p>
);

export default function About() {
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!trigger) {
        const skillsSection = skillsSectionRef.current;
        if (skillsSection) {
          const skillsSectionHeight =
            window.innerHeight - skillsSection.getBoundingClientRect().top;
          if (skillsSectionHeight > 300) {
            clearInterval(interval);
            setTrigger(true);
          }
        }
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [trigger]);

  return (
    <SectionWrapper id="about">
      <SectionTitle title="About" />
      <div className="grid md:grid-cols-2 md:gap-5 gap-2 w-full">
        <div className="flex flex-col gap-3">
          {aboutData.map((data) => (
            <div key={data.title}>
              <ParagraphTitle>{data.title}</ParagraphTitle>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <ParagraphTitle>{tldr.title}</ParagraphTitle>
            <p>{tldr.content}</p>
          </div>

          <div ref={skillsSectionRef}>
            <ParagraphTitle>Skills</ParagraphTitle>
            <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {Object.entries(skillsData).map(([key, value]) => (
                <div key={key}>
                  <p>{key}</p>
                  <hr className="border-gray-400"></hr>
                  {value.map((data) => (
                    <div
                      key={data.title}
                      className="flex w-full justify-between items-center"
                    >
                      <p>{data.title}</p>
                      <SkillBar trigger={trigger} score={data.score} />
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

function SkillBar(props: { score: number; trigger: boolean }) {
  return (
    <div className="bg-white rounded-full h-2 w-24">
      <div
        className="bg-slate-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
        style={{ width: props.trigger ? props.score + "%" : "0%" }}
      ></div>
    </div>
  );
}
