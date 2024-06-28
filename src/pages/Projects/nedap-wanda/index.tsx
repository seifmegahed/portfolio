import Navbar from "@components/Navbar";
import PageWrapper from "@components/PageWrapper";
import SectionTitle from "@components/SectionTitle";
import SectionWrapper from "@components/SectionWrapper";

export default function NedapWanda() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/nedap-wanda">
        <SectionTitle title="Nedap Wanda" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Prototype a low power geolocation tracking device for people with dementia. Thesis project for Nedap</p>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
