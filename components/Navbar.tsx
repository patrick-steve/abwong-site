"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Open Positions", href: "/open-positions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "bg-[var(--cream)] border-b border-[var(--border)]"
    : isHome
    ? "bg-transparent"
    : "bg-[var(--cream)] border-b border-[var(--border)]";

  const linkColor = (href: string) => {
    const active = pathname === href;
    if (active) return "text-[var(--gold)]";
    if (!scrolled && isHome) return "text-[rgba(255,255,255,0.55)] hover:text-white";
    return "text-[var(--ink-dim)] hover:text-[var(--ink)]";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-12 transition-all duration-300 ${navBg}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-7 h-7 border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] font-[family-name:var(--font-playfair)] text-base tracking-[0.05em]">
          W
        </div>
        <span
          className={`font-[family-name:var(--font-inter)] font-semibold text-[13px] tracking-[0.08em] uppercase transition-colors ${
            !scrolled && isHome ? "text-white" : "text-[var(--ink)]"
          }`}
        >
          A.B. Wong Group
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-[family-name:var(--font-inter)] font-normal text-[12px] tracking-[0.06em] uppercase px-4 py-2 no-underline transition-colors ${linkColor(item.href)}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
