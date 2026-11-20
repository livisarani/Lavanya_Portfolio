import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { identity } = portfolioData;

  return (
    <footer className="w-full bg-surface-container-low mt-space-3xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-xl pb-space-xl border-b border-surface-container">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                {identity.name}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm text-center md:text-left">
              Architecting citation-grounded AI systems, data-driven predictive
              models, and oceanic-grade full-stack applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="/#experience"
            >
              Experience
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="/#contact"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
              href={identity.socials.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-xl">
                terminal
              </span>
            </a>
            <a
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
              href={identity.socials.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-xl">hub</span>
            </a>
            <a
              aria-label="Email Contact"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
              href={identity.socials.email}
            >
              <span className="material-symbols-outlined text-xl">
                alternate_email
              </span>
            </a>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-sm text-secondary">
              water_drop
            </span>
            <span>System Telemetry Normal • Refracted from Marine Core</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-right">
            © {new Date().getFullYear()} {identity.name}. Engineered with
            oceanic clarity and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
