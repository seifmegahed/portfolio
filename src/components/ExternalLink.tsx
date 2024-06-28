import ExternalLinkIcon from "@icons/ExternalLinkIcon";

export default function ExternalLink(props: { href?: string }) {
  return (
    <div className="scale-90 cursor-pointer hover:scale-100 transition-all duration-300 ease-in-out h-7">
      <a href={props.href} target="_blank" rel="noreferrer" className="">
        <ExternalLinkIcon />
      </a>
    </div>
  );
}
