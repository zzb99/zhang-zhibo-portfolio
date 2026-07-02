import React, { useCallback, useEffect, useRef } from 'react';
import './BorderGlow.css';

function parseHSL(value) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  return match ? { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) } : { h: 210, s: 80, l: 68 };
}

function glowVariables(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const levels = [100, 60, 50, 40, 30, 20, 10];
  const suffixes = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  return Object.fromEntries(levels.map((level, index) => [
    `--glow-color${suffixes[index]}`,
    `hsl(${h}deg ${s}% ${l}% / ${Math.min(level * intensity, 100)}%)`,
  ]));
}

const positions = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const keys = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
const colorMap = [0, 1, 2, 0, 1, 2, 1];

function gradientVariables(colors) {
  const vars = {};
  keys.forEach((key, index) => {
    vars[key] = `radial-gradient(at ${positions[index]}, ${colors[Math.min(colorMap[index], colors.length - 1)]} 0px, transparent 50%)`;
  });
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);
const easeInCubic = (value) => value * value * value;

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }) {
  const startedAt = performance.now() + delay;
  function tick() {
    const progress = Math.min((performance.now() - startedAt) / duration, 1);
    onUpdate(start + (end - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(tick);
    else onEnd?.();
  }
  window.setTimeout(() => requestAnimationFrame(tick), delay);
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '210 80 68',
  backgroundColor = '#ffffff',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#8dbbff', '#fed1bd', '#bdebcf'],
  fillOpacity = 0.5,
}) {
  const cardRef = useRef(null);

  const pointerMove = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const kx = dx ? cx / Math.abs(dx) : Infinity;
    const ky = dy ? cy / Math.abs(dy) : Infinity;
    const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3));
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
  }, []);

  useEffect(() => {
    if (!animated || !cardRef.current) return undefined;
    const card = cardRef.current;
    const start = 110;
    const end = 465;
    card.classList.add('sweep-active');
    card.style.setProperty('--cursor-angle', `${start}deg`);
    animateValue({ duration: 500, onUpdate: (value) => card.style.setProperty('--edge-proximity', value) });
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: (value) => card.style.setProperty('--cursor-angle', `${(end - start) * (value / 100) + start}deg`) });
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: (value) => card.style.setProperty('--cursor-angle', `${(end - start) * (value / 100) + start}deg`) });
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0, onUpdate: (value) => card.style.setProperty('--edge-proximity', value), onEnd: () => card.classList.remove('sweep-active') });
    return undefined;
  }, [animated]);

  return (
    <div ref={cardRef} onPointerMove={pointerMove} className={`border-glow-card ${className}`} style={{
      '--card-bg': backgroundColor,
      '--edge-sensitivity': edgeSensitivity,
      '--border-radius': `${borderRadius}px`,
      '--glow-padding': `${glowRadius}px`,
      '--cone-spread': coneSpread,
      '--fill-opacity': fillOpacity,
      ...glowVariables(glowColor, glowIntensity),
      ...gradientVariables(colors),
    }}>
      <span className="edge-light" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
