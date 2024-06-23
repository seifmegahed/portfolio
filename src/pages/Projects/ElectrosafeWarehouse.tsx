import Navbar from "../../components/Navbar";
import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";

export default function ElectrosafeWarehouse() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/electrosafe-warehouse">
        <SectionTitle title="Electrosafe Warehouse" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Web app to keep track of warehouse items. Customizable form generator</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
