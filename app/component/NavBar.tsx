"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgComponents } from "react-icons/cg";

const NavBar = () => {
  const current = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const stickyHeight = 120;

    setIsSticky(scrollY > stickyHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      label: "Dashboard ",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav
      className={`${
        isSticky ? "sticky top-0  shadow-md backdrop-blur" : ""
      } z-50 w-full flex space-x-6 px-5 h-20 mb-4 items-center bg-transparent border-b border-zinc-900 justify-between transition-all duration-300 ease-in-out `}
    >
      <Link href="/">
        <div className="flex items-center text-xl font-bold transition-colors hover:text-zinc-400">
          HelpPilot <CgComponents size={30} className="ml-1" />
        </div>
      </Link>

      <ul className="flex items-center space-x-6 text-md font-medium">
        {links.map((list) => (
          <Link
            key={Math.random()}
            href={list.href}
            className={`${
              list.href === current ? "text-zinc-500" : "text-default"
            } transition-colors hover:text-zinc-400`}
          >
            <li>{list.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
