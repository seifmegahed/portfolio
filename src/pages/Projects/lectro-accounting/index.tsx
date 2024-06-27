import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionSubtitle from "../../../components/SectionSubtitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import AccountingBody from "./sections/body";

export default function LectroAccounting() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/lectro-accounting">
        <SectionTitle title="Lectro Accounting" />
        <SectionSubtitle subtitle="Google Sheets based accounting system for Lectro" />
        <div className="w-full h-full max-w-screen-lg">
          <AccountingBody />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
