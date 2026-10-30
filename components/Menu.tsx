'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { menu } from '@/lib/menu';

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number, focus = false) => {
    setActive(menu[index].id);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const last = menu.length - 1;
    const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[
      e.key
    ];
    if (next === undefined) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <section className="menu section section--dark" id="menu">
      <div className="container">
        <div className="section-head">
          <p className="label label--light" data-reveal>
            <span>02</span> The Menu
          </p>
          <h2 className="display" data-reveal>
            Sip, savour, <em>repeat.</em>
          </h2>
        </div>

        <div className="menu__grid">
          <div className="menu__visual" data-reveal>
            <div className="menu__frame">
              {menu.map((cat) => (
                <Image
                  key={cat.id}
                  className={cat.id === active ? 'is-active' : undefined}
                  src={cat.image.src}
                  alt={cat.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              ))}
            </div>
            <p className="menu__note">Seasonal specials change often — ask us at the counter.</p>
          </div>

          <div className="menu__content">
            <div className="tabs" role="tablist" aria-label="Menu categories">
              {menu.map((cat, i) => (
                <button
                  key={cat.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-controls={`panel-${cat.id}`}
                  aria-selected={cat.id === active}
                  tabIndex={cat.id === active ? 0 : -1}
                  onClick={() => select(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {menu.map((cat) => (
              <div
                key={cat.id}
                className="panel"
                role="tabpanel"
                id={`panel-${cat.id}`}
                aria-labelledby={`tab-${cat.id}`}
                hidden={cat.id !== active}
              >
                <ul className="items">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <h3>
                        {item.name} {item.tag && <span className="tag">{item.tag}</span>}
                      </h3>
                      {item.price && <span className="price">{item.price}</span>}
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
                {cat.link && (
                  <a className="link link--light" href={cat.link.href} target="_blank" rel="noopener">
                    {cat.link.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
