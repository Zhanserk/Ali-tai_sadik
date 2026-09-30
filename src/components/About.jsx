import { KINDERGARTEN, PHOTOS, VALUES } from '../data/site';
import { HornBand } from './Ornament';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-head">
          <p className="kicker">Балабақша туралы</p>
          <h2>Ата-ана сеніп тапсыратын <em>екінші үй</em></h2>
          <p>
            {KINDERGARTEN.legal} Сарыағаш ауданының Ынтымақ ауылында орналасқан. Әр топтың өз ойын
            бөлмесі мен жеке ұйықтау бөлмесі бар, ал аумағы толық қоршалып, серуенге жабдықталған.
          </p>
          <p>
            Біз үшін ең бастысы — баланың өзін қауіпсіз әрі бақытты сезінуі. Қалғанының бәрі — білім де,
            дағды да, достық та — осы сенімнен басталады.
          </p>
          <figure className="about-photo">
            <img src={PHOTOS.sleep} alt="Жеке төсектері бар ұйықтау бөлмесі" loading="lazy" />
            <figcaption>Әр балаға — жеке төсек</figcaption>
          </figure>
        </div>

        <ol className="values">
          {VALUES.map((v) => (
            <li key={v.n} className="value">
              <span className="value-n">{v.n}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <HornBand />
    </section>
  );
}
