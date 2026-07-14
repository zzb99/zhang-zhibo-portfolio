import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { featuredProjectIds, projects } from '../data/content';

export default function FeaturedProjects() {
  const orderedProjects = featuredProjectIds.map((id) => projects[id]).filter(Boolean);

  return (
    <section id="projects" className="section projects-section">
      <SectionTitle
        eyebrow="SELECTED PROJECTS · 01—05"
        title={<>持续推进的，<br /><em>真实项目。</em></>}
        lead="不做分类墙。每个项目都承载它自己的网站、系统、后台或工作流。"
      />
      <div className="project-index">
        {orderedProjects.map((project, index) => (
          <Link className="project-index__item" to={`/projects/${project.slug}`} data-reveal style={{ '--delay': `${index * 65}ms` }} key={project.id}>
            <span className="project-index__number">{String(index + 1).padStart(2, '0')}</span>
            <div><span className="project-index__eyebrow">{project.eyebrow}</span><h3>{project.title}</h3></div>
            <p>{project.statement}</p>
            <span className="project-index__action">查看项目 ↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
