import { HashLink as Link } from 'react-router-hash-link';
import { navbarLinks } from "../data/navbarData";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center w-full sm:text-2xl text-xl font-thin ">
      {navbarLinks.map((path) => (
        <div className="flex items-center">
          <Link smooth to={path.path} key={path.name}>
            <p className="cursor-pointer hover:bg-white/45 p-4 sm:text-3xl text-2xl">
              {path.name.toUpperCase()}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
