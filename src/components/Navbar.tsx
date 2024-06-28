import { HashLink as Link } from 'react-router-hash-link';
import { navbarLinks } from "@data/navbarData";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center w-full sm:text-2xl text-lg font-thin ">
      {navbarLinks.map((path) => (
        <div key={path.path} className="flex items-center">
          <Link smooth to={path.path} key={path.title}>
            <p className="cursor-pointer hover:bg-white/45 sm:p-4 p-2">
              {path.title.toUpperCase()}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
