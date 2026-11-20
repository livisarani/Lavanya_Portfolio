import React from "react";

export default function Learnings({ learnings }: { learnings?: string[] }) {
  if (!learnings || learnings.length === 0) return null;

  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="flex items-center gap-space-xs text-primary mb-space-sm">
        <span className="material-symbols-outlined text-secondary">
          lightbulb
        </span>
        <h3 className="font-headline-sm text-headline-sm font-bold">
          Engineering Learnings
        </h3>
      </div>
      <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
        {learnings.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
