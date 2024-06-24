import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";

export default function Bend24() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/bend-24">
        <SectionTitle title="Bend 24" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Startup that manufactures interactive LED floor panel games</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
