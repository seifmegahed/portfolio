import ExternalLink from "../../../../components/ExternalLink";

export default function ExploreWebApp() {
  return (
    <div className="flex flex-col items-center w-full py-3 gap-3">
      <div className="w-full text-xl font-normal flex gap-1">
        <p>Take the web app for a spin</p>
        <ExternalLink href="https://electrosafe.web.app/" />
      </div>
      <p className="w-full">
        To access the app send me a request through the contact form. Once
        logged in follow the steps below for a more fruitful experience
      </p>
    </div>
  );
}