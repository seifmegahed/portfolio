import CodeSnippet from "@components/CodeSnippet";
import ExternalLink from "@components/ExternalLink";
import Navbar from "@components/Navbar";
import PageWrapper from "@components/PageWrapper";
import SectionSubtitle from "@components/SectionSubtitle";
import SectionTitle from "@components/SectionTitle";
import SectionWrapper from "@components/SectionWrapper";


const codeSnippet = `
  useEffect(() => {
    const inputElem = document
      .getElementById("image-upload-label")
      ?.appendChild(document.createElement("input"));

    inputElem?.setAttribute("type", "file");
    inputElem?.setAttribute("accept", "image/*");
    inputElem?.classList.add("hidden");

    inputElem?.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement & {
        files: FileList;
      };
      const _file = target.files[0];
      handleUpload(_file);
    });
  }, []);

`;

export default function AzzasHandmade() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/azzas-handmade">
        <SectionTitle title="Azza's Handmade" />
        <SectionSubtitle subtitle="Web Store for handmade jewelry and accessories" />
        <div className="w-full h-full flex items-start flex-col max-w-screen-lg justify-center gap-5">
          <ProjectDescription />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}

function ProjectDescription() {
  const stack = [
    "React",
    "Typescript",
    "Tailwind",
    "Firebase Authentication",
    "Firebase Firestore",
    "Firebase Storage",
  ];

  const futureFeatures = [
    "Cart and Checkout",
    "Payment Gateway Integration",
    "Customizable Featured Products Section",
    "Search Functionality",
    "Load as you scroll",
  ];

  return (
    <div className="w-full">
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          This project is still in its early stages, and I am currently working
          on the design and functionality of the website. The website has an
          admin dashboard that allows the user to add products, categories, and
          images. The user can also edit and delete products. The website uses
          Tailwind CSS for styling, which is a step up from using Material UI.
          The website also uses Firebase for authentication, database,
          analytics, and storage.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Stack</h2>
        <ul className="list-disc list-inside pl-6">
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Issues</h2>
        <p>
          During the development of the image upload dropzone, I encountered an
          issue with iOS devices not being able to upload images. After some
          research, I found that the issue was caused by the fact that iOS
          devices require the file input field does not work when added in JSX.
          I was able to fix this issue by manually adding the file input field
          to the DOM using the useEffect hook which led to one of the ugliest
          hacks I've written in my opinion.
        </p>
      </section>
      <section className="mb-4">
        <CodeSnippet code={codeSnippet} />
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Future Features</h2>
        <ul className="list-disc list-inside pl-6">
          {futureFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <div className="flex gap-2 items-center">
          Check out the source code on GitHub
          <ExternalLink href="https://github.com/seifmegahed/azzashandmade" />
        </div>
      </section>
    </div>
  );
}
