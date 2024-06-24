import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";

export default function MonsteraSpeeduino() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/monstera-speeduino">
        <SectionTitle title="Monstera Speeduino" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Freelance PCB design for Monstera</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
