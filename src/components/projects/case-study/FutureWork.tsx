import React from "react";

export default function FutureWork({ futureWork }: { futureWork?: string[] }) {
  if (!futureWork || futureWork.length === 0) return null;

  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="flex items-center gap-space-xs text-primary mb-space-sm">
        <span className="material-symbols-outlined text-secondary">
          rocket_launch
        </span>
        <h3 className="font-headline-sm text-headline-sm font-bold">
          Future Horizon
        </h3>
      </div>
      <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
        {futureWork.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
