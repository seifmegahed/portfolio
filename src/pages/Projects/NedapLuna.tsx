import Navbar from "../../components/Navbar";
import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";

export default function NedapLuna() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/nedap-luna">
        <SectionTitle title="Nedap Luna" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Prototype a low power E-ink display device to link with data from Caren database. Internship project for Nedap</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
