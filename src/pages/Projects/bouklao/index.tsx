import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";

const iphoneImageURL = "https://utfs.io/f/b763a7be-406f-4a22-a7cd-6fc369884d6d-ab5o5j.png"
const ipadImageURL = "https://utfs.io/f/a232a8a9-33ed-49b7-9ca4-a2c17904a27b-1czhm.png"
const ipadImageURL2 = "https://utfs.io/f/918a10ca-53fc-4f41-bd44-40ab076081c5-sxnfmz.png"

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
          <img src={iphoneImageURL} />
          <img src={ipadImageURL} />
          <img src={ipadImageURL2} />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
