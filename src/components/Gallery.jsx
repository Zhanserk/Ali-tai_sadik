import { useEffect, useState } from 'react';
import { GALLERY } from '../data/site';

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % GALLERY.length);
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-title">
          <p className="kicker">Суреттер</p>
          <h2><em>Өз көзіңізбен</em> көріңіз</h2>
        </div>
        <div className="mosaic">
          {GALLERY.map((g, i) => (
            <button key={g.src} className={`tile ${g.wide ? 'tile-wide' : ''}`} onClick={() => setActive(i)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span>{g.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[active].src} alt={GALLERY[active].caption} />
            <figcaption>{GALLERY[active].caption}</figcaption>
          </figure>
          <button className="lb-close" aria-label="Жабу" onClick={() => setActive(null)}>×</button>
        </div>
      )}
    </section>
  );
}
