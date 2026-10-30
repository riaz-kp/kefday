import Image from 'next/image';
import Wordmark from './Wordmark';
import { delay, site, unsplash } from '@/lib/site';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__meta container">
        <p className="eyebrow">Areekode · Malappuram · Kerala</p>
        <p className="eyebrow eyebrow--right">Hospitality never sleeps</p>
      </div>

      <div className="hero__grid container">
        <div className="hero__copy">
          <h1 className="hero__title" data-reveal>
            Coffee, music &amp; <em>good&nbsp;days</em>, around the clock.
          </h1>
          <p className="hero__lede" data-reveal style={delay(0.1)}>
            A little café, a lot of happiness. Slow brews, signature plates and live music on Mukkam Road — with
            doors that never close.
          </p>
          <div className="hero__ctas" data-reveal style={delay(0.2)}>
            <a className="btn btn--light" href="#menu">Explore the menu</a>
            <a className="btn btn--ghost" href="#visit">
              Find us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <figure className="hero__media" data-reveal style={delay(0.15)}>
          <div className="arch">
            <div className="plx" data-speed="-0.06">
              <Image
                src={unsplash('1442512595331-e89e73853f31')}
                alt="Coffee being poured over in warm, low light"
                fill
                preload
                sizes="(max-width: 900px) 100vw, 440px"
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
        <Wordmark className="wordmark--hero" />
        <p className="hero__tagline">{site.tagline}</p>
      </div>
    </header>
  );
}
