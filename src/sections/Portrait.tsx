import portraitImage from "../assets/portrait.jpg";

export default function Portrait() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-end">
      <img className="rounded-r-full w-60" src={portraitImage} />
    </div>
  );
}