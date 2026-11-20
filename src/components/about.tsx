import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { identity, about } = portfolioData;

  return (
    <section
      className="w-full py-space-3xl bg-surface-container-lowest shadow-[0_4px_30px_rgba(6,59,99,0.03)]"
      id="about"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Label Header */}
        <div className="flex items-center gap-space-sm mb-space-sm">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            {about.sectionLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          {/* Left 7 Columns: Story & Technical Values */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-space-lg">
              {about.headline}
            </h2>

            <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Technical Values Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-xl">
              {about.values.map((val) => (
                <div
                  key={val.title}
                  className="p-space-md rounded-lg bg-surface-container-low flex flex-col hover:bg-surface-container transition-colors"
                >
                  <div className="flex items-center gap-space-xs text-primary mb-1">
                    <span className="material-symbols-outlined text-secondary">
                      {val.icon}
                    </span>
                    <span className="font-headline-sm text-headline-sm font-semibold">
                      {val.title}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Visual Profile & Quick Facts Cluster */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Profile Card */}
            <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-[0_12px_32px_rgba(6,59,99,0.06)] p-space-lg flex flex-col">
              <div className="flex items-center gap-space-md mb-space-md">
                <img
                  alt={identity.name}
                  className="w-20 h-20 rounded-xl object-cover shadow-sm"
                  src={about.profileCard.portraitUrl}
                />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    {identity.name}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide">
                    {about.profileCard.roleTag}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                    {identity.location} ({identity.timezone})
                  </span>
                </div>
              </div>

              <div className="space-y-space-sm pt-space-xs font-label-md text-label-md">
                {about.profileCard.quickFacts.map((fact, idx) => (
                  <div
                    key={fact.label}
                    className={`flex justify-between py-1 ${
                      idx < about.profileCard.quickFacts.length - 1
                        ? "border-b border-surface-container"
                        : ""
                    }`}
                  >
                    <span className="text-on-surface-variant">
                      {fact.label}
                    </span>
                    <span
                      className={
                        fact.highlight
                          ? "text-secondary font-semibold"
                          : "text-primary font-medium"
                      }
                    >
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Code Snippet Window */}
            <div className="rounded-xl bg-primary text-on-primary p-space-md shadow-md flex flex-col">
              <div className="flex items-center justify-between pb-space-xs text-on-primary-container font-label-sm text-label-sm">
                <span>{about.codeSnippet.filename}</span>
                <span className="text-secondary-fixed">
                  {about.codeSnippet.language}
                </span>
              </div>
              <pre className="font-label-sm text-label-sm overflow-x-auto text-surface-container-high py-space-xs">
                <code>
                  <span className="text-secondary-fixed">async def</span>{" "}
                  <span className="text-primary-fixed">
                    synthesize_citation
                  </span>
                  (ctx, query):
                  {"\n"}
                  {"    "}dense_vec ={" "}
                  <span className="text-secondary-fixed">await</span>{" "}
                  embed(query)
                  {"\n"}
                  {"    "}graph_nodes = ctx.traversal(dense_vec, depth=2)
                  {"\n"}
                  {"    "}
                  <span className="text-secondary-fixed">return</span>{" "}
                  verify_grounding(graph_nodes)
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
