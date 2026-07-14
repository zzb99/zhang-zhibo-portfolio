import React from 'react';

export default function SectionTitle({ eyebrow, title, lead, align = 'left' }) {
  return (
    <div className={`section-heading stitch-section-heading ${align === 'center' ? 'is-center' : ''}`} data-reveal>
      <div className="stitch-section-heading__rule"><span>{eyebrow}</span><i /></div>
      <div className="stitch-section-heading__grid">
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
      </div>
    </div>
  );
}
