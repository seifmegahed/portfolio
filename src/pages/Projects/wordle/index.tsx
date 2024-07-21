import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";

export default function Wordle() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="wordle">
        <SectionTitle title="Wordle" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Web app wordle game clone built with React</p>
          <div className="flex gap-3 items-center">
            <p>View on GitHub</p>
            <ExternalLink href="https://github.com/seifmegahed/wordle" />
          </div>
          <div className="flex gap-3 items-center">
            <p>Play Game</p>
            <ExternalLink href="https://seifmegahed-wordle.web.app/" />
          </div>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
