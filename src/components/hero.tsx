"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { triggerCvViewAndDownload } from "./CvModal";

export default function Hero() {
  const { identity } = portfolioData;

  return (
    <section className="relative w-full min-h-[92vh] pt-[86px] flex items-center justify-center overflow-hidden bg-background">
      {/* Moody Dark Editorial Background Texture (mirrors desktop-1440-fold.png) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(225, 168, 122, 0.08) 0%, rgba(0, 0, 0, 0.85) 68%)",
          }}
        />
      </div>

      {/* Centered Editorial Hero Composition */}
      <div className="relative z-10 max-w-content mx-auto px-[23px] md:px-[43px] py-20 text-center flex flex-col items-center">
        <p className="text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-6">
          {identity.name} &nbsp;·&nbsp; {identity.availabilityStatus}
        </p>

        <h1 className="font-display text-[48px] sm:text-[68px] md:text-[88px] lg:text-[109.3px] leading-[1.14] font-normal text-foreground max-w-[1180px] mb-12">
          Full-Stack Developer
          <br />
          &amp; Software Engineer.
        </h1>

        {/* Dual Action Row matching desktop-1440-fold.png */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full sm:w-auto">
          <a href="#projects" className="btn-editorial-outline w-full sm:w-auto">
            <span>Explore My Work</span>
          </a>

          <button
            type="button"
            onClick={triggerCvViewAndDownload}
            className="btn-editorial-ghost group"
          >
            <span className="w-[56px] h-[56px] rounded-full bg-foreground text-background flex items-center justify-center transition-transform duration-300 ease-editorial group-hover:scale-105">
              <span className="material-symbols-outlined text-[22px]">
                description
              </span>
            </span>
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* Bottom Hairline Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
    </section>
  );
}
