'use client';

import { useEffect, useState } from 'react';

/** The page is statically built, so the year is refreshed in the browser. */
export default function CurrentYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
