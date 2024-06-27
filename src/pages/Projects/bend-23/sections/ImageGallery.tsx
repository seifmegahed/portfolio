import { Suspense } from "react";
import { photoGalleryURLs } from "../data/data";
import Loader from "../../../../components/Loader";

export default function ImageGallery() {
  return (
    <div className="grid md:grid-cols-2">
      {photoGalleryURLs.map((photo, index) => (
        <Suspense key={index} fallback={<Loader />}>
          <img className="w-full h-full object-cover" key={index} src={photo} />
        </Suspense>
      ))}
    </div>
  );
}
