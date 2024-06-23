import { ReactNode } from "react";

export default function SectionWrapper(props: {
  children: ReactNode;
  id: string;
}) {
  return (
    <div
      className="md:col-span-2 min-h-screen h-fit w-full flex flex-col items-center"
      id={props.id}
    >
      {props.children}
    </div>
  );
}
