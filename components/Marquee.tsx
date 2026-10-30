import { Fragment } from 'react';

const words = ['Slow Coffee', 'Live Music', 'Kefcake', 'Celebrations', 'Club Sandwiches', 'Virgin Mojitos', 'Open 24/7'];

export default function Marquee() {
  // rendered twice so the loop is seamless
  const run = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {run.map((word, i) => (
          <Fragment key={i}>
            <span>{word}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
