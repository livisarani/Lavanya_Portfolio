import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { identity } = portfolioData;

  return (
    <footer className="w-full bg-background text-foreground">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px] py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-border">
          <div className="flex flex-col">
            <span className="font-display text-[32px] text-foreground mb-2">
              {identity.name}
            </span>
            <p className="text-[14px] font-light text-muted-foreground max-w-sm">
              IT Undergraduate at SLIIT — Building reliable, scalable full-stack
              web and mobile software systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <Link
              className="text-[12px] font-medium uppercase tracking-[1.38px] text-foreground/80 hover:text-primary transition-colors"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="text-[12px] font-medium uppercase tracking-[1.38px] text-foreground/80 hover:text-primary transition-colors"
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              className="text-[12px] font-medium uppercase tracking-[1.38px] text-foreground/80 hover:text-primary transition-colors"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="text-[12px] font-medium uppercase tracking-[1.38px] text-foreground/80 hover:text-primary transition-colors"
              href="/#experience"
            >
              Experience
            </Link>
            <Link
              className="text-[12px] font-medium uppercase tracking-[1.38px] text-foreground/80 hover:text-primary transition-colors"
              href="/#contact"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <a
              aria-label="GitHub Profile"
              className="link-editorial-accent"
              href={identity.socials.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              aria-label="LinkedIn Profile"
              className="link-editorial-accent"
              href={identity.socials.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              aria-label="Email Contact"
              className="link-editorial-accent"
              href={identity.socials.email}
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-muted-foreground font-light">
          <span>
            {identity.location} &nbsp;·&nbsp; {identity.phone}
          </span>
          <p>
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
