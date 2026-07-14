import React from 'react';
import { Link } from 'react-router-dom';

export function AppleGlassButton({ children, className = '', href, to, variant = 'glass', ...props }) {
  const classes = `apple-glass-button apple-glass-button--${variant} ${className}`.trim();
  const content = <><span className="apple-glass-button__highlight" aria-hidden="true" />{children}</>;

  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  return <a className={classes} href={href} {...props}>{content}</a>;
}

export function AppleMacWindow({ children, onScroll, onScrollValue, scrollRef, scrollValue = 0, scrollable = false, title = 'Title' }) {
  return (
    <section className={`apple-window${scrollable ? ' apple-window--scrollable' : ''}`} aria-label={title}>
      <div className="apple-window__edge" aria-hidden="true" />
      <header className="apple-window__titlebar">
        <span className="apple-window__controls" aria-hidden="true"><i /><i /><i /></span>
        <span className="apple-window__title">{title}</span>
      </header>
      <div className="apple-window__content" ref={scrollRef} onScroll={onScroll}>{children}</div>
      {scrollable && <input className="apple-window__scrollbar" aria-label={`${title} 滚动条`} type="range" min="0" max="1" step="0.01" value={scrollValue} onInput={onScrollValue} />}
    </section>
  );
}
