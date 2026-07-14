import React from 'react';
import MethodologyCard from '../components/MethodologyCard';
import SectionTitle from '../components/SectionTitle';
import { methodology } from '../data/content';

export default function Methodology() {
  return (
    <section id="skills" className="section skills-section">
      <SectionTitle
        eyebrow="METHODOLOGY"
        title={<>从洞察，<em>走向结果。</em></>}
        lead="一套从问题定义、原型验证到执行交付与成果沉淀的工作方法。"
      />
      <div className="methodology-grid">
        {methodology.map((method, index) => (
          <MethodologyCard method={method} index={index} key={method.id} />
        ))}
      </div>
      <p className="skills-touch-hint">手机端轻触卡片即可翻面</p>
    </section>
  );
}
