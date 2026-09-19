"use client";

import { useEffect, useState } from "react";
import LogoMark from "@/components/LogoMark";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/translations";

export default function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { href: "#about", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#hours", label: t.nav.hours },
    { href: "#contact", label: t.nav.contact },
  ];

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div
      className={`font-sans flex items-center gap-1.5 text-[11px] tracked-sm uppercase ${className}`}
    >
      {(["vi", "en"] as Language[]).map((lng, i) => (
        <span key={lng} className="flex items-center gap-1.5">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => setLanguage(lng)}
            aria-current={language === lng}
            className={`transition-opacity duration-300 ${
              language === lng ? "opacity-100" : "opacity-50 hover:opacity-80"
            }`}
          >
            {lng.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-sans transition-colors duration-500 ${
        scrolled
          ? "bg-solis-paper/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(43,35,32,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top">
          <LogoMark
            className={`text-[24px] transition-colors duration-500 ${
              scrolled ? "text-solis-brown" : "text-solis-cream"
            }`}
          />
        </a>

        <div
          className={`hidden items-center gap-8 md:flex transition-colors duration-500 ${
            scrolled ? "text-solis-ink-soft" : "text-solis-cream/90"
          }`}
        >
          <ul className="font-serif flex gap-8 text-xs tracked-sm uppercase">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative inline-block py-1">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <LangSwitch />
        </div>

        <button
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex flex-col gap-1.5 md:hidden ${
            scrolled ? "text-solis-brown" : "text-solis-cream"
          }`}
        >
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
        </button>
      </nav>

      {open && (
        <ul className="font-serif flex flex-col items-center gap-6 bg-solis-paper px-6 pb-8 pt-2 text-sm tracked-sm uppercase text-solis-ink-soft md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <LangSwitch />
          </li>
        </ul>
      )}
    </header>
  );
}
