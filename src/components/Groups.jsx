import { GROUPS } from '../data/site';

export default function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap">
        <div className="section-title">
          <p className="kicker">Топтар</p>
          <h2>Жасына сай — <em>өз әлемі</em></h2>
          <p>Әр топ баланың жас ерекшелігіне қарай құрылған. Сабақ пен демалыс ара-салмағы әр жасқа сай ойластырылған.</p>
        </div>

        <div className="group-list">
          {GROUPS.map((g, i) => (
            <article key={g.name} className={`group group-${g.color} ${i % 2 ? 'is-flipped' : ''}`}>
              <div className="group-photo">
                <img src={g.photo} alt={g.name} loading="lazy" />
                <span className="group-age">{g.age}</span>
              </div>
              <div className="group-body">
                <p className="group-level">{g.level}</p>
                <h3>{g.name}</h3>
                <p>{g.text}</p>
                <ul>
                  {g.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
