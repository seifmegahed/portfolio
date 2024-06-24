import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";

export default function Bend23() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/bend-23">
        <SectionTitle title="Bend 23" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Audio delay pedal with a low frequency oscillator</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
