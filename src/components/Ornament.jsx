// Казахский орнамент «қошқар мүйіз» и шанырак — главные декоративные элементы сайта

export function Horn({ className = '', color = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" aria-hidden="true">
      <path
        d="M60 56 C60 34 44 22 30 22 C18 22 12 32 18 40 C23 47 34 44 34 36 C34 31 28 30 26 33
           M60 56 C60 34 76 22 90 22 C102 22 108 32 102 40 C97 47 86 44 86 36 C86 31 92 30 94 33
           M60 56 C60 40 60 20 60 6"
        stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="60" cy="6" r="4" fill={color} />
    </svg>
  );
}

export function HornBand({ className = '' }) {
  return (
    <div className={`horn-band ${className}`} aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <Horn key={i} className="horn-band-item" />
      ))}
    </div>
  );
}

export function Shanyrak({ className = '' }) {
  const spokes = Array.from({ length: 12 });
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="6" />
      <path d="M58 100 H142 M100 58 V142" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 70 L130 130 M130 70 L70 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {spokes.map((_, i) => {
        const a = (i * Math.PI * 2) / spokes.length;
        const x1 = 100 + Math.cos(a) * 52, y1 = 100 + Math.sin(a) * 52;
        const x2 = 100 + Math.cos(a) * 82, y2 = 100 + Math.sin(a) * 82;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />;
      })}
    </svg>
  );
}

export function Wave({ className = '', flip = false }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}>
      <path d="M0 30 C120 0 240 0 360 30 C480 60 600 60 720 30 C840 0 960 0 1080 30 C1200 60 1320 60 1440 30 V60 H0 Z" fill="currentColor" />
    </svg>
  );
}
