"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { useActiveSection } from "@/utils/hooks";

const NAV_ITEMS = [
  {
    label: "About",
    code: "01",
    icon: "person",
    id: "about",
    href: "/#about",
  },
  {
    label: "Skills",
    code: "02",
    icon: "auto_awesome",
    id: "skills",
    href: "/#skills",
  },
  {
    label: "Projects",
    code: "03",
    icon: "layers",
    id: "projects",
    href: "/#projects",
  },
  {
    label: "Experience",
    code: "04",
    icon: "timeline",
    id: "experience",
    href: "/#experience",
  },
  {
    label: "Contact",
    code: "05",
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
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(6,59,99,0.06)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        {/* Brand Name (Logo removed) */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col group">
            <span className="font-headline-sm text-headline-sm text-primary font-semibold tracking-tight group-hover:text-secondary transition-colors">
              {identity.name}
            </span>
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
              {identity.roleSubtitle}
            </span>
          </Link>
        </div>

        {/* Navigation Dropdown Menu (Resume/CV button and profile icon removed) */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="inline-flex items-center gap-space-sm px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-primary border border-surface-container shadow-xs transition-all font-body-sm text-body-sm font-medium"
          >
            <span className="material-symbols-outlined text-secondary text-lg">
              {currentItem.icon}
            </span>
            <span>{currentItem.label}</span>
            <span
              className={`material-symbols-outlined text-on-surface-variant text-lg transition-transform duration-200 ${
                dropdownOpen ? "rotate-180 text-secondary" : ""
              }`}
            >
              expand_more
            </span>
          </button>

          {/* Dropdown Menu Panel */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_16px_36px_rgba(6,59,99,0.14)] border border-surface-container py-2 z-50">
              <div className="px-space-md py-1.5 border-b border-surface-container/60">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Navigate Section
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
                      className={`flex items-center justify-between px-space-md py-2.5 transition-colors ${
                        isActive
                          ? "bg-surface-container-low text-primary font-semibold border-l-2 border-secondary"
                          : "text-on-surface-variant hover:bg-surface-container-low/60 hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-space-sm">
                        <span
                          className={`material-symbols-outlined text-base ${
                            isActive
                              ? "text-secondary"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-body-sm text-body-sm">
                          {item.label}
                        </span>
                      </div>
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
