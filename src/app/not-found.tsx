import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full py-space-3xl flex items-center justify-center">
      <div className="max-w-lg mx-auto px-margin text-center">
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm font-semibold mb-space-md">
          <span>404 / TELEMETRY NODE UNREACHABLE</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
          Coordinate Not Found
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl">
          The requested architecture node or case study does not exist in the
          active registry.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg"
        >
          <span className="material-symbols-outlined text-base">
            arrow_back
          </span>
          <span>Return to Primary Substrate</span>
        </Link>
      </div>
    </section>
  );
}
