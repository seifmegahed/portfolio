export type ProjectDataType = {
  title: string;
  description: string;
  image?: { url: string; urlSmall: string };
};

export const projects: ProjectDataType[] = [
  { title: "Bend 24", description: "Interactive LED floor game" },
  {
    title: "Electrosafe Warehouse",
    description: "Web app to keep track of warehouse items",
  },
  {
    title: "Bend 23",
    description: "Audio delay pedal with a low frequency oscillator",
  },
];
