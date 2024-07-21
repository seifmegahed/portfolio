import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";

export default function Bouklao() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="bouklao">
        <SectionTitle title="Bouklao" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Web app chrome dino game clone built with React</p>
          <div className="flex gap-3 items-center">
            <p>View on GitHub</p>
            <ExternalLink href="https://github.com/seifmegahed/bouklao" />
          </div>
          <div className="flex gap-3 items-center">
            <p>Play Game</p>
            <ExternalLink href="https://bouklao.vercel.app/" />
          </div>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
