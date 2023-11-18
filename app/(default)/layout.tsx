"use client"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="grow">{children}</main>
    </>
  )
}
