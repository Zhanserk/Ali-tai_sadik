// «Бала» — малыш в тақия с үкі, делает первые шаги («тай-тай»). Профиль, смотрит вправо.
// walking: шаг, качание рук и тела (CSS в App.css, класс .bala-walking). Без walking — стоит.

const Leg = ({ cls, x, far }) => (
  <g className={`bala-leg ${cls}`} style={{ transformOrigin: `${x}px 138px` }}>
    <line className={`bl ${far ? 'bl-far' : ''}`} x1={x} y1="138" x2={x + 4} y2="168" />
    <g className="bala-shin" style={{ transformOrigin: `${x + 4}px 168px` }}>
      <line className={`bl ${far ? 'bl-far' : ''}`} x1={x + 4} y1="168" x2={x} y2="198" />
      <rect className="bb" x={x - 8} y="194" width="24" height="12" rx="5" />
      <rect className="bsole" x={x - 8} y="202" width="24" height="4" rx="2" />
    </g>
  </g>
);

export default function Bala({ className = '', walking = false }) {
  return (
    <svg className={`bala ${walking ? 'bala-walking' : ''} ${className}`} viewBox="0 0 160 212" aria-hidden="true">
      <g className="bala-sway" style={{ transformOrigin: '84px 206px' }}>
        <g className="bala-bob">
          {/* дальние рука и нога */}
          <g className="bala-arm bala-arm-b" style={{ transformOrigin: '72px 86px' }}>
            <line className="ba ba-far" x1="72" y1="86" x2="38" y2="68" />
            <circle className="bs" cx="34" cy="66" r="6" />
          </g>
          <Leg cls="bala-lb" x={76} far />
          <Leg cls="bala-lf" x={92} />

          {/* шея и чапан */}
          <rect className="bs-dark" x="78" y="68" width="12" height="12" rx="4" />
          <path className="coat" d="M62 84 C62 74 72 72 84 72 C96 72 106 76 106 86 L110 142 C92 148 70 148 56 142 Z" />
          <path className="trim" d="M56 142 C70 148 92 148 110 142" />
          <path className="trim" d="M84 76 L86 146" />
          <path className="sash" d="M60 112 L108 112 L109 123 L59 123 Z" />
          <path className="gem" d="M70 117.5 l4 -4 l4 4 l-4 4 Z M94 117.5 l4 -4 l4 4 l-4 4 Z" />

          {/* ближняя рука */}
          <g className="bala-arm bala-arm-f" style={{ transformOrigin: '98px 86px' }}>
            <line className="ba" x1="98" y1="86" x2="132" y2="72" />
            <circle className="bs" cx="137" cy="70" r="6" />
          </g>

          {/* голова: тақия и үкі */}
          <g className="bala-head" style={{ transformOrigin: '84px 70px' }}>
            <path className="uki" d="M90 20 L90 3 M90 20 L80 6 M90 20 L100 7" />
            <circle className="gem" cx="90" cy="3" r="3" />
            <circle className="bs" cx="84" cy="48" r="26" />
            <circle className="bs-dark" cx="68" cy="52" r="5.5" />
            <path className="cap" d="M57 46 C56 18 112 18 111 46 Z" />
            <path className="trim" d="M57.5 42 L110.5 42" />
            <circle className="gem" cx="84" cy="30" r="3.2" />
            <circle className="eye" cx="97" cy="50" r="2.6" />
            <circle className="blush" cx="98" cy="58" r="5" />
            <circle className="bs-dark" cx="104" cy="54" r="2.6" />
            <path className="smile" d="M90 62 Q97 68 104 61" />
          </g>
        </g>
      </g>
    </svg>
  );
}
