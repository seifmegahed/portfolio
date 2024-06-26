import { frontImageURL } from "../data/data";

export default function FrontImage() {
  return (
    <img
      className="md:w-1/2 w-full object-cover"
      src={frontImageURL}
      alt="Bend 23 front"
    />
  );
}
