import { useState } from 'react';
import { DOCS, DOC_CATEGORIES, DOC_YEARS } from '../data/site';

const ALL = 'all';

export default function Docs() {
  const [year, setYear] = useState(DOC_YEARS[0]);
  const [cat, setCat] = useState(ALL);
  const [query, setQuery] = useState('');

  const byYear = DOCS
    .map((doc) => ({ ...doc, url: doc.files[year] || doc.files.always }))
    .filter((doc) => doc.url);

  const inCat = (doc, c) => c.kinds.includes(doc.kind);
  const q = query.trim().toLowerCase();
  const list = byYear.filter((doc) => {
    const c = DOC_CATEGORIES.find((x) => x.key === cat);
    return (!c || inCat(doc, c)) && (!q || `${doc.title} ${doc.kind}`.toLowerCase().includes(q));
  });

  return (
    <section className="docs" id="docs">
      <div className="wrap">
        <div className="section-title">
          <p className="kicker">Ашықтық</p>
          <h2>Құжаттар мен <em>жоспарлар</em></h2>
          <p>Балабақша жұмысына қатысты бекітілген құжаттар. Файлды ашу үшін карточканы басыңыз.</p>
        </div>

        <div className="year-tabs" role="tablist" aria-label="Оқу жылы">
          {DOC_YEARS.map((y) => (
            <button
              key={y}
              role="tab"
              aria-selected={y === year}
              className={y === year ? 'is-active' : ''}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="doc-tools">
          <div className="doc-cats" aria-label="Санат">
            <button type="button" className={cat === ALL ? 'is-on' : ''} onClick={() => setCat(ALL)}>
              Барлығы <b>{byYear.length}</b>
            </button>
            {DOC_CATEGORIES.map((c) => {
              const n = byYear.filter((doc) => inCat(doc, c)).length;
              return n === 0 ? null : (
                <button type="button" key={c.key} className={cat === c.key ? 'is-on' : ''} onClick={() => setCat(c.key)}>
                  {c.title} <b>{n}</b>
                </button>
              );
            })}
          </div>
          <input
            type="search"
            className="doc-search"
            placeholder="Құжатты іздеу…"
            aria-label="Құжатты іздеу"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {list.length === 0 ? (
          <p className="doc-empty">Ештеңе табылмады. Іздеуді немесе санатты өзгертіп көріңіз.</p>
        ) : (
          <div className="doc-grid">
            {list.map((doc) => (
              <a key={doc.title} className="doc" href={doc.url} target="_blank" rel="noreferrer">
                <span className="doc-kind">{doc.kind}</span>
                <h3>{doc.title}</h3>
                <span className="doc-open">{doc.url.endsWith('.pdf') ? 'PDF ашу ↗' : 'Excel жүктеу ↗'}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
