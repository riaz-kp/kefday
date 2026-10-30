import Image from 'next/image';
import { delay, unsplash } from '@/lib/site';

const stats = [
  { value: '24/7', label: 'Hospitality that never sleeps' },
  { value: '4 yrs', label: 'Of good days & great coffee' },
  { value: '468+', label: 'Guest ratings on Justdial' },
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
          <div className="story__head">
            <h2 className="display" data-reveal>
              <span className="kef">Kef</span> <span className="phon">/kef/ · noun</span>
              <br />
              the quiet delight of an <em>unhurried</em> moment.
            </h2>
          </div>

          <div className="story__body" data-reveal style={delay(0.1)}>
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
          <figure className="frame frame--tall" data-reveal>
            <div className="plx" data-speed="0.05">
              <Image
                src={unsplash('1495474472287-4d71bcdd2085')}
                alt="Friends raising cups of coffee together"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
          </figure>
          <figure className="frame frame--wide" data-reveal style={delay(0.15)}>
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
            <div key={stat.value} data-reveal style={delay(i * 0.08)}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
