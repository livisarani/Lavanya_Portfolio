"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { useActiveSection } from "@/utils/hooks";

const NAV_ITEMS = [
  { label: "About", icon: "person", id: "about", href: "/#about" },
  { label: "Skills", icon: "auto_awesome", id: "skills", href: "/#skills" },
  { label: "Projects", icon: "layers", id: "projects", href: "/#projects" },
  {
    label: "Experience",
    icon: "timeline",
    id: "experience",
    href: "/#experience",
  },
  {
    label: "Contact",
    icon: "alternate_email",
    id: "contact",
    href: "/#contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection([
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { identity } = portfolioData;

  const currentItem =
    NAV_ITEMS.find((item) =>
      isHome
        ? activeSection === item.id
        : item.id === "projects" && pathname.startsWith("/projects")
    ) || NAV_ITEMS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="h-[86px] max-w-content mx-auto px-[23px] md:px-[43px] flex items-center justify-between">
        {/* Editorial Serif Name Lockup (No logo image) */}
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-[24px] md:text-[30px] leading-tight text-foreground tracking-normal group-hover:text-primary transition-colors duration-500 ease-editorial">
            {identity.name}
          </span>
        </Link>

        {/* Clean Section Dropdown Menu (No numbers, no profile icon, no Resume/CV button) */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-transparent hover:border-primary text-foreground border border-border transition-colors duration-300 text-[12px] font-medium uppercase tracking-[1.38px]"
          >
            <span>{currentItem.label}</span>
            <span
              className={`material-symbols-outlined text-primary text-base transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-background border border-border py-2 z-50">
              <div className="px-5 py-2 border-b border-border">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[1.44px]">
                  Navigate
                </span>
              </div>
              <nav className="flex flex-col py-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = isHome
                    ? activeSection === item.id
                    : item.id === "projects" &&
                      pathname.startsWith("/projects");

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`flex items-center gap-3 px-5 py-3 text-[12px] font-medium uppercase tracking-[1.38px] transition-colors duration-200 ${
                        isActive
                          ? "text-primary bg-surface-elevated border-l-2 border-primary"
                          : "text-foreground/85 hover:text-primary hover:bg-surface-elevated"
                      }`}
                    >
                      <span className="material-symbols-outlined text-base text-primary/80">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
