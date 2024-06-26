import { photoGalleryURLs } from "../data/data";

export default function ImageGallery() {
  return (
    <div className="grid md:grid-cols-2">
      {photoGalleryURLs.map((photo, index) => (
        <img className="w-full h-full object-cover" key={index} src={photo} />
      ))}
    </div>
  );
}
