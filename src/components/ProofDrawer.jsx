import React, { useEffect, useRef } from 'react';
import { formatMetric, resolveMetrics } from '../data/content';

export default function ProofDrawer({ project, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )].filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  const outcomes = [
    ...resolveMetrics(project.metricIds).map((metric) => ({
      value: formatMetric(metric),
      label: metric.label,
    })),
    ...(project.facts ?? []),
  ];

  return (
    <div className="drawer-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article ref={dialogRef} className="project-drawer" role="dialog" aria-modal="true" aria-labelledby="proof-drawer-title">
        <button ref={closeRef} className="drawer-close" onClick={onClose} aria-label="关闭成果详情">×</button>
        <div className="drawer-topline"><span>{project.eyebrow}</span><span>PROOF ARCHIVE</span></div>
        <h2 id="proof-drawer-title">{project.title}</h2>
        <h3>{project.statement}</h3>
        <p className="drawer-summary">{project.summary}</p>
        <div className="drawer-metrics">
          {outcomes.map(({ value, label }) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
        <div className="drawer-detail-grid">
          <span>WHAT I DID</span>
          <ol>{project.narrative.process.map((detail) => <li key={detail}>{detail}</li>)}</ol>
        </div>
      </article>
    </div>
  );
}
