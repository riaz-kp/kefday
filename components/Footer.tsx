import Wordmark from './Wordmark';
import CurrentYear from './CurrentYear';
import { site } from '@/lib/site';

const social = [
  { href: site.links.instagram, label: 'Instagram' },
  { href: site.links.facebook, label: 'Facebook' },
  { href: site.links.kefcake, label: 'Kefcake' },
  { href: site.links.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__cta">
            A little café,
            <br />
            <em>a lot of happiness.</em>
          </p>
          <nav className="footer__links" aria-label="Social">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener">
                {s.label} ↗
              </a>
            ))}
          </nav>
        </div>
        <Wordmark className="wordmark--footer" />
        <div className="footer__bottom">
          <p>
            © <CurrentYear /> {site.name}, {site.address.locality}
          </p>
          <p>{site.tagline}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
