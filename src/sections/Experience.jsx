import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Tags from '../components/Tags';
import { formatMetric, resolveMetrics, workItems } from '../data/content';

function formatWorkResult(item) {
  return resolveMetrics(item.metricIds)
    .map((metric) => formatMetric(metric, { withLabel: true }))
    .join(' · ');
}

export default function Experience() {
  return (
    <section id="work" className="section work-section">
      <SectionTitle
        eyebrow="EXPERIENCE"
        title={<>一路走来，<em>把经历做成结果。</em></>}
        lead="按时间梳理岗位、负责内容与关键结果，让每段经历都有清晰的成长脉络。"
      />
      <div className="work-list">
        {workItems.map((item, index) => (
          <article className="work-row" key={item.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
            <div className="work-year"><span>/{String(index + 1).padStart(2, '0')}</span><b>{item.year}</b></div>
            <div className="work-copy"><h3>{item.title}</h3><p>{item.copy}</p><Tags items={item.tags} /></div>
            <strong>{formatWorkResult(item)}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
