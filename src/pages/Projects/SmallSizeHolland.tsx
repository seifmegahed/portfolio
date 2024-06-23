import Navbar from "../../components/Navbar";
import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";

export default function SmallSizeHolland() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/small-size-holland">
        <SectionTitle title="Small Size Holland" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Electronics system for a robocup style soccer game for the small size league. Minor internship project for Small Size Holland Saxion</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
