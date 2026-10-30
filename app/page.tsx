import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Story from '@/components/Story';
import Quote from '@/components/Quote';
import Menu from '@/components/Menu';
import Experiences from '@/components/Experiences';
import LiveClock from '@/components/LiveClock';
import Gallery from '@/components/Gallery';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';
import { site } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: site.name,
  slogan: site.tagline,
  image: '/kefday-logo.jpg',
  telephone: site.phones.reservations.display,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 00:00-23:59',
  servesCuisine: ['Coffee', 'Continental', 'Desserts'],
  sameAs: [site.links.instagram, site.links.facebook],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <Hero />
      <main id="main">
        <Marquee />
        <Story />
        <Quote />
        <Menu />
        <Experiences />
        <LiveClock />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
