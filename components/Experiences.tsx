import Image from 'next/image';
import Lines from './Lines';
import { delay, site, unsplash } from '@/lib/site';

const experiences = [
  {
    num: 'i.',
    title: 'Live music & artists',
    body: 'Acoustic evenings, open mics and the local artists who fill our room with unforgettable music moments.',
    image: { src: unsplash('1511671782779-c97d3d27a1d4'), alt: 'A vintage microphone on stage under warm lights' },
  },
  {
    num: 'ii.',
    title: 'Celebrate in style',
    body: 'Birthdays, bride- and groom-to-be parties, anniversaries — we set the table, you bring the people.',
    image: { src: unsplash('1530103862676-de8c9debad1d'), alt: 'Colourful balloons for a celebration' },
    link: { href: `tel:${site.phones.celebrations.tel}`, label: 'Book a celebration', arrow: '→', external: false },
  },
  {
    num: 'iii.',
    title: 'Kefcake',
    body: 'Our own cake label. Signature bakes by the slice and custom cakes made for your happiest days.',
    image: { src: unsplash('1606313564200-e75d5e30476c'), alt: 'A slice of layered cake' },
    link: { href: site.links.kefcake, label: '@kefcake_', arrow: '↗', external: true },
  },
  {
    num: 'iv.',
    title: 'Open 24/7',
    body: 'Hospitality never sleeps. Sunrise espresso or 3 a.m. cravings — the kitchen is always on.',
    image: { src: unsplash('1461023058943-07fcbe16d735'), alt: 'An iced coffee glowing in low evening light' },
  },
];

export default function Experiences() {
  return (
    <section className="experiences section section--cream" id="experiences">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="label" data-reveal>
              <span>03</span> More than coffee
            </p>
            <h2 className="display" data-reveal="lines">
              <Lines lines={['Moments worth', <><em>staying</em> for.</>]} />
            </h2>
          </div>
          <p className="section-head__aside" data-reveal style={delay(0.1)}>
            Great coffee is only the beginning. Kefday is where artists play, friends celebrate and the night shift
            finds its people.
          </p>
        </div>

        <div className="cards">
          {experiences.map((exp, i) => {
            const stagger = delay(i % 2 ? 0.12 : 0);
            return (
              <article key={exp.title} className={i % 2 ? 'card card--offset' : 'card'}>
                <figure data-reveal="mask" style={stagger}>
                  <div className="zoom">
                    <Image src={exp.image.src} alt={exp.image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" />
                  </div>
                </figure>
                <div className="card__body" data-reveal style={delay(i % 2 ? 0.27 : 0.15)}>
                  <span className="card__num">{exp.num}</span>
                  <h3>{exp.title}</h3>
                  <p>{exp.body}</p>
                  {exp.link && (
                    <a
                      className="link"
                      href={exp.link.href}
                      {...(exp.link.external ? { target: '_blank', rel: 'noopener' } : {})}
                    >
                      {exp.link.label} <span aria-hidden="true">{exp.link.arrow}</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
