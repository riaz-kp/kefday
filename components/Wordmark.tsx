import type { CSSProperties } from 'react';
import { WORDMARK_LETTERS, WORDMARK_VIEWBOX } from '@/lib/wordmark';

/** Letter shapes, rendered once per page and reused by every <Wordmark>. */
export function WordmarkDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
        {WORDMARK_LETTERS.map((letter) => (
          <path key={letter.id} id={`wm-${letter.id}`} d={letter.d} fillRule="evenodd" />
        ))}
      </defs>
    </svg>
  );
}

type Props = {
  className?: string;
  /** 'intro' rises letter by letter on page load, 'reveal' when scrolled into view. */
  animate?: 'intro' | 'reveal';
};

/** The KEFDAY wordmark, traced from the logo. Colour follows `color`. */
export default function Wordmark({ className = '', animate }: Props) {
  return (
    <svg
      className={`wordmark ${className}`.trim()}
      viewBox={WORDMARK_VIEWBOX}
      fill="currentColor"
      role="img"
      aria-label="Kefday"
      data-anim={animate}
      {...(animate === 'reveal' ? { 'data-reveal': 'wordmark' } : {})}
    >
      {WORDMARK_LETTERS.map((letter, i) => (
        <use key={letter.id} href={`#wm-${letter.id}`} className="wm-l" style={{ '--i': i } as CSSProperties} />
      ))}
    </svg>
  );
}
