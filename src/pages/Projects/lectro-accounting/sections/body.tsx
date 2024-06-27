import { bodyText, images, introText, stateOfProject } from "../data/data";

export default function AccountingBody() {
  return (
    <div className="w-full h-full grid md:grid-cols-2 max-w-screen-lg gap-5">
      <section> {introText} </section>
      <img src={images.transaction} alt="Transactions" />
      <section>
        <h2 className="text-lg font-normal">Technology</h2>
        {bodyText}
      </section>
      <img src={images.report} alt="Report" />
      <section>
        <h2 className="text-lg font-normal">State of Project</h2>
        <p>{stateOfProject}</p>
      </section>
      <img src={images.transactions} alt="Transactions" />
    </div>
  );
}
