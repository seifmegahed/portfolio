import { introText, stateOfProject } from "../data/data";

export default function LEDBody() {
  return (
    <div className="flex flex-col gap-3">
      <section> {introText} </section>
      <h2 className="text-lg font-normal">Stack</h2>
      <div className="grid grid-cols-2 gap-3">
        <ul className="list-disc pl-8">
          {[
            "React",
            "Javascript",
            "Material UI",
            "Firebase Auth",
            "Firebase Firestore",
            "Firebase Storage",
          ].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <h2 className="text-lg font-normal">State of Project</h2>
      <section>
        <p>{stateOfProject}</p>
      </section>
    </div>
  );
}
