import { KINDERGARTEN } from '../data/site';
import { Shanyrak } from './Ornament';

export default function Contact() {
  const wa = KINDERGARTEN.whatsapp
    ? `https://wa.me/${KINDERGARTEN.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Сәлеметсіз бе! Балабақшада орын туралы білгім келеді.')}`
    : null;
  const tel = KINDERGARTEN.phone ? `tel:${KINDERGARTEN.phone.replace(/[^\d+]/g, '')}` : null;

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-card">
          <Shanyrak className="contact-shanyrak" />
          <div className="contact-copy">
            <p className="kicker">Байланыс</p>
            <h2>Келіңіз, танысайық!</h2>
            <p>
              Балабақшаны аралап, тәрбиешілермен сөйлесіп, балаңызға ұнай ма — өзіңіз көріңіз.
              Алдын ала қоңырау шалсаңыз, сізді күтіп аламыз.
            </p>
            <div className="contact-actions">
              {wa && <a className="btn btn-sun" href={wa} target="_blank" rel="noreferrer">WhatsApp-қа жазу</a>}
              {tel && <a className="btn btn-light" href={tel}>Қоңырау шалу</a>}
            </div>
          </div>
          <dl className="contact-list">
            <div><dt>Мекенжай</dt><dd><a href={KINDERGARTEN.mapUrl} target="_blank" rel="noreferrer">{KINDERGARTEN.address}</a></dd></div>
            <div><dt>Жұмыс уақыты</dt><dd>{KINDERGARTEN.hours}</dd></div>
            {KINDERGARTEN.phone && <div><dt>Телефон</dt><dd>{KINDERGARTEN.phone}</dd></div>}
          </dl>
        </div>
      </div>
    </section>
  );
}
