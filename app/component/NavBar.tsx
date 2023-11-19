"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgComponents } from "react-icons/cg"

const NavBar = () => {
  const current = usePathname()

  const links = [
    {
      label: "Dashboard ",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ]
  return (
    <nav className="sticky left-0 top-0 z-50 w-full flex space-x-6 px-5 h-20 mb-4 items-center bg-transparent border-b border-zinc-900 justify-between ">
      <Link href="/">
        <div className="flex items-center text-xl font-bold transition-colors hover:text-zinc-400  ">
          HelpPilot <CgComponents size={30} className="ml-1" />
        </div>
      </Link>

      <ul className="flex space-x-6 items-center ">
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
  )
}

export default NavBar
