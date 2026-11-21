"use client";

import React from "react";

interface FiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  totalCount: number;
}

export default function Filters({
  categories,
  activeCategory,
  onSelectCategory,
  totalCount,
}: FiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-14 border-b border-border">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={
                isActive
                  ? "px-5 py-2.5 bg-primary text-on-primary border border-primary text-[11.5px] font-semibold uppercase tracking-[1.38px] transition-colors duration-200"
                  : "px-5 py-2.5 bg-transparent text-foreground/80 border border-border hover:border-primary hover:text-primary text-[11.5px] font-medium uppercase tracking-[1.38px] transition-colors duration-200"
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
      <span className="text-[11.5px] uppercase tracking-[1.38px] text-muted-foreground">
        {totalCount} {totalCount === 1 ? "Project" : "Projects"}
      </span>
    </div>
  );
}
