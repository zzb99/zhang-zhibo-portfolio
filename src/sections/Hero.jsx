import React from 'react';
import { profile } from '../data/content';

export default function Hero() {
  return (
    <section id="about" className="hero stitch-hero">
      <div className="stitch-container stitch-hero__copy-grid" data-reveal>
        <div className="stitch-hero__headline">
          <h1>把复杂项目，<br />做成真实结果。</h1>
          <div className="hero-cta">
            <a href="#projects">查看项目</a>
            <a href={`mailto:${profile.email}`}>联系合作</a>
          </div>
        </div>
        <p className="hero-caption">{profile.name}，关注项目推进、创新成果与增长执行。网站、系统、后台与 AI 工作流，都在对应的真实项目内呈现。</p>
      </div>

      <div className="stitch-container stitch-hero__panel-wrap" data-reveal style={{ '--delay': '100ms' }}>
        <div className="hero-workbench" aria-label="项目索引预览">
          <div className="hero-workbench__top">
            <div className="hero-workbench__tabs"><span className="is-active">项目档案</span><span>经历记录</span><span>成果索引</span></div>
            <div className="hero-workbench__status"><i /><span>个人作品集</span></div>
          </div>
          <div className="hero-workbench__orbs" aria-hidden="true"><i /><i /><i /><i /></div>
          <a className="hero-workbench__play" href="#projects" aria-label="进入项目列表">▶</a>
          <div className="hero-workbench__bottom">
            <div className="hero-workbench__bottom-links"><span>中邮分拣机器人</span><span>净界</span><span>盘绣素材库</span><span>古钱币运营</span><span>本地搜索与 GEO</span></div>
            <a href="#projects">查看项目</a>
          </div>
        </div>
      </div>
    </section>
  );
}
