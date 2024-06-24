import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import SectionSubtitle from "../../../components/SectionSubtitle";

import Introduction from "./sections/Introduction";
import StateOfProject from "./sections/StateOfProject";
import ScribeIFrame from "./sections/ScribeIFrame";
import ExploreWebApp from "./sections/ExploreWebApp";
import WebAppImage from "./sections/WebAppImage";

export default function ElectrosafeWarehouse() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/electrosafe-warehouse">
        <SectionTitle title="Electrosafe Warehouse" />
        <SectionSubtitle subtitle="A Customizable Warehouse Management System" />
        <div className="grid md:grid-cols-2 gap-6">
          <Introduction />
          <WebAppImage />
          <StateOfProject />
          <ExploreWebApp />
          <ScribeIFrame />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
