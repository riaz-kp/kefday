'use client';

import { useEffect, useRef, useState } from 'react';
import Wordmark from './Wordmark';
import { navLinks, site } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // solid on scroll, hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 600 || y < lastY.current - 4) setHidden(false);
      else if (y > lastY.current + 4) setHidden(true);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // the small wordmark takes over once the big hero wordmark scrolls away
  useEffect(() => {
    const heroMark = document.querySelector('.wordmark--hero');
    if (!heroMark) return;
    const io = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: '-72px 0px 0px 0px' },
    );
    io.observe(heroMark);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const navClass = [
    'nav',
    scrolled && 'is-scrolled',
    (pastHero || open) && 'is-past',
    hidden && !open && 'is-hidden',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav className={navClass} aria-label="Main">
        <div className="nav__inner container">
          <div className="nav__left">
            <a className="nav__brand" href="#top" aria-label="Kefday — home">
              <Wordmark />
            </a>
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              Open now · 24/7
            </span>
          </div>
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav__actions">
            <a className="btn btn--light btn--sm" href={site.links.reserve} target="_blank" rel="noopener">
              Reserve
            </a>
            <button
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className="mobile-menu"
        id="mobile-menu"
        hidden={!open}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn--light" href={site.links.whatsapp} target="_blank" rel="noopener">
          Reserve on WhatsApp
        </a>
        <p className="mobile-menu__meta">
          <span className="status__dot" aria-hidden="true" /> Open 24/7 · {site.address.street}, {site.address.locality}
        </p>
      </div>
    </>
  );
}
