import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionSubtitle from "../../../components/SectionSubtitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import Bend23Description from "./sections/Bend23Description";

import { photoGalleryURLs } from "./data/data";
import SampleAudio from "./sections/SampleAudio";

export default function Bend23() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/bend-23">
        <SectionTitle title="Bend 23" />
        <SectionSubtitle subtitle="Audio delay pedal with a low frequency oscillator" />
        <div className="flex gap-6 flex-col">
          <div className="flex gap-6 md:flex-row-reverse flex-col">
            <img
              className="md:w-1/2 w-full object-cover"
              src="https://utfs.io/f/b9d9b1a1-61bf-40a8-a60c-2317b5efb1e2-7grfip.png"
              alt="Bend 23 front"
            />
            <Bend23Description />
          </div>
          <SampleAudio />
          <div className="grid md:grid-cols-2">
            {photoGalleryURLs.map((photo, index) => (
              <img
                className="w-full h-full object-cover"
                key={index}
                src={photo}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
