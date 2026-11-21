import React from "react";

export default function Learnings({ learnings }: { learnings?: string[] }) {
  if (!learnings || learnings.length === 0) return null;

  return (
    <div className="p-8 border border-border bg-surface-elevated">
      <h3 className="font-display text-[26px] text-foreground mb-4">
        Engineering Learnings
      </h3>
      <ul className="space-y-3 text-[14px] leading-[25px] font-light text-foreground/80 list-disc pl-5">
        {learnings.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
