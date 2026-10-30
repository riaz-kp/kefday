'use client';

import { useEffect } from 'react';

/** Reveals [data-reveal] elements as they scroll in, and drifts [data-speed] layers for parallax. */
export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = document.querySelectorAll('[data-reveal]');
    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && !reduceMotion) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      revealEls.forEach((el) => io!.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-in'));
    }

    const layers = [...document.querySelectorAll<HTMLElement>('[data-speed]')];
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      layers.forEach((layer) => {
        const rect = layer.parentElement!.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const offset = (rect.top + rect.height / 2 - vh / 2) * parseFloat(layer.dataset.speed!);
        layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    if (layers.length && !reduceMotion) {
      window.addEventListener('scroll', onScroll, { passive: true });
      update();
    }

    return () => {
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
