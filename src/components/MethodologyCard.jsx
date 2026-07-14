import React, { useState } from 'react';

export default function MethodologyCard({ method, index }) {
  const [flipped, setFlipped] = useState(false);

  const toggleOnTouch = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setFlipped((value) => !value);
    }
  };

  return (
    <button
      type="button"
      className={`skill-flip-card ${flipped ? 'is-flipped' : ''}`}
      onClick={toggleOnTouch}
      aria-pressed={flipped}
      aria-label={`${method.title}，悬停或点击查看详情`}
      data-reveal
      style={{ '--delay': `${index * 70}ms` }}
    >
      <span className="skill-flip-inner">
        <span className="skill-face skill-front">
          <span className="skill-index">{method.step}</span>
          <span className="skill-value">{method.step}</span>
          <span className="skill-label">{method.eyebrow}</span>
          <i />
          <strong>{method.title}</strong>
          <span className="skill-summary">{method.summary}</span>
          <b>HOVER TO EXPLORE ↗</b>
        </span>
        <span className="skill-face skill-back">
          <span className="skill-index">{method.step} / METHODOLOGY</span>
          <strong>{method.title}</strong>
          <span className="skill-back-copy">{method.detail}</span>
          <span className="skill-back-tags">
            {method.practices.map((practice) => <em key={practice}>{practice}</em>)}
          </span>
          <b>RETURN ↙</b>
        </span>
      </span>
    </button>
  );
}
