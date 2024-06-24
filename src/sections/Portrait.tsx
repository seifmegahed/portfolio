const portraitImageURL = "https://utfs.io/f/b3e3a10e-2085-429c-881d-2d1a6b04191f-oj13b9.jpg";

export default function Portrait() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-end">
      <img className="rounded-r-full w-60" src={portraitImageURL} />
    </div>
  );
}