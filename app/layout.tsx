import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Poppins } from 'next/font/google';
import Script from 'next/script';
import { site } from '@/lib/site';
import './globals.css';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const title = `${site.name} — ${site.tagline} · Areekode`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title,
  description: site.description,
  openGraph: {
    type: 'website',
    title: `${site.name} — ${site.tagline}`,
    description: 'Coffee, music and good days, around the clock. Mukkam Road, Areekode, Malappuram.',
  },
};

export const viewport: Viewport = {
  themeColor: '#2A2017',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        {/* Lets CSS hide scroll-reveal elements only when JS will reveal them */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        {children}
      </body>
    </html>
  );
}
