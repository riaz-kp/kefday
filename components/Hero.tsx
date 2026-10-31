import Image from 'next/image';
import Lines from './Lines';
import Wordmark from './Wordmark';
import { site, unsplash } from '@/lib/site';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grid container">
        <div className="hero__copy">
          <h1 className="hero__title">
            <Lines lines={['Coffee, music &', <em key="em">good days,</em>, 'around the clock.']} />
          </h1>
          <p className="hero__lede">
            A little café, a lot of happiness. Slow brews, signature plates and live music on Mukkam Road — with
            doors that never close.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--light" href="#menu">
              Explore the menu <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#visit">
              Find us
            </a>
          </div>
        </div>

        {/* Arch on desktop, full-bleed backdrop on phones and tablets */}
        <figure className="hero__media">
          <div className="hero__frame">
            <div className="plx" data-speed="-0.06">
              <Image
                src={unsplash('1442512595331-e89e73853f31', 2000)}
                alt="Coffee being poured over in warm, low light"
                fill
                preload
                sizes="(max-width: 900px) 180vw, 830px"
              />
            </div>
          </div>
          <div className="badge" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#badge-circle" textLength="488">
                  SIP · SAVOUR · REPEAT · OPEN 24/7 ·{' '}
                </textPath>
              </text>
            </svg>
            <span className="badge__core">
              24<small>/7</small>
            </span>
          </div>
        </figure>
      </div>

      <div className="hero__mark container">
        <Wordmark className="wordmark--hero" animate="intro" />
        <div className="hero__foot">
          <a className="scroll-cue" href="#story">
            Scroll
            <span className="scroll-cue__line" aria-hidden="true" />
          </a>
          <p className="hero__tagline">{site.tagline}</p>
        </div>
      </div>
    </header>
  );
}
