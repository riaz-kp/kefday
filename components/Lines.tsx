import type { CSSProperties, ReactNode } from 'react';

/** Masked lines that slide up one after another (on load in the hero, on scroll elsewhere). */
export default function Lines({ lines }: { lines: ReactNode[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <span style={{ '--i': i } as CSSProperties}>{line}</span>
        </span>
      ))}
    </>
  );
}
