/** The KEFDAY wordmark, vector-traced from the logo. Colour follows `color`. */
export default function Wordmark({ className = '' }: { className?: string }) {
  return <span className={`wordmark ${className}`.trim()} role="img" aria-label="Kefday" />;
}
