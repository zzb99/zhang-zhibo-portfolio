import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { featuredProjectIds, formatMetric, projects, resolveMetrics } from '../data/content';
import './AdminDashboard.css';

const statusMap = {
  postal: ['验证中', 86],
  jingjie: ['方案迭代', 68],
  panxiu: ['内容建设', 74],
  coinops: ['运营中', 59],
  aimeijia: ['增长测试', 63],
};

const activities = [
  ['今天 10:24', '更新中邮机器人测试记录', '项目进度'],
  ['昨天 18:40', '新增盘绣素材库内容条目', '内容管理'],
  ['07-09 16:12', '完成爱美家 GEO 关键词复盘', '增长实验'],
  ['07-08 11:36', '整理古钱币平台运营素材', '素材归档'],
];

export default function AdminDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSlug = searchParams.get('project');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('全部');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const allProjects = featuredProjectIds.map((id) => projects[id]);
  const selected = allProjects.find((item) => item.slug === initialSlug) ?? allProjects[0];

  const visibleProjects = useMemo(() => allProjects.filter((project) => {
    const matchesQuery = `${project.title}${project.eyebrow}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === '全部' || statusMap[project.id][0] === filter;
    return matchesQuery && matchesFilter;
  }), [allProjects, query, filter]);

  const selectProject = (project) => {
    setSearchParams({ project: project.slug });
    setSidebarOpen(false);
  };

  const selectedMetrics = resolveMetrics(selected.metricIds);

  return (
    <main className={`admin-shell${sidebarOpen ? ' is-sidebar-open' : ''}`}>
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand"><span>ZZB</span><div><strong>项目工作台</strong><small>DEMO ADMIN</small></div></div>
        <nav aria-label="后台导航">
          {['概览', '项目', '内容', '素材库', '成果档案'].map((item, index) => <button className={index === 0 ? 'active' : ''} key={item}><i>{String(index + 1).padStart(2, '0')}</i>{item}</button>)}
        </nav>
        <div className="admin-sidebar__footer"><Link to="/">← 返回个人网站</Link><span>演示数据 · 可替换</span></div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <button className="admin-menu" type="button" onClick={() => setSidebarOpen((value) => !value)} aria-label="打开后台导航">☰</button>
          <div><small>WORKSPACE / OVERVIEW</small><strong>项目运营总览</strong></div>
          <div className="admin-topbar__actions"><span><i /> 系统正常</span><Link to={`/projects/${selected.slug}`}>查看项目 ↗</Link></div>
        </header>

        <div className="admin-content">
          <section className="admin-welcome">
            <div><span>2026 / PERSONAL OPS</span><h1>把项目推进，<br />放在一个工作台。</h1><p>这是一个可以继续扩展的演示后台。项目、内容、素材和成果都围绕真实案例组织。</p></div>
            <div className="admin-welcome__orb" aria-hidden="true"><i /><i /><i /></div>
          </section>

          <section className="admin-stat-grid" aria-label="后台指标">
            {[
              ['05', '进行中项目', '+1 本月'],
              ['11', '专利成果', '已归档'],
              ['86%', '最高进度', '中邮机器人'],
              ['04', '近期更新', '过去 7 天'],
            ].map(([value, label, note]) => <article key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
          </section>

          <div className="admin-grid">
            <section className="admin-panel admin-projects-panel">
              <div className="admin-panel__header"><div><span>PROJECTS</span><h2>项目列表</h2></div><button>＋ 新建</button></div>
              <div className="admin-toolbar">
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索项目" aria-label="搜索项目" />
                <select value={filter} onChange={(event) => setFilter(event.target.value)} aria-label="筛选状态">
                  {['全部', '验证中', '方案迭代', '内容建设', '运营中', '增长测试'].map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div className="admin-project-list">
                {visibleProjects.map((project, index) => {
                  const [status, progress] = statusMap[project.id];
                  return (
                    <button className={selected.id === project.id ? 'active' : ''} onClick={() => selectProject(project)} key={project.id}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div><strong>{project.title}</strong><small>{status}</small></div>
                      <div className="admin-progress"><i style={{ '--progress': `${progress}%` }} /><small>{progress}%</small></div>
                    </button>
                  );
                })}
              </div>
            </section>

            <aside className="admin-panel admin-detail-panel">
              <div className="admin-panel__header"><div><span>SELECTED</span><h2>当前项目</h2></div><Link to={`/projects/${selected.slug}`}>↗</Link></div>
              <div className="admin-detail-visual"><span>{selected.eyebrow}</span><strong>{selected.title}</strong><i /></div>
              <p>{selected.summary}</p>
              <div className="admin-detail-metrics">
                {(selectedMetrics.length ? selectedMetrics : selected.facts).slice(0, 3).map((item) => <div key={item.id ?? item.label}><strong>{item.id ? formatMetric(item) : item.value}</strong><span>{item.label}</span></div>)}
              </div>
            </aside>

            <section className="admin-panel admin-activity-panel">
              <div className="admin-panel__header"><div><span>ACTIVITY</span><h2>最近更新</h2></div><button>查看全部</button></div>
              <div className="admin-activity-list">{activities.map(([time, title, type]) => <article key={title}><span>{time}</span><div><strong>{title}</strong><small>{type}</small></div><i /></article>)}</div>
            </section>

            <section className="admin-panel admin-quick-panel">
              <div className="admin-panel__header"><div><span>QUICK ACTIONS</span><h2>快捷入口</h2></div></div>
              <div>{['新增项目记录', '上传项目素材', '创建成果档案', '导出项目报告'].map((item, index) => <button key={item}><i>{String(index + 1).padStart(2, '0')}</i><span>{item}</span><b>↗</b></button>)}</div>
            </section>
          </div>
        </div>
      </section>
      <button className="admin-overlay" type="button" onClick={() => setSidebarOpen(false)} aria-label="关闭后台导航" />
    </main>
  );
}
