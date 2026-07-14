import React, { useEffect, useRef, useState } from 'react';
import { formatMetric } from '../data/content';

export default function NumberTicker({ metric }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const precision = String(metric.value).split('.')[1]?.length ?? 0;

  useEffect(() => {
    let raf = 0;
    let started = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setDisplay(0);

    if (reducedMotion) {
      setDisplay(metric.value);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 1500, 1);
        const spring = progress === 1 ? 1 : 1 - Math.exp(-7 * progress) * Math.cos(11 * progress);
        setDisplay(metric.value * spring);
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [metric.value]);

  const animatedMetric = { ...metric, value: Math.max(0, display).toFixed(precision) };
  return <strong ref={ref} className="ticker">{formatMetric(animatedMetric)}</strong>;
}
