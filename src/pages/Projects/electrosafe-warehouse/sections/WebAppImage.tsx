const pageImageMobileURL =
  "https://utfs.io/f/79713d41-24e0-44ab-a0f3-7a558aab2cb0-1x9ybj.JPG";

export default function WebAppImage() {
  return (
    <div className="w-full flex justify-end">
      <div className="overflow-hidden rounded-xl lg:h-[450px] lg:w-96 h-[620px]">
        <img
          src={pageImageMobileURL}
          alt="Electrosafe Warehouse"
          className="w-full"
        />
      </div>
    </div>
  );
}
