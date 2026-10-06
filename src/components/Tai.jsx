// «Тай» — жеребёнок, символ Али-тай. Первые шаги ребёнка в казахской традиции — «тай-тай» и «тұсау кесер».
// walking: ноги шагают по диагонали (CSS в App.css). still: застывший шаг для логотипа.

const Leg = ({ cls, x, y = 92, dx = 2, far = false }) => (
  <g className={`tai-leg ${cls} ${far ? 'tai-far' : ''}`} style={{ transformOrigin: `${x}px ${y}px` }}>
    <line className="l" x1={x} y1={y} x2={x + dx} y2={y + 30} />
    <g className="tai-shin" style={{ transformOrigin: `${x + dx}px ${y + 30}px` }}>
      <line className="l" x1={x + dx} y1={y + 30} x2={x} y2={y + 62} />
      <rect className="m" x={x - 6} y={y + 59} width="12" height="8" rx="3" />
    </g>
  </g>
);

export default function Tai({ className = '', walking = false }) {
  return (
    <svg className={`tai ${walking ? 'tai-walking' : 'tai-still'} ${className}`} viewBox="0 0 220 170" aria-hidden="true">
      <g className="tai-bob">
        {/* дальние ноги */}
        <Leg cls="tai-fb" x={106} far />
        <Leg cls="tai-hb" x={72} dx={-6} far />

        {/* хвост */}
        <g className="tai-tail" style={{ transformOrigin: '48px 68px' }}>
          <path className="m-stroke" d="M48 68 C30 62 22 76 28 98" />
          <circle className="m" cx="28" cy="100" r="6.5" />
        </g>

        {/* грива */}
        <g className="m">
          <circle cx="108" cy="58" r="6.5" /><circle cx="117" cy="47" r="6.5" /><circle cx="126" cy="37" r="6.5" />
          <circle cx="134" cy="27" r="6.5" /><circle cx="143" cy="17" r="6" /><circle cx="156" cy="15" r="5" />
        </g>

        {/* туловище */}
        <path className="b" d="M44 74 C44 58 70 56 100 56 C118 56 128 60 134 70 C138 84 128 100 106 102 C84 104 70 104 56 98 C46 92 44 84 44 74Z" />
        {/* шея и голова */}
        <path className="b" d="M110 68 C122 56 132 42 140 28 C143 22 150 19 156 22 L190 46 C198 52 198 62 190 65 C184 67 178 64 174 60 L160 50 C152 56 146 66 142 76 C138 90 130 96 120 98 L100 90Z" />
        <path className="b" d="M148 23 L151 7 L161 23Z" />
        <circle className="eye" cx="164" cy="38" r="2.8" />

        {/* қошқар мүйіз на боку */}
        <g className="horn" transform="translate(66 64) scale(.42)">
          <path d="M60 56 C60 34 44 22 30 22 C18 22 12 32 18 40 C23 47 34 44 34 36 C34 31 28 30 26 33 M60 56 C60 34 76 22 90 22 C102 22 108 32 102 40 C97 47 86 44 86 36 C86 31 92 30 94 33 M60 56 C60 40 60 20 60 6" />
        </g>

        {/* ближние ноги */}
        <Leg cls="tai-ha" x={62} dx={-6} />
        <Leg cls="tai-fa" x={120} />
      </g>
    </svg>
  );
}
