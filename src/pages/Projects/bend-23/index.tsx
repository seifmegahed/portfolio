import { Suspense, lazy } from "react";

import Navbar from "@components/Navbar";
import PageWrapper from "@components/PageWrapper";
import SectionSubtitle from "@components/SectionSubtitle";
import SectionTitle from "@components/SectionTitle";
import SectionWrapper from "@components/SectionWrapper";
import Bend23Description from "./sections/Bend23Description";
import Loader from "@components/Loader";
import ErrorBoundary from "@components/ErrorBoudary";
import ErrorComponent from "@components/ErrorComponent";

import SampleAudio from "./sections/SampleAudio";
import ImageGallery from "./sections/ImageGallery";
import FrontImage from "./sections/FrontImage";
const ThreeCanvas = lazy(() => import("./sections/Three"));

export default function Bend23() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/bend-23">
        <SectionTitle title="Bend 23" />
        <SectionSubtitle subtitle="Audio delay pedal with a low frequency oscillator" />
        <div className="flex gap-6 flex-col">
          <div className="flex gap-6 md:flex-row-reverse flex-col">
            <Suspense fallback={<Loader />}>
              <FrontImage />
            </Suspense>
            <Bend23Description />
          </div>
          <div className="h-[600px] w-full relative overflow-clip">
            <ErrorBoundary fallback={<ErrorComponent message="Error loading 3D canvas" />}>
              <Suspense fallback={<Loader />}>
                <div className="absolute top-[-300px] left-0 w-full h-[1200px]">
                  <ThreeCanvas />
                </div>
              </Suspense>
            </ErrorBoundary>
          </div>
          <Suspense fallback={<Loader />}>
            <SampleAudio />
          </Suspense>
          <ImageGallery />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
