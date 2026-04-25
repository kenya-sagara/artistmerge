"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/works", label: "Works" },
  { href: "/why", label: "Why" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      data-theme="dark"
      className="sticky top-0 z-50 backdrop-blur-md bg-background/70 text-foreground border-b hairline"
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="block h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
          <span className="display text-[15px] font-semibold tracking-tight">
            ArtistMerge
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[13px] py-1 transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-strong hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute left-0 right-0 -bottom-[1px] h-[2px] transition-colors ${
                    active ? "bg-accent" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex h-9 items-center gap-2 rounded-full border border-line-strong px-4 text-[12px] font-medium hover:border-accent hover:text-accent transition-colors"
        >
          指名のご相談
          <span aria-hidden>→</span>
        </Link>

        {/* Mobile: just Contact */}
        <Link
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`md:hidden text-[13px] transition-colors ${
            pathname === "/contact" ? "text-accent" : "text-foreground"
          }`}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
