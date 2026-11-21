import React from "react";

export default function FutureWork({ futureWork }: { futureWork?: string[] }) {
  if (!futureWork || futureWork.length === 0) return null;

  return (
    <div className="p-8 border border-border bg-surface-elevated">
      <h3 className="font-display text-[26px] text-foreground mb-4">
        Future Horizon
      </h3>
      <ul className="space-y-3 text-[14px] leading-[25px] font-light text-foreground/80 list-disc pl-5">
        {futureWork.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
