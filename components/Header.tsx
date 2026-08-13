import Link from "next/link";
import { categories } from "@/lib/categories";
import HeaderLogo from "@/components/HeaderLogo";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <HeaderLogo />
        <nav aria-label="카테고리">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="inline-flex min-h-11 items-center hover:text-gray-950"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
