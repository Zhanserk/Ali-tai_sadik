import { KINDERGARTEN, NAV } from '../data/site';
import { HornBand } from './Ornament';

export default function Footer() {
  return (
    <footer className="footer">
      <HornBand className="horn-band-footer" />
      <div className="wrap footer-in">
        <div>
          <b className="footer-name">{KINDERGARTEN.short}</b>
          <p>{KINDERGARTEN.legal}</p>
          <p>{KINDERGARTEN.address}</p>
        </div>
        <nav className="footer-nav" aria-label="Төменгі мәзір">
          {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
      <p className="wrap footer-copy">© {new Date().getFullYear()} «{KINDERGARTEN.short}». Барлық құқық қорғалған.</p>
    </footer>
  );
}
