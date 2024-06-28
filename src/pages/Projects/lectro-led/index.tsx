import Navbar from "@components/Navbar";
import PageWrapper from "@components/PageWrapper";
import SectionSubtitle from "@components/SectionSubtitle";
import SectionTitle from "@components/SectionTitle";
import SectionWrapper from "@components/SectionWrapper";
import { images } from "./data/data";
import LEDBody from "./sections/body";

export default function LectroLED() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/lectro-led">
        <SectionTitle title="Lectro LED" />
        <SectionSubtitle subtitle="Web app to manage an LED Lighting manufacturer's resources" />
        <div className="w-full h-full grid md:grid-cols-2 max-w-screen-lg gap-4">
          <LEDBody />
          <div className="flex flex-col gap-4 w-full">
            <img src={images.inventory} alt="Inventory" />
            <img src={images.item} alt="Inventory" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full my-5">
          <img src={images.newItem} alt="New Item" />
          <img src={images.projectA} alt="Project A" />
          <img src={images.projectB} alt="Project B" />
          <img src={images.projectC} alt="Project C" />
          <img src={images.suppliers} alt="Suppliers" />
          <img src={images.edafaA} alt="Suppliers" />
          <img src={images.edafaB} alt="Suppliers" />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
