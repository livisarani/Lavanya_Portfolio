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
    <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-xl">
      <div className="flex flex-wrap items-center gap-space-xs">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={
                isActive
                  ? "px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all"
                  : "px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container font-label-md text-label-md transition-all"
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">
        Showing <strong className="text-primary">{totalCount}</strong> modular{" "}
        {totalCount === 1 ? "architecture" : "architectures"}
      </span>
    </div>
  );
}
