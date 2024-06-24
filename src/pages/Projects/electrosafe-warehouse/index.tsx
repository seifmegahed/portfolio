import Navbar from "../../../components/Navbar";
import PageWrapper from "../../../components/PageWrapper";
import SectionTitle from "../../../components/SectionTitle";
import SectionWrapper from "../../../components/SectionWrapper";
import ExternalLink from "../../../icons/ExternalLink";

const pageImageMobileURL =
  "https://utfs.io/f/79713d41-24e0-44ab-a0f3-7a558aab2cb0-1x9ybj.JPG";

export default function ElectrosafeWarehouse() {
  return (
    <PageWrapper navbar={<Navbar />}>
      <SectionWrapper id="/electrosafe-warehouse">
        <SectionTitle title="Electrosafe Warehouse" />
        <div className="w-full">
          <h1 className="text-xl mb-5 text-slate-300">
            A Customizable Warehouse Management System
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Introduction />
          <div className="w-full flex justify-end">
            <div className="overflow-hidden rounded-xl lg:h-[450px] lg:w-96 h-[620px]">
              <img
                src={pageImageMobileURL}
                alt="Electrosafe Warehouse"
                className="w-full"
              />
            </div>
          </div>
          <StateOfProject />
          <div className="flex flex-col items-center w-full py-3 gap-3">
            <div className="w-full text-xl font-normal flex gap-1">
              <p>Take the web app for a spin</p>
              <ExternalLink href="https://electrosafe.web.app/" />
            </div>
            <p className="w-full">
              To access the app send me a request through the contact form. Once
              logged in follow the steps below for a more fruitful experience
            </p>
          </div>
          <iframe
            className="md:col-span-2"
            src="https://scribehow.com/embed/Create_new_inventory_category_and_add_items__q_ywOUhiTgCtpudpvG6tQg?skipIntro=true"
            width="100%"
            height="640"
            allowFullScreen
            frameBorder={0}
          ></iframe>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}

function Introduction() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-normal">Stack</h2>
      <div className="grid grid-cols-2 gap-3">
        <ul className="list-disc pl-8">
          {[
            "React",
            "Typescript",
            "Material UI",
            "React Query",
            "Vitest",
            "Cypress",
          ].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul className="list-disc pl-8">
          {[
            "Firebase Auth",
            "Firebase Firestore",
            "Firebase Storage",
            "Firebase Functions",
          ].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <h2 className="text-lg font-normal">Key Features</h2>
      <ul className="list-disc pl-8">
        {[
          {
            headline: "Customizable Item Forms:",
            body: "Users can create forms specific to their inventory needs, capturing data points like serial numbers, warranty information, dimensions, or weight.",
          },
          {
            headline: "Inventory:",
            body: "Track item quantities, prices, and specifications.",
          },
          {
            headline: "Fast Search:",
            body: "Efficient search and filtering capabilities.",
          },
          {
            headline: "User Access Controls:",
            body: "User roles and permissions within the warehouse team.",
          },
        ].map((item) => (
          <li>
            <strong>{item.headline}</strong>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StateOfProject() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-normal">State of Project</h2>
      <p>
        As the project grew in complexity, I realized that a non relational
        database was not the best fit. I decided to try out Postgres, but at the
        time I was busy at work, so I left the project on hold. I did however,
        learn a lot during the project.
      </p>
      <div className="flex gap-2">
        <p>Check out the source code on Github</p>
        <ExternalLink href="https://github.com/seifmegahed/electrosafe" />
      </div>
    </div>
  );
}
