// Сцена «Алғашқы қадам»: тұсау кесу → шашу → малыш делает первые шаги, за ним идёт тай.
// Один раз при загрузке: ножницы режут шнур, сыплются шашу, дальше пара идёт по кругу.
import Tai from './Tai';
import Bala from './Bala';
import Landscape from './Landscape';

// Положения шашу вокруг места разреза (детерминированно, без Math.random в рендере)
const SWEETS = Array.from({ length: 18 }, (_, i) => ({
  dx: (i - 8.5) * 20 + ((i * 37) % 11 - 5) * 3,
  delay: 1.5 + (i % 6) * 0.11,
  rot: ((i * 53) % 90) - 45,
  kind: i % 4,
}));

function Scissors() {
  return (
    <svg viewBox="0 0 60 64" aria-hidden="true">
      <g className="sc-a" style={{ transformOrigin: '30px 30px' }}>
        <path d="M42 8 L30 30 L22 58" />
        <circle cx="42" cy="8" r="6" />
      </g>
      <g className="sc-b" style={{ transformOrigin: '30px 30px' }}>
        <path d="M18 8 L30 30 L38 58" />
        <circle cx="18" cy="8" r="6" />
      </g>
      <circle className="sc-pin" cx="30" cy="30" r="3.2" />
    </svg>
  );
}

export default function FirstSteps() {
  return (
    <div className="stage" aria-hidden="true">
      <Landscape />
      <div className="stage-cord">
        <i className="cord cord-l" />
        <i className="cord cord-r" />
      </div>

      <div className="stage-scissors"><Scissors /></div>

      {SWEETS.map((s, i) => (
        <i
          key={i}
          className={`sweet sweet-${s.kind}`}
          style={{ '--dx': `${s.dx}px`, '--d': `${s.delay}s`, '--r': `${s.rot}deg` }}
        />
      ))}

      <div className="stage-foal"><Tai walking className="stage-tai" /></div>
      <div className="stage-bala">
        <span className="stage-bubble">Тай-тай!</span>
        <Bala walking />
      </div>
    </div>
  );
}
