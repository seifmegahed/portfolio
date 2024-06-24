import ExternalLink from "../../../../components/ExternalLink";

export default function StateOfProject() {
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