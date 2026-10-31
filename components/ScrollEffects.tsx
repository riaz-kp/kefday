'use client';

import { useEffect } from 'react';

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts a number up from zero, e.g. 0 → 468+. */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? '';
  const start = performance.now();
  const duration = 1600;
  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    el.textContent = `${Math.round(target * easeOutExpo(progress))}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Reveals [data-reveal] elements as they scroll in (fade, masked lines, image wipes, wordmark letters),
 * counts up [data-count] numbers, and drifts [data-speed] layers for parallax.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');

    // Image wipes start fully clipped, and Chrome counts a clipped element as 0% visible,
    // so those are watched through their parent instead.
    const targetsByWatched = new Map<Element, HTMLElement[]>();
    revealEls.forEach((el) => {
      const watched = el.dataset.reveal === 'mask' && el.parentElement ? el.parentElement : el;
      targetsByWatched.set(watched, [...(targetsByWatched.get(watched) ?? []), el]);
    });

    const reveal = (el: HTMLElement) => {
      el.classList.add('is-in');
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
    };

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && !reduceMotion) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            targetsByWatched.get(entry.target)?.forEach(reveal);
            io?.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
      );
      targetsByWatched.forEach((_, watched) => io!.observe(watched));
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
