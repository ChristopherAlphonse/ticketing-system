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
    <nav className=" flex space-x-6 px-5 h-20 mb-4 items-center bg-transparent border-b border-zinc-900">
      <Link href="/">
        <div className="flex items-center text-xl font-bold transition-colors hover:text-zinc-400 ">
          HelpPilot <CgComponents size={30} className="ml-1" />
        </div>
      </Link>

      <ul className="flex space-x-6">
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
