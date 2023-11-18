import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="border-b  border-gray-900 flex space-x-6 px-5 h-14 mb-4 items-center">
      <Link href="/"> HelpPilot</Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/"> Dashboard</Link>
        </li>
        <li>
          <Link href="/issues"> Issues</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
