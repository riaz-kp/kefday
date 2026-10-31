import type { CSSProperties } from 'react';

export const site = {
  name: 'Kefday Café',
  tagline: 'A Culture of Happiness',
  description:
    'Kefday is a 24/7 café on Mukkam Road, Areekode. Slow coffee, signature plates, Kefcake desserts, live music and celebrations — a culture of happiness.',
  address: {
    street: 'Mukkam Road, opp. Mamatha Bakery',
    locality: 'Areekode',
    district: 'Malappuram',
    region: 'Kerala',
    postalCode: '673639',
  },
  phones: {
    reservations: { display: '+91 96564 03757', tel: '+919656403757' },
    celebrations: { display: '+91 85904 94901', tel: '+918590494901' },
  },
  links: {
    whatsapp: 'https://wa.me/919656403757',
    reserve: "https://wa.me/919656403757?text=Hi%20Kefday!%20I'd%20like%20to%20reserve%20a%20table.",
    instagram: 'https://www.instagram.com/kefday_cafe/',
    facebook: 'https://www.facebook.com/kefday/',
    kefcake: 'https://www.instagram.com/kefcake_/',
    directions: 'https://share.google/KJVTZVDueJrrqcq7f',
    mapEmbed: 'https://www.google.com/maps?q=Kefday%20Cafe%2C%20Mukkam%20Road%2C%20Areekode%2C%20Kerala&output=embed',
  },
};

export const navLinks = [
  { href: '#story', label: 'Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
];

/** Stock placeholder photos — replace with Kefday's own photography in /public. */
export const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;

/** Stagger delay for scroll reveals. */
export const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties;
