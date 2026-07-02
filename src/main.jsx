import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import PageSections, { Tags } from './sections/PageSections';
import { navItems } from './data/content';
import { useActiveSection, useReveal } from './hooks/usePageEffects';
import './style.css';

document.documentElement.classList.add('js');

function Header() {
  const { active, scrolled } = useActiveSection(navItems);
  const activeIndex = Math.max(0, navItems.findIndex(([id]) => id === active));
  return (
    <header className={`header ${scrolled ? 'is-compact' : ''}`}>
      <nav
        className={`nav-pill ${active === 'about' ? 'about-active' : ''}`}
        aria-label="主导航"
        style={{
          '--active-index': activeIndex,
          '--mobile-active-index': Math.max(0, activeIndex - 1),
          '--nav-items': navItems.length,
        }}
      >
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function ProjectDrawer({ project, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previous = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )].filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  return (
    <div className="drawer-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article ref={dialogRef} className="project-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <button ref={closeRef} className="drawer-close" onClick={onClose} aria-label="关闭详情">×</button>
        <div className="drawer-topline">
          <span>{project.eyebrow}</span>
          <span>PROJECT DETAIL</span>
        </div>
        <h2 id="drawer-title">{project.title}</h2>
        <h3>{project.statement}</h3>
        <p className="drawer-summary">{project.summary}</p>
        <div className="drawer-metrics">
          {project.metrics.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
        <div className="drawer-detail-grid">
          <span>WHAT I DID</span>
          <ol>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ol>
        </div>
        <Tags items={project.tags} />
      </article>
    </div>
  );
}

function App() {
  useReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header />
      <PageSections onSelectProject={setSelectedProject} />

      <footer><span>© 2026 ZHANG ZHIBO</span><span>DESIGNED FOR IMPACT · BUILT FOR DELIVERY</span></footer>
      {selectedProject && <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
