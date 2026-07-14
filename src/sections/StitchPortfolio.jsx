import React, { useRef, useState } from 'react';
import { ArrowRight, FileText } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { AppleGlassButton, AppleMacWindow } from '../components/AppleComponents';
import { formatMetric, getMetric, profile, proofArchive } from '../data/content';
import { useExhibition } from '../data/exhibitionStore';

const tiles = [[1204,18,'0 72px 0 0'],[1060,18,'0'],[52,18,'72px 0 0 0'],[340,18,'72px 0 0 72px'],[196,18,'72px 0 0 0'],[916,18,'72px 0 0 72px'],[52,162,'0 0 72px 0'],[1204,162,'0 0 72px 0'],[1060,162,'0'],[196,306,'0 72px 0 0'],[1060,306,'72px'],[52,450,'0 0 0 72px'],[196,450,'72px'],[1204,450,'0 72px 0 0'],[196,594,'0 0 72px 0'],[1060,594,'0 0 0 72px'],[1204,594,'72px 72px 0 0'],[52,738,'0 0 72px 72px'],[196,738,'0 72px 0 0'],[340,738,'72px 0 0 0'],[484,738,'0'],[628,738,'0 0 72px 0'],[772,738,'0 72px 0 0'],[916,738,'0 0 72px 0'],[1060,738,'0 0 72px 0']];
const brandMarks = [
  ['VELOCITY', '/assets/figma-home/ui/brand-velocity.svg'],
  ['NEXUS', '/assets/figma-home/ui/brand-nexus.svg'],
  ['LUMINA', '/assets/figma-home/ui/brand-lumina.svg'],
  ['STACK', '/assets/figma-home/ui/brand-stack.svg'],
  ['QUANTA', '/assets/figma-home/ui/brand-quanta.svg'],
  ['ORBITAL', '/assets/figma-home/ui/brand-orbital.svg'],
];
const abilityIcons = [
  '/assets/figma-home/ui/ability-web.svg',
  '/assets/figma-home/ui/ability-store.svg',
  '/assets/figma-home/ui/ability-archive.svg',
  '/assets/figma-home/ui/ability-web.svg',
  '/assets/figma-home/ui/ability-store.svg',
  '/assets/figma-home/ui/ability-archive.svg',
];

function HtmlMosaic() { return <div className="fh-mosaic" aria-hidden="true"><div className="fh-mosaic__canvas">{tiles.map(([x,y,r]) => <i key={`${x}-${y}`} style={{ '--x': `${x}px`, '--y': `${y}px`, borderRadius:r }} />)}</div></div>; }
function Hero() { return <><section className="fh-hero" id="about"><HtmlMosaic /><div className="fh-hero__content"><span className="fh-pill-note"><b>NEW</b> PROJECT ARCHIVE · 2024–2026</span><h1>hi！i’m zhibo</h1><p>机器人、产品、文化数字化、运营与本地增长。<br />记录真实项目如何被推进、完成与留下证据。</p><div className="fh-hero__actions"><AppleGlassButton href="#projects" variant="prominent">项目</AppleGlassButton><AppleGlassButton href="#proof">成果</AppleGlassButton></div></div></section><section className="fh-fields" aria-label="项目领域">{brandMarks.map(([label, src])=><span key={label}><img src={src} alt="" />{label}</span>)}</section></>; }

function Projects() { const { exhibitionProjects } = useExhibition(); const order=['postal','jingjie','panxiu','coinops','aimeijia']; const projects=order.map(id=>exhibitionProjects.find(x=>x.id===id)).filter(Boolean); return <section className="fh-projects" id="projects"><Title eyebrow="PROJECT ARCHIVE / 2024–2026" title="我的项目" text="将项目现场、完成内容与阶段结果放回同一条叙事中；每张卡片进入对应项目档案。" /><div className="fh-projects__rail">{projects.map((p,i)=><article className="fh-project-card" key={p.id}><img src={`/assets/figma-home/project-${p.id}.png`} alt="" onError={e=>{e.currentTarget.src=p.hero;}} /><span>{String(i+1).padStart(2,'0')} / {p.year}</span><h3>{p.title}</h3><p>{p.intro}</p><Link to={`/projects/${p.slug}`}>进入项目 <ArrowRight /></Link></article>)}</div></section>; }
function Title({ eyebrow, title, text }) { return <div className="fh-section-title"><span>{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>; }

function TranscriptWindow() { return <AppleMacWindow title="Transcript Editor"><div className="fh-transcript__inner"><code>“项目材料、过程记录与成果证据。”</code><label>完整度 <i><em style={{width:'75%'}} /></i><small>75%</small></label><label>清晰度 <i><em style={{width:'90%'}} /></i><small>90%</small></label><div className="fh-player"><span>▶</span><i><em /></i><small>0:04 / 0:12</small></div></div></AppleMacWindow>; }
function SystemSections() { return <><section className="fh-feature"><div><span>PRECISION CONTROL</span><h2>把每一次完成，<br />调到清晰可见。</h2><p>从问题拆解、项目执行到材料归档，将真实经历转化成可复盘、可展示的项目结构。</p><ul><li>项目现场与测试记录</li><li>产品、网站、店铺与系统</li><li>阶段结果与长期资料</li></ul></div><TranscriptWindow /></section><section className="fh-studio"><div><h2>每一格都写清楚做过什么。</h2><p>网站、店铺、素材档案、后台工作流、内容表达与结果验证，后续均可替换为真实材料。</p><div className="fh-studio__list"><b>网站与项目页面</b><b>产品与店铺呈现</b><b>过程与素材档案</b><b>后台与工作流</b></div></div><div className="fh-studio__screen"><AppleMacWindow title="Project Studio"><div className="fh-studio__canvas">把项目材料、链接、数据与截图<br />逐项整理进可展示的档案。</div><button aria-label="打开项目档案">↗</button></AppleMacWindow></div></section></>; }

const abilities=[['网站运营','官网、项目网站与服务页面搭建，保留页面结构、内容策略和后续可替换素材。'],['店铺与商品','网店、商品页、包装和产品说明统一回到项目内部展示。'],['素材档案','纹样、藏品、测试记录和过程材料形成可登记、可检索的档案。'],['后台与工作流','本地后台、运营看板和 AI 工作流作为项目产出展示。'],['内容表达','路演、页面文案、短视频内容和项目说明保持展览口吻。'],['结果验证','专利、赛事、搜索表现、测试指标和运营变化回到对应项目。']];
function AbilityArchive(){return <section className="fh-abilities" id="work"><Title eyebrow="APPLICATION ARCHIVE" title="每一格都写清楚做过什么。" text="先用演示内容补齐展示骨架，后续可以把真实截图、证书、链接和数据逐项替换进去。"/><div className="fh-ability-grid">{abilities.map(([t,c],i)=><article key={t}><img src={abilityIcons[i]} alt="" /><h3>{t}</h3><p>{c}</p></article>)}</div></section>;}

function ProofWindow({ onSelectProof }) { const items=proofArchive.slice(0,4); const area=useRef(null); const [top,setTop]=useState(0); const max=()=>Math.max(1,(area.current?.scrollHeight??1)-(area.current?.clientHeight??1)); const setFromRange=e=>{const next=Number(e.target.value)*max(); if(area.current)area.current.scrollTop=next; setTop(next);}; return <AppleMacWindow title="Project Archive" scrollable scrollRef={area} scrollValue={Math.min(1,top/max())} onScroll={()=>setTop(area.current?.scrollTop??0)} onScrollValue={setFromRange}><div className="fh-proof__content">{items.map((item,i)=>{const metric=getMetric(item.metricId);return <button className={i===0?'dark':''} onClick={()=>onSelectProof(item.id)} type="button" key={item.id}><span>{item.eyebrow}</span><FileText/><strong>{formatMetric(metric)}</strong><small>{metric?.label}</small><p>{item.subtitle}</p></button>;})}</div></AppleMacWindow>; }
function ProofArchive({onSelectProof}){return <section className="fh-proof" id="proof"><div className="fh-proof__copy"><span>IMPACT ARCHIVE</span><h2>奖项、专利和项目结果，要像证据一样展示。</h2><p>专利、赛事、测试指标与运营结果统一放回对应项目，后续可以继续补入证书、原始记录和材料链接。</p><a href="#contact">继续联系 <img src="/assets/figma-home/ui/inline-arrow.svg" alt="" /></a></div><ProofWindow onSelectProof={onSelectProof}/></section>;}

function Footer(){return <footer className="fh-footer" id="contact"><div className="fh-footer__cta"><h2>继续认识这些项目。</h2><AppleGlassButton className="apple-glass-button--cta" variant="prominent" href={`mailto:${profile.email}`}>联系我 <img src="/assets/figma-home/ui/footer-arrow.svg" alt="" /></AppleGlassButton></div><div className="fh-footer__columns"><div><h3>{profile.name}</h3><p>个人项目展览馆，记录机器人、产品、文化数字化、运营与本地增长。</p><div><input aria-label="邮箱" placeholder="Email address" readOnly/><a href={`mailto:${profile.email}`}>Join</a></div></div><div><b>Projects</b><a href="#projects">净界</a><a href="#projects">邮政机器人</a><a href="#projects">盘绣素材库</a><a href="#projects">古钱币运营</a></div><div><b>Archive</b><a href="#work">项目现场</a><a href="#work">完成内容</a><a href="#proof">成果档案</a><a href="#contact">联系合作</a></div><div><b>Contact</b><a href={`mailto:${profile.email}`}>Email</a><span>{profile.location}</span><span>{profile.github}</span></div></div><div className="fh-footer__bottom"><span>© 2026 PROJECT ARCHIVE</span><span><img src="/assets/figma-home/ui/footer-location.svg" alt="" />Shijiazhuang, China</span></div></footer>;}
export default function StitchPortfolio({onSelectProof}){return <main className="fh-page"><Hero/><Projects/><SystemSections/><AbilityArchive/><ProofArchive onSelectProof={onSelectProof}/><Footer/></main>;}
