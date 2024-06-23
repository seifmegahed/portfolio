export type ProjectDataType = {
  title: string;
  path: string;
  year: number;
  description: string;
  tags: string[];
};

export const projects: ProjectDataType[] = [
  {
    title: "Azza's Handmade",
    path: "azzas-handmade",
    year: 2024,
    description: "Web Store for handmade jewelry and accessories",
    tags: ["Firebase", "React", "Tailwind CSS", "Auth"],
  },
  {
    title: "Bend 24",
    path: "bend-24",
    year: 2023,
    description: "Startup that manufactures interactive LED floor panel games",
    tags: [
      "3D Modeling",
      "CAN Bus",
      "Wifi",
      "PCB Design",
      "Embedded Game Engine",
      "C/C++",
      "TypeScript",
      "React",
    ],
  },
  {
    title: "Electrosafe Warehouse",
    path: "electrosafe-warehouse",
    year: 2022,
    description:
      "Web app to keep track of warehouse items. Customizable form generator",
    tags: [
      "TypeScript",
      "React",
      "Material UI",
      "Firebase",
      "React Query",
      "Firestore",
      "Auth",
      "Vitest",
      "Cypress",
    ],
  },
  {
    title: "Lectro LED",
    path: "lectro-led",
    year: 2022,
    description: "Web app to manage an LED Lighting manufacturer's resources",
    tags: [
      "JavaScript",
      "React",
      "Material UI",
      "Firebase",
      "Firestore",
      "Auth",
    ],
  },
  {
    title: "Lectro Accounting",
    path: "lectro-accounting",
    year: 2021,
    description: "Google Sheets based accounting system for Lectro",
    tags: [
      "Google Apps Script",
      "Google Sheets",
      "HTML",
      "CSS",
      "MaterializeUI",
    ],
  },
  {
    title: "Bend 23",
    path: "bend-23",
    year: 2020,
    description: "Audio delay pedal with a low frequency oscillator",
    tags: ["C/C++", "WaveTable", "PCB Design", "3D Modeling", "ThreeJS"],
  },
  {
    title: "Monstera Speeduino",
    path: "monstera-speeduino",
    year: 2022,
    description: "Freelance PCB design for Monstera",
    tags: ["PCB Design", "CAN Bus", "EMC"],
  },
  {
    title: "Nedap Wanda",
    path: "nedap-wanda",
    year: 2018,
    description:
      "Prototype a low power geolocation tracking device for people with dementia. Thesis project for Nedap",
    tags: ["C/C++", "ARM", "Wifi", "GPS", "Embedded", "BLE"],
  },
  {
    title: "Nedap Luna",
    path: "nedap-luna",
    year: 2017,
    description:
      "Prototype a low power E-ink display device to link with data from Caren database. Internship project for Nedap",
    tags: ["C/C++", "ARM", "Wifi", "E-ink", "Embedded", "PCB Design"],
  },
  {
    title: "Small Size Holland",
    path: "small-size-holland",
    year: 2016,
    description:
      "Electronics system for a robocup style soccer game for the small size league. Minor internship project for Small Size Holland Saxion",
    tags: ["PCB Design", "USB", "Wifi", "SPI", "EMC", "PID"],
  },
];
