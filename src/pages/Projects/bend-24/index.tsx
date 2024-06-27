import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionSubtitle from "../../../components/SectionSubtitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import { text } from "./data/data";

export default function Bend24() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/bend-24">
        <SectionTitle title="Bend 24" />
        <SectionSubtitle subtitle="Startup that manufactures interactive LED floor panel games" />
        <div className="w-full h-full flex flex-col max-w-screen-lg gap-5">
          <InteractiveFloorGame />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}

function InteractiveFloorGame() {
  return (
    <div className="flex flex-col items gap-4">
      <section>
        <p>{text.introduction}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.gameDescriptionTitle}
        </h2>
        <p>{text.gameDescription}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.buildingPrototypeTitle}
        </h2>
        <p>{text.buildingPrototype}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">{text.scalingUpTitle}</h2>
        <p>{text.scalingUp}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.connectingPiecesTitle}
        </h2>
        <p>{text.connectingPieces}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.webControlledGameEngineTitle}
        </h2>
        <p>{text.webControlledGameEngine}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.reachingNextLevelTitle}
        </h2>
        <p>{text.reachingNextLevel}</p>
      </section>
    </div>
  );
}
