import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "소개" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/disclaimer", label: "면책조항" },
  { href: "/contact", label: "문의" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-gray-600">
        <nav aria-label="필수 페이지">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center hover:text-gray-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {new Date().getFullYear()} 텐션감. 이 사이트의 정보는 진단·치료를 대신하지 않습니다.</p>
      </div>
    </footer>
  );
}
