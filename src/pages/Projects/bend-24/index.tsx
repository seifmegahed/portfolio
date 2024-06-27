import ExternalLink from "../../../components/ExternalLink";
import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionSubtitle from "../../../components/SectionSubtitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import { images, text } from "./data/data";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <section className="flex flex-col gap-4">
        <p>{text.introduction}</p>
        <h2 className="text-xl font-semibold mb-2">
          {text.gameDescriptionTitle}
        </h2>
        <p>{text.gameDescription}</p>
      </section>
      <img src={images.activate} />
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.buildingPrototypeTitle}
        </h2>
        <p>{text.buildingPrototype}</p>
      </section>
      <img src={images.printedSection} />
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-2">{text.scalingUpTitle}</h2>
        <p>{text.scalingUp}</p>
        <img src={images.upsideDownRender} className="h-full object-cover" />
      </section>
      <img src={images.moldSection} />
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.connectingPiecesTitle}
        </h2>
        <p>{text.connectingPieces}</p>
      </section>
      <img src={images.stacked} />
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.gameEngineTitle}
        </h2>
        <p>{text.gameEngine}</p>
      </section>
      <img src={images.pcbRender} className="h-full object-cover" />
      <img src={images.controllerPlayback} className="w-full md:col-span-2" />
      <img src={images.controllerFrames} className="w-full md:col-span-2" />
      <img src={images.controllerSetup} className="w-full md:col-span-2" />
      <div className="md:col-span-2">
        <div className="w-full text-xl font-normal flex items-center gap-2">
          <p>Check out the web app's source code on Github</p>
          <ExternalLink href="https://github.com/seifmegahed/step-controller-gui" />
        </div>
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {text.reachingNextLevelTitle}
        </h2>
        <p>{text.reachingNextLevel}</p>
      </section>
      <div className="md:h-[300px] h-[450px] flex items-center overflow-clip">
        <img src={images.colorTest} alt="" />
      </div>
    </div>
  );
}
