import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";

export default function COMPONENT_NAME() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="COMPONENT_ID">
        <SectionTitle title="COMPONENT_TITLE" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>COMPONENT_DESCRIPTION</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
