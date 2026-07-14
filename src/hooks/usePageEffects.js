import { useEffect, useState } from 'react';

export function useActiveSection(navItems, { enabled = true } = {}) {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      setScrolled(window.scrollY > 72);
      return undefined;
    }

    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
    const activateVisibleSection = () => {
      const viewportAnchor = window.innerHeight * 0.32;
      const sectionAtAnchor = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;
      });

      if (sectionAtAnchor) setActive(sectionAtAnchor.id);
    };

    const observer = new IntersectionObserver(() => {
      activateVisibleSection();
    }, {
      threshold: [0, 0.1, 0.25, 0.5],
      rootMargin: '-20% 0px -55% 0px',
    });

    sections.forEach((section) => observer.observe(section));

    const updatePageState = () => {
      setScrolled(window.scrollY > 72);
      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atPageBottom && sections.at(-1)) setActive(sections.at(-1).id);
      else activateVisibleSection();
    };

    updatePageState();
    window.addEventListener('scroll', updatePageState, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updatePageState);
    };
  }, [enabled, navItems]);

  return { active, scrolled };
}

export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('show'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show')),
      { threshold: 0.08, rootMargin: '0px 0px -3% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
