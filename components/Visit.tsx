import Lines from './Lines';
import { delay, site } from '@/lib/site';

export default function Visit() {
  const { address, phones, links } = site;
  return (
    <section className="visit section section--dark" id="visit">
      <div className="container visit__grid">
        <div className="visit__info">
          <p className="label label--light" data-reveal>
            <span>05</span> Visit us
          </p>
          <h2 className="display" data-reveal="lines">
            <Lines lines={['Come as you are.', <em key="em">Stay a while.</em>]} />
          </h2>

          <div className="visit__blocks">
            <div data-reveal>
              <h3>Address</h3>
              <p>
                {site.name}
                <br />
                {address.street}
                <br />
                {address.locality}, {address.district}
                <br />
                {address.region} {address.postalCode}
              </p>
            </div>
            <div data-reveal style={delay(0.08)}>
              <h3>Hours</h3>
              <p>
                Open 24 hours
                <br />
                Seven days a week
              </p>
            </div>
            <div data-reveal style={delay(0.16)}>
              <h3>Reservations</h3>
              <p>
                <a href={`tel:${phones.reservations.tel}`}>{phones.reservations.display}</a>
                <br />
                <span className="muted">Call or WhatsApp</span>
              </p>
            </div>
            <div data-reveal style={delay(0.24)}>
              <h3>Celebrations</h3>
              <p>
                <a href={`tel:${phones.celebrations.tel}`}>{phones.celebrations.display}</a>
                <br />
                <span className="muted">Parties &amp; events</span>
              </p>
            </div>
          </div>

          <div className="visit__ctas" data-reveal>
            <a className="btn btn--light" href={links.directions} target="_blank" rel="noopener">
              Get directions <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn--ghost" href={links.whatsapp} target="_blank" rel="noopener">
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="visit__map" data-reveal="mask" style={delay(0.1)}>
          <iframe
            title="Map showing Kefday Café in Areekode"
            src={links.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
