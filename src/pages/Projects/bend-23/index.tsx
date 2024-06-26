import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionSubtitle from "../../../components/SectionSubtitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import Bend23Description from "./sections/Bend23Description";
import SampleAudio from "./sections/SampleAudio";
import ImageGallery from "./sections/ImageGallery";
import FrontImage from "./sections/FrontImage";

export default function Bend23() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/bend-23">
        <SectionTitle title="Bend 23" />
        <SectionSubtitle subtitle="Audio delay pedal with a low frequency oscillator" />
        <div className="flex gap-6 flex-col">
          <div className="flex gap-6 md:flex-row-reverse flex-col">
            <FrontImage />
            <Bend23Description />
          </div>
          <SampleAudio />
          <ImageGallery />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
