import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { analytics } from "../firebase-config";


export default function SectionTitle(props: { title: string }) {
  useEffect(() => {
    logEvent(analytics, "section_title", {
      section_title: props.title,
    });
  }, [props.title]);
  return (
    <div className="sm:text-5xl text-3xl w-full">
      {props.title.toUpperCase()}
      <hr className="w-full my-4" />
    </div>
  );
}
