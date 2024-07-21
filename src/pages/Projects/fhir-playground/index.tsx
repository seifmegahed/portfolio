import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";

export default function FHIRPlayground() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="fhir-playground">
        <SectionTitle title="FHIR Playground" />
        <div className="w-full h-full flex items-center flex-col max-w-screen-lg justify-center text-center gap-5">
          <p>Web GUI to interact with a FHIR standard database</p>
          <div className="flex gap-3 items-center">
            <p>View on GitHub</p>
            <ExternalLink href="https://github.com/seifmegahed/fhir-playground" />
          </div>
          <div className="flex gap-3 items-center">
            <p>Try it out</p>
            <ExternalLink href="https://fhir-playground.web.app" />
          </div>
          <p>Coming Soon!</p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
