import Navbar from "../../components/Navbar";
import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";

export default function AzzasHandmade() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/azzas-handmade">
        <SectionTitle title="Azza's Handmade" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Web Store for handmade jewelry and accessories</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
