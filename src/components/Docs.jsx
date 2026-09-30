import { useState } from 'react';
import { DOCS, DOC_YEARS } from '../data/site';

export default function Docs() {
  const [year, setYear] = useState(DOC_YEARS[0]);

  const list = DOCS
    .map((doc) => ({ ...doc, url: doc.files[year] || doc.files.always }))
    .filter((doc) => doc.url);

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

        <div className="doc-grid">
          {list.map((doc) => (
            <a key={doc.title} className="doc" href={doc.url} target="_blank" rel="noreferrer">
              <span className="doc-kind">{doc.kind}</span>
              <h3>{doc.title}</h3>
              <span className="doc-open">PDF ашу ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
