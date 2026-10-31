import Image from 'next/image';
import Lines from './Lines';
import { delay, unsplash } from '@/lib/site';

const stats = [
  { value: '24/7', label: 'Hospitality that never sleeps' },
  { value: '4', suffix: ' yrs', count: 4, label: 'Of good days & great coffee' },
  { value: '468', suffix: '+', count: 468, label: 'Guest ratings on Justdial' },
  { value: 'Kefcake', label: 'Our very own cake label' },
];

export default function Story() {
  return (
    <section className="story section section--cream" id="story">
      <div className="container">
        <p className="label" data-reveal>
          <span>01</span> Our Story
        </p>

        <div className="story__grid">
          <h2 className="display story__head" data-reveal="lines">
            <Lines
              lines={[
                <>
                  <span className="kef">Kef</span> <span className="phon">/kef/ · noun</span>
                </>,
                'the quiet delight',
                <>
                  of an <em>unhurried</em> moment.
                </>,
              ]}
            />
          </h2>

          <div className="story__body" data-reveal style={delay(0.15)}>
            <p className="lead">Kefday began with a simple belief — that a café can be a small, daily ritual of happiness.</p>
            <p>
              For four years, Areekode has gathered at our tables: for the first coffee at dawn, wings at midnight,
              and the songs in between. We brew with care, cook with generosity, and keep the lights on for whoever
              walks in next. Every cup, every plate, every evening of live music is our way of keeping a culture of
              happiness alive.
            </p>
            <a className="link" href="#experiences">
              More than coffee <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="story__images">
          <figure className="frame frame--tall" data-reveal="mask">
            <div className="plx" data-speed="0.05">
              <Image
                src={unsplash('1495474472287-4d71bcdd2085')}
                alt="Friends raising cups of coffee together"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
          </figure>
          <figure className="frame frame--wide" data-reveal="mask" style={delay(0.15)}>
            <div className="plx" data-speed="-0.04">
              <Image
                src={unsplash('1453614512568-c4024d13c247')}
                alt="A warm café counter under pendant lights"
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
              />
            </div>
            <figcaption>Mukkam Road, Areekode</figcaption>
          </figure>
        </div>

        <dl className="stats">
          {stats.map((stat, i) => (
            <div key={stat.label} data-reveal style={delay(i * 0.08)}>
              <dt data-count={stat.count} data-suffix={stat.suffix}>
                {stat.value}
                {stat.suffix}
              </dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
