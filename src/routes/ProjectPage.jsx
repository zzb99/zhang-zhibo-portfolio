import React, { useEffect } from 'react';
import { ArrowDown, ArrowLeft, ArrowUpRight, CheckCircle, Globe, Image, Storefront } from '@phosphor-icons/react';
import { Link, useParams } from 'react-router-dom';
import { useExhibition } from '../data/exhibitionStore';
import './ProjectPage.css';

function Label({ children }) { return <span className="case-label">{children}</span>; }

function Hero({ project, index }) {
  return (
    <>
      <section className="case-hero">
        <div className="case-hero__title"><Label>PROJECT {String(index + 1).padStart(2, '0')} / {project.year}</Label><h1>{project.title}</h1><a className="case-button case-button--dark" href="#project-story">进入项目 <ArrowDown /></a></div>
        <div className="case-hero__summary"><p>{project.intro}</p><div><span>{project.category}</span><span>{project.status}</span></div></div>
      </section>
      <figure className="case-cover"><img src={project.hero} alt={`${project.title}项目主视觉`} /><figcaption><span>{project.category}</span><span>演示素材 · 可在本地后台替换</span></figcaption></figure>
    </>
  );
}

function PostalStory({ project }) {
  return (
    <div className="case-story case-story--postal" id="project-story">
      <section className="case-lead"><div><Label>01 / TESTING FIELD</Label><h2>从实验室，进入真实分拣线。</h2></div><p>{project.background}</p></section>
      <section className="case-dark-lab">
        <div className="case-dark-lab__head"><Label>VALIDATION LOG</Label><span>连续运行 / 柔性包裹 / 破损控制</span></div>
        <div className="case-dark-lab__metrics"><article><strong>99.2%</strong><span>演示抓取成功率</span></article><article><strong>≤0.5‰</strong><span>演示包裹破损率</span></article><article><strong>04</strong><span>测试阶段</span></article></div>
        <img src="/assets/operations-timeline.png" alt="机器人测试阶段与运行记录演示面板" />
      </section>
      <Deliverables project={project} heading="测试如何变成项目结果" />
    </div>
  );
}

function JingjieStory({ project }) {
  return (
    <div className="case-story case-story--jingjie" id="project-story">
      <section className="case-asym-intro"><div><Label>01 / PRODUCT IDEA</Label><h2>让卫生状态，第一次被住客看见。</h2></div><p>{project.background}</p></section>
      <section className="case-product-study"><figure><img src={project.hero} alt="净界可更换内胆产品结构演示" /><figcaption>结构研究 / 可更换内胆</figcaption></figure><div><Label>PRODUCT SYSTEM</Label><h3>一个产品，连接三段体验。</h3>{project.outputs.slice(0, 3).map((item, i) => <article key={item}><span>0{i + 1}</span><p>{item}</p></article>)}</div></section>
      <section className="case-business-loop"><div><Storefront /><strong>酒店补充</strong></div><i /><div><CheckCircle /><strong>封签确认</strong></div><i /><div><Globe /><strong>住客使用</strong></div></section>
      <Deliverables project={project} heading="从产品结构到酒店使用路径" />
    </div>
  );
}

function PanxiuStory({ project }) {
  return (
    <div className="case-story case-story--panxiu" id="project-story">
      <section className="case-archive-head"><div><Label>01 / CULTURAL ARCHIVE</Label><h2>从一针一线，进入可检索的数字档案。</h2></div><p>{project.background}</p></section>
      <section className="case-pattern-gallery"><figure className="is-large"><img src={project.hero} alt="盘绣传承人、纹样与产品展示" /></figure>{project.materials.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><Image /><strong>{item}</strong><small>演示材料 / 可替换</small></article>)}</section>
      <section className="case-panxiu-path">{['联系非遗传承人', '采集与整理纹样', '开发文化产品', '开设线上网店', '建设开放素材网站'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</section>
      <Deliverables project={project} heading="纹样、产品、网店与网站" />
    </div>
  );
}

function CoinStory({ project }) {
  return (
    <div className="case-story case-story--coin" id="project-story">
      <section className="case-coin-intro"><div><Label>01 / COLLECTION OPERATIONS</Label><h2>让每一枚藏品，都拥有完整的数字档案。</h2></div><p>{project.background}</p></section>
      <section className="case-ops-workbench"><figure><img src={project.hero} alt="古钱币档案整理与拍摄工作台" /></figure><aside><Label>OPERATIONS DESK</Label><h3>从藏品录入到多平台发布</h3><ol>{project.outputs.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol></aside></section>
      <section className="case-channel-strip">{['藏品档案', '标准拍摄', '内容包装', '店铺发布', '运营复盘'].map((item, index) => <div key={item}><small>0{index + 1}</small><strong>{item}</strong></div>)}</section>
      <Deliverables project={project} heading="收藏档案与运营工作流" />
    </div>
  );
}

function AimeijiaStory({ project }) {
  return (
    <div className="case-story case-story--geo" id="project-story">
      <section className="case-geo-intro"><div><Label>01 / LOCAL VISIBILITY</Label><h2>官网、搜索与本地服务，在同一条增长链路里发生。</h2></div><p>{project.background}</p></section>
      <section className="case-geo-screen"><img src={project.hero} alt="爱美家官网与本地搜索增长演示界面" /><div className="case-geo-screen__caption"><span>OFFICIAL WEBSITE</span><strong>品牌官网与本地搜索表现</strong><small>演示界面 · 数据可替换</small></div></section>
      <section className="case-geo-grid"><article><Label>WEBSITE</Label><strong>官网与服务页面</strong><p>统一品牌表达、服务内容与本地转化入口。</p></article><article><Label>GEO</Label><strong>实体与问答结构</strong><p>围绕地区、服务和真实问题组织可被理解的内容。</p></article><article><Label>RESULT</Label><strong>可见性与线索跟踪</strong><p>持续记录收录、排名、点击和咨询变化。</p></article></section>
      <Deliverables project={project} heading="从官网建设到阶段增长结果" />
    </div>
  );
}

function Deliverables({ project, heading }) {
  return (
    <section className="case-deliverables">
      <div><Label>FINAL / OUTPUTS</Label><h2>{heading}</h2><p>{project.result}</p></div>
      <div className="case-deliverables__list">{project.outputs.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><CheckCircle /></article>)}</div>
    </section>
  );
}

const stories = { postal: PostalStory, jingjie: JingjieStory, panxiu: PanxiuStory, coinops: CoinStory, aimeijia: AimeijiaStory };

export default function ProjectPage() {
  const { slug } = useParams();
  const { exhibitionProjects } = useExhibition();
  const index = exhibitionProjects.findIndex((item) => item.slug === slug);
  const project = exhibitionProjects[index];
  const next = index >= 0 ? exhibitionProjects[(index + 1) % exhibitionProjects.length] : null;

  useEffect(() => {
    document.title = project ? `${project.title} · 张智博项目档案` : '项目未找到 · 张智博';
    return () => { document.title = '张智博 · 项目档案'; };
  }, [project]);

  if (!project) return <main className="project-page project-not-found"><Label>404 / PROJECT NOT FOUND</Label><h1>这个项目不存在。</h1><Link to="/#projects">返回项目列表</Link></main>;
  const Story = stories[project.id];

  return (
    <main className={`project-page project-page--${project.id}`}>
      <Hero project={project} index={index} />
      <Story project={project} />
      <section className="case-next"><span>NEXT PROJECT</span><Link to={`/projects/${next.slug}`}><strong>{next.title}</strong><ArrowUpRight /></Link></section>
      <footer className="case-footer"><Link to="/#projects"><ArrowLeft /> 返回全部项目</Link><span>ZHANG ZHIBO / PROJECT ARCHIVE</span></footer>
    </main>
  );
}
