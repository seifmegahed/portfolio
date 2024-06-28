import { Suspense } from "react";
import Loader from "@components/Loader";

const portraitImageURL =
  "https://utfs.io/f/b3e3a10e-2085-429c-881d-2d1a6b04191f-oj13b9.jpg";

export default function Portrait() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-end">
      <Suspense fallback={<Loader />}>
        <img className="rounded-r-full w-60" src={portraitImageURL} />
      </Suspense>
    </div>
  );
}
