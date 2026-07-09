'use client';

import { useEffect, useState } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () => setTime(new Date().toUTCString().split(' ')[4]);
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="statusbar" aria-label="Site information">
      <div className="bar-left">
        <div className="bar-item"><div className="bar-dot g"></div>Networks</div>
        <div className="bar-item"><div className="bar-dot t"></div>Energy</div>
        <div className="bar-item"><div className="bar-dot cr"></div>AI Infrastructure</div>
      </div>
      <div className="bar-right">
        <span className="bar-coord">18.5204°N · 73.8567°E</span>
        <span className="bar-time">{time} UTC</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 2, color: 'var(--muted)' }}>TASAAR · EST. 2025</span>
      </div>
    </footer>
  );
}
