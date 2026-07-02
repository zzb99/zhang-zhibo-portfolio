import React, { useEffect, useRef, useState } from 'react';
import BorderGlow from '../components/BorderGlow';
import HorizontalShelf from '../components/HorizontalShelf';
import {
  impactStats,
  profile,
  projects,
  proofShowcase,
  skillCards,
  workItems,
} from '../data/content';

function NumberTicker({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf = 0;
    let started = false;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionPreference.matches) {
      setDisplay(value);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const duration = 1500;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const spring = progress === 1 ? 1 : 1 - Math.exp(-7 * progress) * Math.cos(11 * progress);
        setDisplay(value * spring);
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <strong ref={ref} className="ticker">
      {prefix}{Math.max(0, Math.round(display))}{suffix}
    </strong>
  );
}

function SectionTitle({ eyebrow, title, lead, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'is-center' : ''}`} data-reveal>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export function Tags({ items }) {
  return <div className="tags">{items.map((tag) => <span key={tag}>{tag}</span>)}</div>;
}

function SkillFlipCard({ card, index }) {
  const [flipped, setFlipped] = useState(false);
  const toggleOnTouch = () => {
    if (window.matchMedia('(hover: none)').matches) setFlipped((value) => !value);
  };

  return (
    <button
      type="button"
      className={`skill-flip-card ${flipped ? 'is-flipped' : ''}`}
      onClick={toggleOnTouch}
      aria-pressed={flipped}
      aria-label={`${card.title}，悬停或点击查看详情`}
      data-reveal
      style={{ '--delay': `${index * 70}ms` }}
    >
      <span className="skill-flip-inner">
        <span className="skill-face skill-front">
          <span className="skill-index">0{index + 1}</span>
          <span className="skill-value">{card.value}<small>{card.suffix}</small></span>
          <span className="skill-label">{card.label}</span>
          <i />
          <strong>{card.title}</strong>
          <span className="skill-summary">{card.summary}</span>
          <b>HOVER TO EXPLORE ↗</b>
        </span>
        <span className="skill-face skill-back">
          <span className="skill-index">0{index + 1} / CAPABILITY</span>
          <strong>{card.backTitle}</strong>
          <span className="skill-back-copy">{card.backCopy}</span>
          <span className="skill-back-tags">{card.tags.map((tag) => <em key={tag}>{tag}</em>)}</span>
          <b>RETURN ↙</b>
        </span>
      </span>
    </button>
  );
}

export default function PageSections({ onSelectProject }) {
  return (
    <>
        <section id="about" className="hero cinematic-grid">
          <div className="hero-aura" />
          <div className="hero-layout">
            <div className="hero-copy" data-reveal>
              <p className="overline">PERSONAL WEBSITE · SHIJIAZHUANG</p>
              <h1>HELLO, I&apos;M <span>Zhibo</span></h1>
              <p className="hero-caption">{profile.name} · {profile.age} 岁 · AI 创作 / 创新创业 / 专利成果 / 项目运营</p>
            </div>
            <aside className="hero-intro" data-reveal style={{ '--delay': '90ms' }}>
              <span>PROFILE / 2026</span>
              <p>用 AI、设计与工程思维，把创意做成可展示、可申报、可落地的成果。</p>
              <div><a href="#proof">查看代表成果</a><a href={`mailto:${profile.email}`}>联系合作</a></div>
            </aside>
          </div>

          <HorizontalShelf ariaLabel="成果快捷入口" className="hero-shelf" trackClassName="impact-shelf-track">
            {impactStats.map((stat, index) => (
              <div className="impact-item" data-reveal style={{ '--delay': `${index * 70}ms` }} key={stat.label}>
                <NumberTicker value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <span>{stat.label}</span>
                <small>{stat.note}</small>
              </div>
            ))}
          </HorizontalShelf>
          <a className="scroll-cue" href="#skills"><span>SCROLL TO EXPLORE</span><i /></a>
        </section>

        <section id="skills" className="section skills-section cinematic-grid">
          <SectionTitle
            eyebrow="CAPABILITIES"
            title={<>专业能力，<em>由结果验证。</em></>}
            lead="不是技能清单，而是四种已经在真实项目里被验证的能力。将鼠标移到卡片上，查看能力背后的方法。"
          />
          <HorizontalShelf ariaLabel="专业能力" className="skills-shelf">
            {skillCards.map((card, index) => <SkillFlipCard card={card} index={index} key={card.title} />)}
          </HorizontalShelf>
          <p className="skills-touch-hint">手机端轻触卡片即可翻面</p>
        </section>

        <section id="proof" className="section proof-section">
          <SectionTitle
            eyebrow="FEATURED ACHIEVEMENTS"
            title={<>上新了，<em>认识一下这些成果。</em></>}
            lead="每一项成果都将以图片与故事呈现。现在先放好版式，后续可以直接替换证书、项目现场或作品图片。"
          />
          <HorizontalShelf ariaLabel="获奖与成果" className="showcase-shelf">
            {proofShowcase.map((item, index) => (
              <button
                className={`showcase-card ${item.dark ? 'is-dark' : ''}`}
                data-reveal
                style={{ '--delay': `${index * 70}ms` }}
                onClick={() => onSelectProject(projects[item.projectKey])}
                key={item.title}
              >
                <span className="showcase-kicker">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <div className="showcase-description">{item.description}</div>
                <span className="showcase-action">查看详情 ↗</span>
              </button>
            ))}
          </HorizontalShelf>
        </section>

        <section id="projects" className="section projects-section">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title={<>把复杂，<br /><em>做得简单。</em></>}
            lead="像产品发布一样讲清楚问题、方法与最终价值。点击卡片，进入项目内部。"
          />

          <div className="project-feature-shell">
            <BorderGlow
              className="feature-glow"
              edgeSensitivity={28}
              glowColor="214 92 62"
              backgroundColor="#f8fbff"
              borderRadius={32}
              glowRadius={44}
              glowIntensity={1.2}
              coneSpread={22}
              colors={['#8ec5ff', '#d8c7ff', '#8ce3ef']}
              fillOpacity={0.16}
            >
              <button className="project-feature postal-feature" onClick={() => onSelectProject(projects.postal)} data-reveal>
                <div className="feature-copy">
                  <span>{projects.postal.eyebrow}</span>
                  <h3>{projects.postal.title}</h3>
                  <p>{projects.postal.statement}</p>
                  <Tags items={projects.postal.tags} />
                </div>
                <div className="robot-visual" aria-hidden="true">
                  <div className="robot-grid" />
                  <div className="robot-core"><i /><i /><b /></div>
                  <span>99.2%</span>
                </div>
              </button>
            </BorderGlow>

          </div>
          <HorizontalShelf ariaLabel="更多科研与项目" className="projects-shelf">
            <button className="project-tile graphite-tile" onClick={() => onSelectProject(projects.commerce)} data-reveal>
              <span>{projects.commerce.eyebrow}</span>
              <h3>¥300W</h3>
              <p>{projects.commerce.statement}</p>
              <div className="data-bars"><i /><i /><i /><i /><i /></div>
              <b>Open project ↗</b>
            </button>

            <button className="project-tile jingjie-tile" onClick={() => onSelectProject(projects.jingjie)} data-reveal style={{ '--delay': '80ms' }}>
              <span>{projects.jingjie.eyebrow}</span>
              <h3>净界</h3>
              <p>一客一净，净在眼前。</p>
              <div className="product-rings"><i /><i /><i /></div>
              <b>Explore product ↗</b>
            </button>

            <button className="project-tile patent-tile" onClick={() => onSelectProject(projects.patent)} data-reveal style={{ '--delay': '140ms' }}>
              <span>{projects.patent.eyebrow}</span>
              <h3>11</h3>
              <p>项国家专利。让创新被清晰定义。</p>
              <b>View assets ↗</b>
            </button>
          </HorizontalShelf>
        </section>

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
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section cinematic-grid">
          <div className="contact-aura" />
          <div className="contact-copy" data-reveal>
            <span>ONE MORE THING</span>
            <h2>让想法，<br /><em>真正落地。</em></h2>
            <p>如果你需要一个能快速学习、持续复盘、推进执行的人，欢迎联系我。</p>
            <a href={`mailto:${profile.email}`}>开始一次合作 <b>↗</b></a>
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
    </>
  );
}

