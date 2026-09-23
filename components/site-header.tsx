"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sitePath } from "../lib/site";

const navItems = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Studio", "/studio"],
  ["About", "/about"],
  ["Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader({ activePath }: { activePath?: string }) {
  const pathname = usePathname();
  const currentPath = activePath ?? pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath("/")} aria-label="Cine Glam home">
        CINE GLAM
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={sitePath(href)} key={href} aria-current={currentPath === href ? "page" : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <a className="button button--ink header-cta" href={sitePath("/contact")}>
        Start a Project <span aria-hidden="true">→</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-toggle__line" />
        <span className="menu-toggle__line" />
      </button>
      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        <div className="mobile-menu__topline">
          <span className="eyebrow">Navigation / 00</span>
          <button className="mobile-menu__close" type="button" onClick={() => setMenuOpen(false)}>
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <a href={sitePath(href)} key={href} onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button--ink mobile-menu__cta" href={sitePath("/contact")} onClick={() => setMenuOpen(false)}>
          Start a Project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
