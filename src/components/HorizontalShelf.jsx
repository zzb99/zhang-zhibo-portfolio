import React, { useCallback, useEffect, useRef, useState } from 'react';
import './HorizontalShelf.css';

export default function HorizontalShelf({ children, ariaLabel, className = '', trackClassName = '' }) {
  const trackRef = useRef(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    const edgeThreshold = 8;
    setCanScrollBack(track.scrollLeft > edgeThreshold);
    setCanScrollForward(track.scrollLeft < max - edgeThreshold);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    [...track.children].forEach((child) => observer.observe(child));
    track.addEventListener('scroll', updateControls, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener('scroll', updateControls);
    };
  }, [children, updateControls]);

  const cardDistance = () => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return 320;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
    return firstCard.getBoundingClientRect().width + gap;
  };

  const move = (direction) => {
    trackRef.current?.scrollBy({ left: direction * cardDistance(), behavior: 'smooth' });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
  };

  return (
    <section className={`horizontal-shelf ${className}`} aria-label={ariaLabel}>
      <div className="horizontal-shelf__controls" aria-label={`${ariaLabel}切换按钮`}>
        <button type="button" onClick={() => move(-1)} disabled={!canScrollBack} aria-label={`向左浏览${ariaLabel}`}>‹</button>
        <button type="button" onClick={() => move(1)} disabled={!canScrollForward} aria-label={`向右浏览${ariaLabel}`}>›</button>
      </div>
      <div
        ref={trackRef}
        className={`horizontal-shelf__track ${trackClassName}`}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        aria-label={`${ariaLabel}，可左右滚动`}
      >
        {children}
      </div>
    </section>
  );
}
