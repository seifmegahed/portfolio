import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";

export default function LectroLED() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/lectro-led">
        <SectionTitle title="Lectro LED" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Web app to manage an LED Lighting manufacturer's resources</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}