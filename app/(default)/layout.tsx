'use client';

export default function DefaultLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className={`grow`}>{children}</main>;
}
