'use client';

import { useEffect, useState } from 'react';

const timeFmt = new Intl.DateTimeFormat('en-IN', {
  timeZone: 'Asia/Kolkata',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});
const hourFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false });

const moods: [from: number, to: number, mood: string][] = [
  [0, 5, 'Midnight cravings?'],
  [5, 11, 'Morning brew o’clock'],
  [11, 16, 'Lunch is on'],
  [16, 19, 'Golden hour, cold coffee'],
  [19, 24, 'Music, mojitos & friends'],
];

function read() {
  const now = new Date();
  const hour = parseInt(hourFmt.format(now), 10) % 24;
  return {
    time: timeFmt.format(now).replace(/\s?(am|pm)/i, (m) => m.toUpperCase()),
    mood: moods.find(([from, to]) => hour >= from && hour < to)?.[2],
  };
}

/** Current time in Areekode (IST). Renders a placeholder on the server, then ticks on the client. */
export default function LiveClock() {
  const [now, setNow] = useState<ReturnType<typeof read> | null>(null);

  useEffect(() => {
    setNow(read());
    const id = setInterval(() => setNow(read()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="clock section section--dark" aria-label="Opening hours">
      <div className="container clock__inner" data-reveal>
        <p className="label label--light">Right now in Areekode</p>
        <p className="clock__time">{now?.time ?? '—'}</p>
        <p className="clock__line">
          {now?.mood ?? 'Whenever you’re reading this'} — <em>we’re open.</em>
        </p>
      </div>
    </section>
  );
}
