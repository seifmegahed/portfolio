import { ReactNode } from "react";
import Footer from "./Footer";

export default function PageWrapper(props: {
  navbar: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className=" flex justify-center items-center w-screen flex-col min-h-screen text-white font-inter font-thin bg-gradient-to-br from-slate-700 to-white">
      {props.navbar}
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-screen-lg w-full p-4 gap-10">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
