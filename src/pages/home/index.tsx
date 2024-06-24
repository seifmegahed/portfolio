import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Portrait from "./sections/Portrait";
import PageWrapper from "../../components/PageWrapper";
import Navbar from "../../components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <Hero />
      <Portrait />
      <About />
      <Projects />
      <Contact />
    </PageWrapper>
  );
}
