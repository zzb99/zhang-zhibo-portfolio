import React from 'react';
import { profile } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-copy" data-reveal>
        <span>LET&apos;S WORK TOGETHER</span>
        <h2>让想法，<br /><em>真正落地。</em></h2>
        <p>如果你需要一个能快速学习、持续复盘、推进执行的人，欢迎联系我。</p>
        <a href={`mailto:${profile.email}`}>开始合作 <b>↗</b></a>
      </div>
      <div className="contact-cards" data-reveal style={{ '--delay': '120ms' }}>
        {[
          ['EMAIL', profile.email],
          ['WECHAT', profile.wechat],
          ['LOCATION', profile.location],
          ['GITHUB', profile.github],
        ].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </div>
    </section>
  );
}
