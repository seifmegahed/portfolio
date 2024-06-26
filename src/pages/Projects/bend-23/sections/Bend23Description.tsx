import { introBody, pageText } from "../data/data";

export default function Bend23Description() {
  return (
    <div className="h-full flex flex-col gap-5 md:w-1/2 w-full">
      <section>
        <p>{introBody}</p>
      </section>
      {Object.keys(pageText).map((key) => {
        if (key === "intro") return null;
        return (
          <section key={key}>
            <h2 className="text-xl font-semibold mb-2">
              {pageText[key].title}
            </h2>
            <p>{pageText[key].body}</p>
          </section>
        );
      })}
    </div>
  );
}