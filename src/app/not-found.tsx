import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full min-h-[75vh] pt-[86px] flex items-center justify-center bg-background">
      <div className="max-w-lg mx-auto px-[23px] text-center">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-4">
          404 / Page Not Found
        </span>
        <h1 className="font-display text-[48px] leading-[1.15] text-foreground mb-4">
          Coordinate Not Found.
        </h1>
        <p className="text-[15px] leading-[27px] font-light text-muted-foreground mb-10">
          The requested project or case study does not exist in the active
          registry.
        </p>
        <Link href="/" className="btn-editorial-outline-sm">
          <span aria-hidden="true">←</span>
          <span>Return Home</span>
        </Link>
      </div>
    </section>
  );
}
