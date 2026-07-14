import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { formatMetric, getMetric, proofArchive, proofProjectIds } from '../data/content';

export default function ProofArchive({ onSelectProof }) {
  const archiveByProject = new Map(proofArchive.map((item) => [item.projectId, item]));
  const proofItems = proofProjectIds.map((projectId) => archiveByProject.get(projectId)).filter(Boolean);

  return (
    <section id="proof" className="section proof-section">
      <SectionTitle
        eyebrow="IMPACT ARCHIVE"
        title={<>成果档案，<em>让证据说话。</em></>}
        lead="以赛事与知识产权材料，记录已经形成的代表性成果。"
      />
      <div className="result-index" aria-label="成果档案">
        {proofItems.map((item, index) => (
          <button
            className="result-index__item"
            data-reveal
            style={{ '--delay': `${index * 70}ms` }}
            onClick={() => onSelectProof(item.id)}
            key={item.id}
          >
            <span className="result-index__number">{String(index + 1).padStart(2, '0')}</span>
            <div><span className="result-index__eyebrow">{item.eyebrow}</span><h3>{formatMetric(getMetric(item.metricId), { withLabel: true })}</h3></div>
            <p>{item.description}</p>
            <span className="result-index__action">查看详情 ↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
