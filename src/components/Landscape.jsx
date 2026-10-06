// Пейзаж Түркістан: снежные горы Алатау, озеро с отражением, пруд, юрты, тополя, луг с цветами.
// Чисто декоративный SVG (viewBox 1600×440), низ — луг, на котором лежит тұсау.

const FAR = [[0, 300], [90, 236], [170, 262], [300, 150], [380, 212], [440, 186], [560, 272], [700, 206], [790, 128], [880, 214], [960, 190], [1080, 262], [1180, 168], [1290, 92], [1385, 205], [1470, 172], [1600, 262], [1600, 330], [0, 330]];
const PEAKS = [[3, 52], [8, 56], [13, 64]]; // [индекс вершины, глубина снежной шапки]

// Снежная шапка с зубчатым краем по двум склонам вершины
const cap = (pts, i, depth) => {
  const [px, py] = pts[i], [lx, ly] = pts[i - 1], [rx, ry] = pts[i + 1];
  const y = py + depth;
  const xl = px + (lx - px) * (depth / (ly - py));
  const xr = px + (rx - px) * (depth / (ry - py));
  const zig = [1, 2, 3, 4].map((k) => `${(xr + (xl - xr) * (k / 5)).toFixed(1)} ${y + (k % 2 ? 13 : -4)}`);
  return `M${px} ${py} L${xr.toFixed(1)} ${y} L${zig.join(' L')} L${xl.toFixed(1)} ${y} Z`;
};
const farPath = `M${FAR.map((p) => p.join(' ')).join(' L')} Z`;
const shade = (i) => `M${FAR[i].join(' ')} L${FAR[i + 1].join(' ')} L${FAR[i + 1][0]} 330 L${FAR[i][0] + 18} 330 Z`;

const LAKE = 'M300 312 C420 296 700 292 980 300 C1150 304 1300 312 1370 324 C1260 354 1000 364 760 362 C520 360 380 346 300 312 Z';

const FLOWERS = Array.from({ length: 80 }, (_, i) => ({
  x: 40 + ((i * 97 + ((i * i * 13) % 53)) % 1520),
  y: 384 + ((i * 37) % 44),
  c: ['#ff5a5f', '#fff6dc', '#ffd23f', '#ff8fd0', '#b79cff'][i % 5],
}));

const Poplar = ({ x, y, h }) => (
  <g className="ls-tree" style={{ animationDelay: `${-(x % 7) * 0.6}s` }}>
    <rect x={x - 2} y={y - h * 0.18} width="4" height={h * 0.18} fill="#6b4a2b" />
    <ellipse cx={x} cy={y - h * 0.58} rx={h * 0.15} ry={h * 0.46} fill="#2f8f4c" />
    <ellipse cx={x - h * 0.04} cy={y - h * 0.62} rx={h * 0.08} ry={h * 0.36} fill="#52b564" opacity=".75" />
  </g>
);

const RoundTree = ({ x, y, r }) => (
  <g className="ls-tree" style={{ animationDelay: `${-(x % 5) * 0.8}s` }}>
    <rect x={x - 3} y={y - r * 0.7} width="6" height={r * 0.7} fill="#6b4a2b" />
    <circle cx={x} cy={y - r * 1.25} r={r} fill="#2f8f4c" />
    <circle cx={x - r * 0.3} cy={y - r * 1.5} r={r * 0.6} fill="#55b866" opacity=".8" />
  </g>
);

const Yurt = ({ x, y, s = 1, smoke = false }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {smoke && [0, 1.6, 3.2].map((d) => <circle key={d} className="ls-smoke" style={{ animationDelay: `${d}s` }} cx="0" cy="-104" r="5" fill="#fff" />)}
    <ellipse cx="0" cy="2" rx="74" ry="6" fill="#0f5a28" opacity=".28" />
    <rect x="-54" y="-34" width="108" height="34" fill="#f6ecd2" />
    <rect x="-54" y="-24" width="108" height="9" fill="#12a99b" />
    <path d="M-50 -19.5 l8 -4 l8 4 l-8 4 Z M-30 -19.5 l8 -4 l8 4 l-8 4 Z M-10 -19.5 l8 -4 l8 4 l-8 4 Z M10 -19.5 l8 -4 l8 4 l-8 4 Z M30 -19.5 l8 -4 l8 4 l-8 4 Z" fill="#f4b63f" />
    <path d="M-64 -33 Q-54 -94 0 -96 Q54 -94 64 -33 Z" fill="#fbf4e2" />
    <path d="M0 -96 L-30 -33 M0 -96 L-12 -33 M0 -96 L12 -33 M0 -96 L30 -33" stroke="#d9c9a0" strokeWidth="1.4" />
    <path d="M-64 -33 Q-54 -94 0 -96 L-4 -33 Z" fill="#fff" opacity=".35" />
    <rect x="-64" y="-37" width="128" height="6" rx="3" fill="#e5472f" />
    <rect x="-11" y="-28" width="22" height="28" rx="2" fill="#b6361f" stroke="#f4b63f" strokeWidth="2" />
    <circle cx="0" cy="-97" r="6" fill="#fbf1d9" stroke="#c9b88a" strokeWidth="1.5" />
  </g>
);

const Cloud = ({ x, y, s = 1, cls }) => (
  <g className={`ls-cloud ${cls}`} transform={`translate(${x} ${y}) scale(${s})`}>
    <ellipse cx="0" cy="0" rx="60" ry="17" fill="#fff" />
    <ellipse cx="-26" cy="-12" rx="30" ry="20" fill="#fff" />
    <ellipse cx="14" cy="-18" rx="34" ry="24" fill="#fff" />
    <ellipse cx="44" cy="-6" rx="24" ry="15" fill="#fff" />
  </g>
);

export default function Landscape() {
  return (
    <svg className="landscape" viewBox="0 0 1600 440" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="ls-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9db8de" /><stop offset="1" stopColor="#cfe0f3" />
        </linearGradient>
        <linearGradient id="ls-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5f95ad" /><stop offset="1" stopColor="#6fae9d" />
        </linearGradient>
        <linearGradient id="ls-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#58a867" /><stop offset="1" stopColor="#4a9a5e" />
        </linearGradient>
        <linearGradient id="ls-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6fd8e6" /><stop offset="1" stopColor="#1b9dc6" />
        </linearGradient>
        <linearGradient id="ls-meadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#92df6f" /><stop offset="1" stopColor="#58b955" />
        </linearGradient>
        <radialGradient id="ls-mistg">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ls-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#eaf6ff" stopOpacity=".75" />
        </linearGradient>
        <clipPath id="ls-lake-clip"><path d={LAKE} /></clipPath>
      </defs>

      {/* облака и птицы */}
      <Cloud x={250} y={58} cls="ls-c1" />
      <Cloud x={780} y={34} s={0.8} cls="ls-c2" />
      <Cloud x={1330} y={70} s={1.1} cls="ls-c3" />
      {[[560, 78, 'ls-b1'], [612, 100, 'ls-b2'], [1010, 56, 'ls-b3']].map(([x, y, c]) => (
        <g key={c} transform={`translate(${x} ${y})`}>
          <g className={`ls-bird ${c}`}>
            <path d="M0 0 q6 -9 12 0 q6 -9 12 0" stroke="#1c3a5c" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </g>
        </g>
      ))}

      {/* дальние горы со снежными шапками */}
      <path d={farPath} fill="url(#ls-far)" />
      {PEAKS.map(([i]) => <path key={`s${i}`} d={shade(i)} fill="#4a6aa8" opacity=".16" />)}
      {PEAKS.map(([i, d]) => <path key={`c${i}`} d={cap(FAR, i, d)} fill="#f7fbff" />)}
      {/* искры на снегу */}
      {[[300, 172, 0], [276, 196, 1.4], [790, 150, 0.7], [820, 176, 2.1], [1290, 118, 1.1], [1262, 148, 2.6]].map(([x, y, d]) => (
        <g key={`${x}${y}`} transform={`translate(${x} ${y})`}>
          <path className="ls-spark" style={{ animationDelay: `${d}s` }} d="M0 -8 L1.8 -1.8 L8 0 L1.8 1.8 L0 8 L-1.8 1.8 L-8 0 L-1.8 -1.8 Z" fill="#fff" />
        </g>
      ))}
      {/* туман, плывущий у подножья */}
      <ellipse className="ls-mist" cx="760" cy="296" rx="560" ry="26" fill="url(#ls-mistg)" />

      {/* дымка у подножья дальних гор */}
      <rect x="0" y="230" width="1600" height="100" fill="url(#ls-haze)" />

      {/* средние горы и предгорья */}
      <path d="M0 330 L0 300 C80 280 160 292 240 286 S380 262 470 282 S640 302 760 276 S960 262 1060 288 S1250 302 1340 276 S1520 270 1600 290 V330 Z" fill="url(#ls-mid)" />
      <path d="M0 346 C150 304 300 304 420 326 S700 334 860 314 S1150 298 1300 320 S1520 318 1600 308 V370 H0 Z" fill="url(#ls-hill)" />

      {/* озеро: вода, отражение гор, блики */}
      <path d={LAKE} fill="url(#ls-lake)" />
      <g clipPath="url(#ls-lake-clip)">
        <g className="ls-reflect">
          <g transform="translate(0 300) scale(1 -0.32) translate(0 -300)">
            <path d={farPath} fill="#fff" opacity=".28" />
            {PEAKS.map(([i, d]) => <path key={`r${i}`} d={cap(FAR, i, d)} fill="#fff" opacity=".5" />)}
          </g>
        </g>
        {['M520 322 h40', 'M640 336 h26', 'M780 318 h50', 'M920 340 h34', 'M1060 326 h44', 'M590 348 h22', 'M860 350 h30'].map((d, i) => (
          <path key={d} className="ls-glint" style={{ animationDelay: `${(i * 0.7) % 3}s` }} d={d} stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        ))}
        {[[470, 330, 0], [700, 344, 1.6], [980, 332, 3.2], [1180, 340, 0.8]].map(([x, y, d]) => (
          <ellipse key={x} className="ls-ripple" style={{ animationDelay: `${d}s` }} cx={x} cy={y} rx="7" ry="2.2" fill="none" stroke="#fff" strokeWidth="1.6" />
        ))}
      </g>

      {/* луг, юрты, деревья */}
      <path d="M0 372 C180 346 380 352 560 366 S900 374 1120 356 S1480 348 1600 362 V440 H0 Z" fill="url(#ls-meadow)" />
      <ellipse cx="330" cy="388" rx="92" ry="12" fill="#2db5d4" />
      <ellipse cx="318" cy="385" rx="52" ry="4" fill="#fff" opacity=".45" />
      <Yurt x={1330} y={366} s={0.62} />
      <Yurt x={1215} y={376} smoke />
      <Poplar x={118} y={380} h={96} /><Poplar x={150} y={376} h={118} /><Poplar x={184} y={380} h={90} />
      <RoundTree x={250} y={374} r={30} />
      <Poplar x={1462} y={378} h={112} /><Poplar x={1494} y={382} h={92} />
      <RoundTree x={1105} y={366} r={24} />
      <path d="M0 412 C300 398 700 406 1000 400 S1450 398 1600 406 V440 H0 Z" fill="#46b04a" />
      {FLOWERS.map((f, i) => (
        <g key={i}><circle cx={f.x} cy={f.y} r="3.4" fill={f.c} /><circle cx={f.x} cy={f.y} r="1.2" fill="#f4b63f" /></g>
      ))}
    </svg>
  );
}
