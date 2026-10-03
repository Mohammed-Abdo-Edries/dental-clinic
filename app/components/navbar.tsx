"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  function handleNavClick(
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    const headerOffset = 96;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="relative mx-auto max-w-6xl px-6 py-5"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Luma Dental home"
            className="flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src="/luma-mark.png"
              alt="Luma Dental logo"
              width={48}
              height={48}
              priority
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />

            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-medium tracking-tight text-transparent sm:text-4xl">
              LumaDental
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#appointment"
              onClick={(event) => handleNavClick(event, "#appointment")}
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Book appointment
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-blue-700 transition hover:bg-blue-50 md:hidden"
          >
            {isOpen ? (
              <X size={26} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={26} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-6 top-full z-50 mt-3 flex w-64 flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#appointment"
              onClick={(event) => handleNavClick(event, "#appointment")}
              className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book appointment
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}