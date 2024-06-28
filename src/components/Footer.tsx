import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { projects } from "@data/projectsData";
import { navbarLinks } from "@data/navbarData";
import GithubIconSmall from "@icons/GithubIconSmall";

function LinkTypeSelector(props: {
  link: {
    title: string;
    path: string;
    hash?: boolean;
    icon?: ReactNode;
    href?: boolean;
  };
}) {
  const link = props.link;
  if (link.href)
    return (
      <a href={link.path}>
        <span className="text-sm hover:underline">{link.title}</span>
      </a>
    );
  if (link.hash)
    return (
      <HashLink smooth to={link.path}>
        <span className="text-sm hover:underline">{link.title}</span>
      </HashLink>
    );
  return (
    <Link to={"/" + link.path}>
      <span className="text-sm hover:underline">{link.title}</span>
    </Link>
  );
}

function FooterLinksSection(props: {
  sectionTitle: string;
  links: {
    title: string;
    path: string;
    hash?: boolean;
    icon?: ReactNode;
    href?: boolean;
  }[];
}) {
  return (
    <div className="flex flex-col gap-1 max-w-64 w-full">
      <span className="font-normal">{props.sectionTitle}</span>
      <div className="flex flex-col gap-1 w-full flex-wrap">
        <hr className="sm:w-48 border-slate-500" />
        {props.links.map((link) => (
          <div key={link.title} className="flex gap-1 text-slate-400">
            {link.icon}
            <LinkTypeSelector link={link} />
          </div>
        ))}
      </div>
    </div>
  );
}
const LinksSection = {
  title: "Links",
  links: [
    {
      title: "GitHub",
      path: "https://github.com/seifmegahed",
      icon: <GithubIconSmall />,
    },
  ],
};
export default function Footer() {
  return (
    <footer className="bg-slate-700 p-10 w-full flex flex-col gap-10">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-10 w-fit">
        <FooterLinksSection
          sectionTitle="Home"
          links={navbarLinks
            .map((link) => ({ ...link, hash: true }))
            .filter((link) => link.path !== "/")}
        />
        <FooterLinksSection
          sectionTitle="Projects"
          links={projects.map((project) => ({
            title: project.title,
            path: project.path,
          }))}
        />
        <FooterLinksSection
          sectionTitle="Links"
          links={LinksSection.links.map((link) => ({
            ...link,
            href: true,
          }))}
        />
      </div>
      <div className="w-full text-center text-xs text-slate-400 flex flex-col gap-4">
        <hr className="border-slate-500" />

        <span>
          &copy; {new Date().getFullYear()}
          {" Seif Megahed. All rights reserved"}
        </span>
      </div>
    </footer>
  );
}
