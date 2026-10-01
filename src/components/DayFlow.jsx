import { DAY } from '../data/site';
import { Wave } from './Ornament';

export default function DayFlow() {
  return (
    <section className="day" id="day">
      <Wave className="wave-green" flip />
      <div className="day-in">
        <div className="wrap">
          <div className="section-title light">
            <p className="kicker">Күн тәртібі</p>
            <h2>Балаңыздың бір күні <em>қалай өтеді?</em></h2>
            <p>Тұрақты күн тәртібі баланы тыныштандырады: ол келесі не болатынын біледі және өзін сенімді сезінеді.</p>
          </div>

          <ol className="timeline">
            {DAY.map(([time, title, text]) => (
              <li key={time}>
                <time>{time}</time>
                <div>
                  <b>{title}</b>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="day-note">* Бекітілген «Күн тәртібі, 2024–2025 оқу жылы» құжаты бойынша. Толық нұсқасы — «Құжаттар» бөлімінде.</p>
        </div>
      </div>
      <Wave className="wave-green" />
    </section>
  );
}
