import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className=" mx-auto px-6 ">
        <div className="flex  items-baseline justify-end py-8 border-t border-zinc-900 ">
          <ul className="mb-4  gap-2 ">
            <Link href="/sitemap">Site map </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
