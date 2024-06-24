export default function Introduction() {
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
