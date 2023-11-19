import Link from "next/link"
import { Button, ThemePanel } from "@radix-ui/themes"

const IssuesPage = () => {
  return (
    <>
      <div>
        <Button>
          <Link href="/issues/new"> New Ticket </Link>
        </Button>
      </div>
    </>
  )
}

export default IssuesPage
