import { useEffect, useState } from 'react';
import { KINDERGARTEN, NAV } from '../data/site';
import Tai from './Tai';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="wrap topbar-in">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Tai /></span>
          <span className="brand-text">
            <b>{KINDERGARTEN.short}</b>
            <small>бөбекжай балабақшасы</small>
          </span>
        </a>

        <nav className="nav" aria-label="Негізгі мәзір">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-sun btn-sm topbar-cta">Орын сұрау</a>

        <button
          className="burger"
          aria-label="Мәзірді ашу"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
