# UI 核心源码完整导出

## `src\components\BorderGlow.css`

```css
.border-glow-card { --edge-proximity:0; --cursor-angle:45deg; --edge-sensitivity:30; --color-sensitivity:calc(var(--edge-sensitivity) + 20); --border-radius:28px; --glow-padding:40px; --cone-spread:25; position:relative; display:grid; isolation:isolate; overflow:visible; border:1px solid rgb(24 39 68 / 12%); border-radius:var(--border-radius); background:var(--card-bg); box-shadow:0 2px 3px rgb(24 39 68 / 4%),0 12px 34px rgb(24 39 68 / 6%); }
.border-glow-card::before,.border-glow-card::after,.border-glow-card>.edge-light { content:""; position:absolute; inset:0; z-index:-1; border-radius:inherit; transition:opacity .25s ease-out; }.border-glow-card:not(:hover):not(.sweep-active)::before,.border-glow-card:not(:hover):not(.sweep-active)::after,.border-glow-card:not(:hover):not(.sweep-active)>.edge-light { opacity:0; transition:opacity .75s ease-in-out; }
.border-glow-card::before { border:1px solid transparent; background:linear-gradient(var(--card-bg) 0 100%) padding-box,linear-gradient(transparent 0 100%) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box,var(--gradient-base) border-box; opacity:calc((var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))); mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%)); }
.border-glow-card::after { border:1px solid transparent; background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box,var(--gradient-base) padding-box; opacity:calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))); mix-blend-mode:soft-light; mask-image:linear-gradient(to bottom,black,black),radial-gradient(ellipse at 50% 50%,black 40%,transparent 65%),conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%); mask-composite:subtract,add; }
.border-glow-card>.edge-light { inset:calc(var(--glow-padding) * -1); z-index:1; pointer-events:none; mix-blend-mode:plus-lighter; opacity:calc((var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))); mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%); }.border-glow-card>.edge-light::before { content:""; position:absolute; inset:var(--glow-padding); border-radius:inherit; box-shadow:inset 0 0 0 1px var(--glow-color),inset 0 0 12px var(--glow-color-30),0 0 7px var(--glow-color-40),0 0 24px var(--glow-color-20),0 0 42px var(--glow-color-10); }
.border-glow-inner { position:relative; z-index:1; display:flex; flex-direction:column; overflow:hidden; border-radius:inherit; }
```

## `src\components\HorizontalShelf.css`

```css
.horizontal-shelf {
  width: 100%;
}

.horizontal-shelf__controls {
  width: var(--max);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: -50px auto 18px;
}

.horizontal-shelf__controls button {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  padding: 0 0 3px;
  border-radius: 50%;
  color: #303033;
  background: #e2e2e5;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
}

.horizontal-shelf__controls button:hover:not(:disabled) {
  background: #d6d6d9;
  transform: scale(1.03);
}

.horizontal-shelf__controls button:disabled {
  opacity: 0.3;
  cursor: default;
}

.horizontal-shelf__track {
  width: min(1320px, calc(100vw - 48px));
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 6px 16% 36px 10px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 10px;
  scrollbar-width: none;
}

.horizontal-shelf__track::-webkit-scrollbar {
  display: none;
}

.horizontal-shelf__track:focus-visible {
  outline: 3px solid rgba(0, 113, 227, 0.34);
  outline-offset: 4px;
}

.horizontal-shelf__track > * {
  flex: 0 0 clamp(300px, 30.5%, 380px);
  scroll-snap-align: start;
}

@media (max-width: 620px) {
  .horizontal-shelf__controls {
    display: none;
  }

  .horizontal-shelf__track {
    width: 100%;
    gap: 16px;
    padding: 6px 16% 28px 14px;
    scroll-padding-inline: 14px;
  }

}
```

## `src\routes\ProjectPage.css`

```css
.project-page {
  min-height: 100vh;
  color: var(--ink);
  background: #f8fbff;
}

.project-page__hero,
.project-page__narrative,
.project-page__footer-nav {
  width: var(--max);
  margin: 0 auto;
}

.project-page__hero {
  min-height: 86vh;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: clamp(48px, 8vw, 128px);
  align-items: end;
  padding: 180px 0 90px;
  border-bottom: 1px solid var(--line);
}

.project-page__hero-copy > span,
.case-section > div > span,
.project-not-found > span {
  color: var(--blue);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.project-page__hero h1 {
  max-width: 820px;
  margin: 24px 0;
  font-size: clamp(58px, 8vw, 118px);
  line-height: 0.92;
  letter-spacing: -0.055em;
}

.project-page__hero-copy > p {
  font-size: clamp(20px, 2.4vw, 34px);
  letter-spacing: -0.03em;
}

.project-page__summary { padding-bottom: 8px; }
.project-page__summary > p { color: var(--muted); font-size: 18px; line-height: 1.75; }
.project-page__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
.project-page__tags span { padding: 8px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 12px; }

.case-section {
  display: grid;
  grid-template-columns: minmax(220px, 0.42fr) 1fr;
  gap: clamp(40px, 8vw, 140px);
  padding: clamp(72px, 10vw, 140px) 0;
  border-bottom: 1px solid var(--line);
}

.case-section h2 { margin-top: 16px; font-size: clamp(34px, 4vw, 58px); letter-spacing: -0.04em; }
.case-section > p,
.case-section > div:last-child > p { max-width: 820px; font-size: clamp(20px, 2.2vw, 30px); line-height: 1.6; letter-spacing: -0.02em; }

.case-process ol { display: grid; gap: 0; }
.case-process li { display: grid; grid-template-columns: 54px 1fr; gap: 24px; padding: 26px 0; border-top: 1px solid var(--line); }
.case-process li span { color: var(--blue); font-weight: 800; }
.case-process li p { font-size: 19px; line-height: 1.6; }

.evidence-panel { min-height: 300px; padding: clamp(28px, 5vw, 64px); border: 1px solid rgba(0, 113, 227, 0.18); border-radius: 28px; background: linear-gradient(145deg, #fff, #eef6ff); }
.evidence-panel strong { color: var(--blue); font-size: 12px; letter-spacing: 0.12em; }
.evidence-panel p { margin: 54px 0 70px; font-size: clamp(22px, 2.6vw, 36px); line-height: 1.45; }
.evidence-panel small { color: var(--muted); line-height: 1.6; }

.project-page__metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-top: 48px; }
.project-page__metrics article { padding: 28px; border: 1px solid var(--line); border-radius: 22px; background: rgba(255, 255, 255, 0.7); }
.project-page__metrics strong { display: block; font-size: clamp(30px, 4vw, 54px); letter-spacing: -0.04em; }
.project-page__metrics span { display: block; margin-top: 8px; color: var(--muted); font-size: 13px; }

.project-page__footer-nav { display: flex; justify-content: space-between; padding: 64px 0 100px; }
.project-page__footer-nav a,
.project-not-found a { color: var(--blue); font-weight: 750; text-decoration: none; }
.project-not-found { display: grid; place-content: center; gap: 24px; padding: 32px; text-align: center; }
.project-not-found h1 { font-size: clamp(42px, 7vw, 86px); }

@media (max-width: 760px) {
  .project-page__hero { min-height: auto; grid-template-columns: 1fr; gap: 54px; padding: 140px 0 70px; }
  .case-section { grid-template-columns: 1fr; gap: 42px; }
  .project-page__footer-nav { gap: 24px; flex-direction: column; }
}
```

## `src\style.css`

```css
@import './styles/base.css';
@import './styles/navigation.css';
@import './styles/sections.css';
@import './styles/drawer.css';
```

## `src\styles\base.css`

```css
:root {
  --bg: #f5f5f7;
  --surface: rgba(255, 255, 255, 0.88);
  --surface-solid: #ffffff;
  --ink: #1d1d1f;
  --muted: #6e6e73;
  --soft: #86868b;
  --line: rgba(29, 29, 31, 0.1);
  --line-bright: rgba(255, 255, 255, 0.82);
  --blue: #0071e3;
  --radius-xl: 30px;
  --radius-lg: 24px;
  --shadow-card: 0 18px 52px rgba(24, 32, 52, 0.075), inset 0 1px 0 rgba(255, 255, 255, 0.92);
  --shadow-hover: 0 26px 72px rgba(24, 32, 52, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1);
  --max: min(1120px, calc(100vw - 48px));
  --font-display: "Inter Variable", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
  --font-text: "Inter Variable", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
  --font-mono: "SFMono-Regular", "JetBrains Mono", Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body { margin: 0; color: var(--ink); background: var(--bg); font-family: var(--font-text); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; overflow-x: hidden; }
body::before { content: none; }
button, a { color: inherit; font: inherit; }
button { border: 0; }
a { text-decoration: none; }
button:focus-visible, a:focus-visible { outline: 3px solid rgba(0, 113, 227, 0.34); outline-offset: 4px; }
```

## `src\styles\drawer.css`

```css
.drawer-backdrop { position: fixed; inset: 0; z-index: 200; display: grid; place-items: center; padding: 30px; background: rgba(10, 10, 12, 0.52); backdrop-filter: blur(24px) saturate(140%); animation: backdropIn 0.35s ease both; }
.project-drawer { width: min(1040px, 100%); max-height: calc(100vh - 60px); position: relative; padding: 58px; border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 38px; background: radial-gradient(circle at 86% 8%, rgba(86, 157, 255, 0.16), transparent 25%), #f8f8fa; box-shadow: 0 60px 180px rgba(0, 0, 0, 0.34), inset 0 1px 0 #fff; overflow-y: auto; scrollbar-width: none; animation: drawerIn 0.7s cubic-bezier(0.25, 1, 0.5, 1) both; }
.project-drawer::-webkit-scrollbar { display: none; }
.drawer-close { width: 44px; height: 44px; position: absolute; top: 24px; right: 24px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: #1d1d1f; font-size: 27px; line-height: 1; cursor: pointer; transition: transform 0.3s ease; }
.drawer-close:hover { transform: rotate(90deg) scale(1.06); }
.drawer-topline { display: flex; justify-content: space-between; padding-right: 52px; margin: 0; color: var(--soft); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.28em; text-transform: uppercase; }
.project-drawer h2 { max-width: 820px; margin: 48px 0 0; font-family: var(--font-display); font-size: clamp(44px, 5.4vw, 70px); line-height: 0.98; letter-spacing: -0.025em; }
.project-drawer h3 { margin: 24px 0 0; color: var(--blue); font-size: clamp(24px, 3vw, 36px); letter-spacing: -0.015em; }
.drawer-summary { max-width: 790px; margin: 30px 0 0; color: var(--muted); font-size: 19px; line-height: 1.7; }
.drawer-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 50px; }
.drawer-metrics div { min-height: 140px; display: grid; align-content: center; gap: 12px; padding: 24px; border: 1px solid var(--line-bright); border-radius: 24px; background: rgba(255, 255, 255, 0.8); box-shadow: 0 14px 36px rgba(24, 32, 52, 0.07), inset 0 1px 0 #fff; }
.drawer-metrics strong { font-family: var(--font-display); font-size: clamp(32px, 4vw, 52px); letter-spacing: -0.025em; }
.drawer-metrics span { color: var(--soft); font-size: 13px; }
.drawer-detail-grid { display: grid; grid-template-columns: 180px 1fr; gap: 32px; margin-top: 48px; padding-top: 36px; border-top: 1px solid var(--line); }
.drawer-detail-grid > span { color: var(--soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em; }
.drawer-detail-grid ol { display: grid; gap: 18px; margin: 0; padding-left: 22px; color: #404044; font-size: 17px; line-height: 1.6; }
@keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes drawerIn { from { opacity: 0; transform: translateY(60px) scale(0.92); } to { opacity: 1; transform: none; } }

@media (max-width: 620px) {
  .drawer-backdrop { padding: 0; align-items: end; }
  .project-drawer { width: 100%; max-height: 92vh; padding: 34px 22px; border-radius: 28px 28px 0 0; }
  .drawer-metrics { grid-template-columns: 1fr 1fr; }
  .drawer-detail-grid { grid-template-columns: 1fr; gap: 18px; }
}
```

## `src\styles\navigation.css`

```css
.header { position: fixed; inset: 20px 0 auto; z-index: 50; display: flex; justify-content: center; align-items: center; padding: 0; pointer-events: none; transition: inset 0.58s cubic-bezier(0.22, 1, 0.36, 1); }
.nav-pill { --active-index: 0; --nav-items: 6; pointer-events: auto; position: relative; display: grid; grid-template-columns: repeat(var(--nav-items), minmax(96px, 1fr)); gap: 4px; align-items: center; padding: 7px; border: 0; border-radius: 999px; background: #fff; overflow: hidden; box-shadow: inset 0 0 5px 4px #fff, inset 0 0 20px 1px rgba(0, 0, 0, 0.28), 10px 20px 30px rgba(0, 0, 0, 0.096), inset 0 0 0 3px rgba(0, 0, 0, 0.2); font-family: var(--font-text); transform: perspective(240px); transform-style: preserve-3d; transition: grid-template-columns 0.58s cubic-bezier(0.22, 1, 0.36, 1), padding 0.58s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, transform 0.4s ease; }
.header.is-compact { inset: 10px 0 auto; }
.header.is-compact .nav-pill { grid-template-columns: repeat(var(--nav-items), minmax(82px, 1fr)); padding: 5px; box-shadow: inset 0 0 4px 3px #fff, inset 0 0 16px 1px rgba(0, 0, 0, 0.25), 8px 14px 24px rgba(0, 0, 0, 0.09), inset 0 0 0 2px rgba(0, 0, 0, 0.2); }
.nav-pill::before { content: ""; position: absolute; top: 7px; bottom: 7px; left: 7px; z-index: 0; width: calc((100% - 34px) / var(--nav-items)); border-radius: 999px; background: linear-gradient(315deg, #000 0%, #414141 70%); box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 8px 8px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.18); transform: translate3d(calc(var(--active-index) * (100% + 4px)), 0, 0); transition: transform 0.58s cubic-bezier(0.22, 1, 0.36, 1); will-change: transform; }
.header.is-compact .nav-pill::before { top: 5px; bottom: 5px; left: 5px; width: calc((100% - 30px) / var(--nav-items)); }
.nav-pill a { position: relative; z-index: 1; min-width: 96px; padding: 12px 20px; border-radius: 999px; color: #404040; font-size: 15px; line-height: 1; text-align: center; white-space: nowrap; transition: color 0.34s ease, transform 0.34s cubic-bezier(0.22, 1, 0.36, 1); }
.header.is-compact .nav-pill a { min-width: 82px; padding: 9px 14px; font-size: 14px; }
.nav-pill a.active { color: #fff; }
.nav-pill a:not(.active):hover { color: #000; transform: translateY(-1px); }
.nav-pill--project { width: min(420px, calc(100vw - 32px)); grid-template-columns: 1fr auto; padding: 6px 8px 6px 18px; }
.nav-pill--project::before { display: none; }
.nav-pill--project a { width: auto; justify-content: flex-start; }
.nav-pill--project span { padding: 10px 14px; color: var(--muted); font-size: 11px; font-weight: 800; letter-spacing: 0.1em; }

@media (hover: hover) and (pointer: fine) { .nav-pill:hover { transform: perspective(240px) rotateX(2deg) rotateY(-2deg); } }
@media (max-width: 620px) {
  .header { inset: 10px 0 auto; }
  .nav-pill { width: calc(100vw - 24px); grid-template-columns: repeat(var(--nav-items), minmax(0, 1fr)); gap: 2px; padding: 5px; }
  .nav-pill::before { left: 5px; top: 5px; bottom: 5px; width: calc((100% - 20px) / var(--nav-items)); transform: translate3d(calc(var(--active-index) * (100% + 2px)), 0, 0); }
  .nav-pill a, .header.is-compact .nav-pill a { min-width: 0; padding: 9px 2px; font-size: 11px; }
  .nav-pill--project { grid-template-columns: 1fr auto; }
}
```

## `src\styles\sections.css`

```css
.cinematic-grid {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.cinematic-grid::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background-image:
    linear-gradient(rgba(29, 29, 31, 0.032) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 29, 31, 0.032) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, #000 0%, transparent 76%);
}

.hero {
  min-height: 830px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 154px 24px 86px;
  scroll-margin-top: 96px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.76), rgba(245, 245, 247, 0.9));
}

.hero-aura {
  display: none;
}

.hero-copy {
  width: var(--max);
  display: grid;
  justify-items: start;
  text-align: left;
}

.hero-layout {
  width: var(--max);
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 64px;
  align-items: end;
}

.hero-layout .hero-copy {
  width: auto;
}

.hero-intro {
  padding: 28px 0 4px 30px;
  border-left: 1px solid var(--line);
}

.hero-intro > span {
  color: var(--soft);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.hero-intro > p {
  margin: 22px 0 0;
  color: #3b3b3f;
  font-size: clamp(18px, 1.7vw, 23px);
  line-height: 1.55;
  font-weight: 600;
}

.hero-intro > div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.hero-intro a {
  padding: 10px 15px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  font-size: 13px;
  font-weight: 650;
}

.hero-intro a:first-child {
  color: #fff;
  background: #111;
}

.overline,
.section-heading > span,
.project-tile > span,
.feature-copy > span,
.contact-copy > span {
  margin: 0;
  color: var(--soft);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 1050px;
  margin: 32px 0 0;
  font-family: var(--font-display);
  font-size: clamp(70px, 9.5vw, 122px);
  line-height: 0.9;
  font-weight: 850;
  letter-spacing: -0.045em;
}

.hero h1 span,
.section-heading em {
  color: var(--ink);
  background: none;
  animation: none;
}

.hero-caption {
  margin: 30px 0 0;
  color: var(--muted);
  font-size: clamp(15px, 1.5vw, 19px);
  letter-spacing: -0.025em;
}

.impact-item {
  min-height: 142px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 26px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.55s ease;
}

.impact-item::before {
  display: none;
}

.impact-item:last-child { border-right: 0; }

.impact-item:hover {
  transform: scale(1.01);
  box-shadow: 3px 7px 18px rgba(0, 0, 0, 0.1);
}

.hero-metrics {
  width: var(--max);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 72px auto 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.ticker {
  display: block;
  color: #101012;
  font-family: var(--font-display);
  font-size: clamp(38px, 3.8vw, 52px);
  line-height: 0.88;
  font-weight: 820;
  letter-spacing: -0.035em;
}

.impact-item > span {
  margin-top: 13px;
  color: #252529;
  font-size: 15px;
  font-weight: 690;
}

.impact-item small {
  margin-top: 6px;
  color: var(--soft);
  font-size: 13px;
}

.scroll-cue {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 52px;
  color: var(--soft);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
}

.scroll-cue i {
  width: 44px;
  height: 1px;
  position: relative;
  background: #b6b6bb;
}

.scroll-cue i::after {
  content: "";
  position: absolute;
  right: 0;
  top: -2px;
  width: 5px;
  height: 5px;
  border-right: 1px solid #8d8d92;
  border-bottom: 1px solid #8d8d92;
  transform: rotate(-45deg);
}

.section {
  padding: 144px 24px;
  scroll-margin-top: 88px;
}

.section-heading {
  width: var(--max);
  margin: 0 auto 68px;
}

.section-heading.is-center {
  text-align: center;
}

.section-heading.is-center h2,
.section-heading.is-center p {
  margin-left: auto;
  margin-right: auto;
}

.section-heading h2 {
  max-width: 1040px;
  margin: 22px 0 0;
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 76px);
  line-height: 0.98;
  font-weight: 790;
  letter-spacing: -0.025em;
}

.section-heading p {
  max-width: 690px;
  margin: 26px 0 0;
  color: var(--muted);
  font-size: clamp(17px, 1.7vw, 21px);
  line-height: 1.65;
  letter-spacing: -0.035em;
}

.skills-section {
  position: relative;
  background:
    radial-gradient(circle at 18% 22%, rgba(90, 158, 255, 0.09), transparent 24%),
    radial-gradient(circle at 84% 72%, rgba(153, 116, 255, 0.07), transparent 25%),
    #f7f8fa;
}

.skill-flip-card {
  min-width: 0;
  height: 460px;
  position: relative;
  padding: 0;
  border: 0;
  border-radius: 28px;
  background: transparent;
  text-align: left;
  cursor: pointer;
  perspective: 1400px;
  isolation: isolate;
}

.skill-flip-inner {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  border-radius: inherit;
  transform-style: preserve-3d;
  transition: transform 0.78s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.skill-flip-card:hover .skill-flip-inner,
.skill-flip-card:focus-visible .skill-flip-inner,
.skill-flip-card.is-flipped .skill-flip-inner {
  transform: rotateY(180deg);
}

.skill-face {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: inherit;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.skill-front {
  color: var(--ink);
  border: 1px solid rgba(29, 29, 31, 0.11);
  background:
    radial-gradient(circle at 88% 8%, rgba(96, 165, 250, 0.1), transparent 26%),
    rgba(255, 255, 255, 0.94);
  box-shadow: 0 20px 58px rgba(24, 32, 52, 0.075), inset 0 1px 0 #fff;
}

.skill-back {
  color: #f5f5f7;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at 84% 10%, rgba(76, 148, 255, 0.28), transparent 28%),
    linear-gradient(145deg, #1b1b1f, #050506);
  box-shadow: 0 28px 78px rgba(0, 0, 0, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.13);
  transform: rotateY(180deg);
}

.skill-index {
  color: var(--soft);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.skill-value {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-top: 42px;
  font-family: var(--font-display);
  font-size: clamp(48px, 5vw, 68px);
  line-height: 0.86;
  font-weight: 790;
  letter-spacing: -0.035em;
}

.skill-value small {
  margin-bottom: 5px;
  font-size: 0.55em;
  letter-spacing: -0.015em;
}

.skill-label {
  margin-top: 14px;
  color: var(--soft);
  font-size: 13px;
  font-weight: 650;
}

.skill-front > i {
  width: 38px;
  height: 1px;
  margin-top: 30px;
  background: rgba(29, 29, 31, 0.16);
}

.skill-face > strong {
  margin-top: 34px;
  font-family: var(--font-display);
  font-size: 26px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.skill-summary,
.skill-back-copy {
  margin-top: 18px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.68;
}

.skill-face > b {
  margin-top: auto;
  color: var(--blue);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
}

.skill-back .skill-index { color: rgba(255, 255, 255, 0.46); }
.skill-back > strong { margin-top: 64px; color: #fff; font-size: 30px; }
.skill-back-copy { color: rgba(255, 255, 255, 0.64); }
.skill-back > b { color: rgba(255, 255, 255, 0.52); }

.skill-back-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 26px;
}

.skill-back-tags em {
  padding: 7px 10px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.06);
  font-size: 11px;
  font-style: normal;
}

.skills-touch-hint {
  display: none;
  width: var(--max);
  margin: 24px auto 0;
  color: var(--soft);
  text-align: center;
  font-size: 12px;
}

.methodology-grid {
  width: var(--max);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin: 0 auto;
}

.proof-section {
  position: relative;
  padding-left: 0;
  padding-right: 0;
  background: #f5f5f7;
}

.proof-section .section-heading em,
.work-section .section-heading em {
  color: var(--muted);
}

.showcase-card {
  box-sizing: border-box;
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 34px;
  color: var(--ink);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  text-align: left;
  cursor: pointer;
  user-select: none;
  scroll-snap-align: start;
  overflow: hidden;
  transition: border-color 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease;
}

.showcase-card:hover {
  border-color: rgba(0, 0, 0, 0.1);
  transform: scale(1.01);
  box-shadow: 3px 7px 18px rgba(0, 0, 0, 0.11);
}

.showcase-card:active {
  transform: scale(0.985);
}

.showcase-card.is-dark {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.1);
  background: #111;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.16);
}

.showcase-kicker {
  color: #a04c18;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.showcase-card.is-dark .showcase-kicker {
  color: #ff9f63;
}

.showcase-card h3 {
  margin: 18px 0 0;
  font-family: var(--font-display);
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.05;
  font-weight: 760;
  letter-spacing: -0.035em;
}

.showcase-card > p {
  margin: 14px 0 0;
  color: #444448;
  font-size: 17px;
  line-height: 1.45;
  font-weight: 580;
}

.showcase-description {
  max-width: 30ch;
  margin-top: 36px;
  color: #5c5c61;
  font-size: 15px;
  line-height: 1.75;
}

.showcase-card.is-dark .showcase-description {
  color: rgba(255, 255, 255, 0.64);
}

.showcase-action {
  margin-top: auto;
  color: var(--blue);
  font-size: 14px;
  font-weight: 650;
}

.showcase-card.is-dark .showcase-action {
  color: #65b5ff;
}

.showcase-card.is-dark > p {
  color: rgba(255, 255, 255, 0.76);
}

.project-tile,
.project-feature {
  position: relative;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.58s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.58s ease,
    border-color 0.58s ease;
}

.project-tile:hover,
.project-feature:hover {
  transform: translateY(-4px);
  box-shadow: none;
}

.project-tile > b {
  margin-top: auto;
  color: var(--blue);
  font-size: 14px;
}

.projects-section {
  background:
    radial-gradient(circle at 80% 14%, rgba(88, 153, 255, 0.1), transparent 24%),
    #f5f5f7;
}

.featured-project-grid {
  width: var(--max);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin: 20px auto 0;
}

.featured-project-grid .project-tile {
  min-height: 430px;
}

.feature-copy > b {
  display: inline-block;
  margin-top: 28px;
  color: var(--blue);
  font-size: 14px;
}

.feature-glow {
  grid-column: 1 / -1;
  width: 100%;
  border-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 24px 72px rgba(40, 65, 100, 0.09);
}

.feature-glow .border-glow-inner {
  overflow: hidden;
  border-radius: inherit;
}

.project-feature {
  width: 100%;
  min-height: 480px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  padding: 48px;
  background:
    radial-gradient(circle at 82% 36%, rgba(98, 167, 255, 0.12), transparent 28%),
    linear-gradient(145deg, #fff, #f3f7fb);
}

.feature-copy {
  align-self: end;
}

.feature-copy h3 {
  max-width: 700px;
  margin: 28px 0 0;
  font-family: var(--font-display);
  font-size: clamp(48px, 5.4vw, 70px);
  line-height: 0.94;
  letter-spacing: -0.025em;
}

.feature-copy > p {
  margin: 24px 0 34px;
  color: var(--muted);
  font-size: clamp(18px, 1.8vw, 23px);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.tags span {
  padding: 8px 13px;
  border: 1px solid rgba(29, 29, 31, 0.09);
  border-radius: 999px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.68);
  font-size: 12px;
  font-weight: 650;
}

.robot-visual {
  min-height: 330px;
  position: relative;
  display: grid;
  place-items: center;
}

.robot-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 113, 227, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 113, 227, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle, #000 0%, transparent 70%);
}

.robot-core {
  width: 210px;
  height: 210px;
  border: 1px solid rgba(0, 113, 227, 0.18);
  border-radius: 50%;
  box-shadow: inset 0 0 70px rgba(70, 154, 255, 0.08), 0 30px 70px rgba(55, 105, 170, 0.13);
}

.robot-core::before,
.robot-core::after {
  content: "";
  position: absolute;
  border: 1px solid rgba(0, 113, 227, 0.17);
  border-radius: 50%;
}

.robot-core::before { inset: 34px; }
.robot-core::after { inset: 72px; }
.robot-core b { width: 64px; height: 64px; border-radius: 20px; background: linear-gradient(145deg, #0a7ee8, #63c3ff); box-shadow: 0 22px 46px rgba(0, 113, 227, 0.36); }
.robot-core i { position: absolute; width: 10px; height: 10px; border-radius: 50%; background: #6faeff; box-shadow: 0 0 22px #6faeff; }
.robot-core i:first-child { top: 20px; }
.robot-core i:nth-child(2) { right: 32px; bottom: 44px; background: #a87cff; }
.robot-visual > span { position: absolute; right: 8%; bottom: 8%; font-family: var(--font-display); font-size: 28px; font-weight: 760; letter-spacing: -0.02em; }

.project-tile {
  min-height: 390px;
  display: flex;
  flex-direction: column;
  padding: 36px;
  border: 0;
  border-top: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.project-tile h3 {
  margin: 36px 0 0;
  font-family: var(--font-display);
  font-size: clamp(50px, 6vw, 76px);
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.project-tile p {
  max-width: 430px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.45;
}

.graphite-tile {
  grid-column: span 7;
  color: var(--ink);
  background: transparent;
  box-shadow: none;
}

.graphite-tile > span,
.graphite-tile p { color: var(--muted); }
.graphite-tile > b { color: var(--blue); }

.data-bars {
  height: 110px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin: auto 0 22px;
}

.data-bars i {
  width: 10%;
  border-radius: 999px 999px 2px 2px;
  background: linear-gradient(180deg, #3d8fe3, rgba(87, 168, 255, 0.12));
}

.data-bars i:nth-child(1) { height: 26%; }
.data-bars i:nth-child(2) { height: 42%; }
.data-bars i:nth-child(3) { height: 64%; }
.data-bars i:nth-child(4) { height: 82%; }
.data-bars i:nth-child(5) { height: 100%; }

.jingjie-tile {
  grid-column: span 5;
  background: transparent;
}

.product-rings {
  width: 170px;
  height: 170px;
  position: relative;
  display: grid;
  place-items: center;
  margin: auto auto 14px;
  border: 1px solid rgba(20, 130, 120, 0.18);
  border-radius: 50%;
}

.product-rings::before,
.product-rings::after,
.product-rings i {
  content: "";
  position: absolute;
  border: 1px solid rgba(20, 130, 120, 0.16);
  border-radius: 50%;
}

.product-rings::before { inset: 25px; }
.product-rings::after { inset: 52px; background: rgba(80, 203, 192, 0.16); }
.product-rings i:first-child { width: 10px; height: 10px; top: 12px; background: #4cc7b9; }
.product-rings i:nth-child(2) { width: 6px; height: 6px; right: 20px; bottom: 30px; background: #64a9ff; }
.product-rings i:nth-child(3) { width: 4px; height: 4px; left: 26px; top: 48px; background: #444; }

.work-section {
  padding-left: 0;
  padding-right: 0;
  background: #f5f5f7;
}

.project-feature-shell {
  width: var(--max);
  margin: 0 auto 54px;
}

.work-list {
  width: var(--max);
  display: grid;
  gap: 0;
  margin: 0 auto;
}

.work-row {
  min-height: 205px;
  display: grid;
  grid-template-columns: 110px 1fr 220px;
  gap: 32px;
  align-items: center;
  padding: 34px 38px;
  border: 0;
  border-top: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease;
}

.work-row:hover {
  transform: translateX(4px);
  box-shadow: none;
}

.work-row:last-child { border-bottom: 1px solid var(--line); }

.work-year {
  display: grid;
  gap: 14px;
  padding-right: 30px;
  border-right: 1px solid var(--line);
}

.work-year span { color: var(--soft); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.14em; }
.work-year b { font-family: var(--font-display); font-size: 29px; }
.work-copy h3 { margin: 0; font-family: var(--font-display); font-size: clamp(28px, 3vw, 40px); line-height: 1.08; letter-spacing: -0.02em; }
.work-copy p { max-width: 650px; margin: 14px 0 20px; color: var(--muted); font-size: 15px; line-height: 1.68; }
.work-row > strong { color: #353539; font-size: 15px; line-height: 1.55; }

.contact-section {
  min-height: 720px;
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 64px;
  align-items: center;
  color: var(--ink);
  background:
    radial-gradient(circle at 84% 26%, rgba(86, 158, 255, 0.12), transparent 26%),
    radial-gradient(circle at 18% 80%, rgba(174, 133, 255, 0.08), transparent 28%),
    #f7f8fa;
  overflow: hidden;
}

.contact-section::before {
  background-image:
    linear-gradient(rgba(29, 29, 31, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 29, 31, 0.025) 1px, transparent 1px);
}

.contact-aura {
  position: absolute;
  right: -10%;
  bottom: -35%;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(42, 143, 255, 0.16), transparent 26%),
    radial-gradient(circle at 65% 45%, rgba(162, 89, 255, 0.11), transparent 32%);
  filter: blur(80px);
}

.contact-copy,
.contact-cards {
  position: relative;
  z-index: 1;
}

.contact-copy {
  justify-self: end;
  width: min(620px, 100%);
}

.contact-copy > span { color: var(--soft); }
.contact-copy h2 { margin: 26px 0 0; font-family: var(--font-display); font-size: clamp(54px, 6vw, 78px); line-height: 0.98; letter-spacing: -0.025em; }
.contact-copy h2 em { color: var(--ink); background: none; font-style: normal; animation: none; }
.contact-copy p { max-width: 580px; margin: 30px 0 0; color: var(--muted); font-size: 18px; line-height: 1.65; }
.contact-copy a { display: inline-flex; align-items: center; gap: 14px; margin-top: 34px; padding: 14px 21px; border-radius: 999px; color: #fff; background: #111113; font-weight: 680; transition: transform 0.35s ease, box-shadow 0.35s ease; }
.contact-copy a:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(24, 32, 52, 0.16); }

.contact-cards {
  width: min(440px, 100%);
  display: grid;
  gap: 12px;
}

.contact-cards div {
  min-height: 104px;
  display: grid;
  align-content: center;
  gap: 10px;
  padding: 24px 28px;
  border: 0;
  border-top: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  backdrop-filter: blur(22px);
}

.contact-cards span { color: var(--soft); font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; }
.contact-cards strong { color: var(--ink); font-size: 16px; overflow-wrap: anywhere; }

footer {
  min-height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 max(28px, calc((100vw - 1200px) / 2));
  color: var(--soft);
  background: #f7f8fa;
  border-top: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
}

.js [data-reveal] {
  opacity: 0;
  filter: blur(3px);
  transform: translateY(24px) scale(0.985);
  transition:
    opacity 0.55s ease var(--delay, 0ms),
    filter 0.55s ease var(--delay, 0ms),
    transform 0.7s cubic-bezier(0.25, 1, 0.5, 1) var(--delay, 0ms);
}

.js [data-reveal].show {
  opacity: 1;
  filter: none;
  transform: none;
}

@keyframes auraFloat {
  from { transform: translateX(-50%) translate3d(-3%, -1%, 0) scale(0.96); }
  to { transform: translateX(-50%) translate3d(4%, 3%, 0) scale(1.06); }
}

@keyframes metalShift {
  to { background-position: -220% center; }
}


@media (max-width: 980px) {
  :root { --max: min(100vw - 36px, 760px); }
  .hero { min-height: auto; padding-top: 132px; }
  .hero-layout { grid-template-columns: 1fr; gap: 42px; }
  .hero-intro { max-width: 620px; padding-left: 0; padding-top: 28px; border-left: 0; border-top: 1px solid var(--line); }
  .hero-metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .methodology-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .skill-flip-card { height: 420px; }
  .project-feature { grid-template-columns: 1fr; padding: 42px; }
  .robot-visual { min-height: 300px; order: -1; }
  .graphite-tile,
  .jingjie-tile { grid-column: span 6; }
  .work-row { grid-template-columns: 100px 1fr; }
  .work-row > strong { grid-column: 2; }
  .contact-section { grid-template-columns: 1fr; gap: 60px; }
  .contact-copy { justify-self: start; width: var(--max); }
  .contact-cards { width: var(--max); grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 620px) {
  :root {
    --max: calc(100vw - 28px);
    --radius-xl: 24px;
    --radius-lg: 22px;
  }

  html,
  body {
    scrollbar-width: none;
  }

  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none;
  }

  .hero {
    padding: 102px 14px 66px;
    background: #f5f5f7;
  }
  .hero-layout { width: calc(100vw - 28px); gap: 34px; }
  .hero-copy { justify-items: start; text-align: left; }
  .hero-intro { padding-top: 24px; }
  .hero-intro > p { font-size: 17px; }
  .hero-intro > div { margin-top: 22px; }
  .hero-metrics { width: calc(100vw - 28px); grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 54px; }
  .overline { max-width: 310px; text-align: center; font-size: 9px; line-height: 1.7; letter-spacing: 0.16em; }
  .hero h1 { width: 100%; max-width: 350px; margin-top: 28px; font-size: clamp(40px, 12vw, 49px); line-height: 1; letter-spacing: -0.03em; text-wrap: balance; overflow-wrap: normal; }
  .hero-caption { max-width: 310px; margin-top: 22px; font-size: 14px; line-height: 1.65; }
  .impact-item { min-height: 124px; padding: 18px; border-radius: 0; }
  .impact-item:nth-child(2) { border-right: 0; }
  .impact-item:nth-child(-n + 2) { border-bottom: 1px solid var(--line); }
  .impact-item:nth-child(odd),
  .impact-item:nth-child(even) { transform: none; }
  .ticker { font-size: 42px; }
  .impact-item > span { margin-top: 18px; font-size: 16px; }
  .impact-item small { font-size: 11px; }
  .scroll-cue { margin-top: 42px; }

  .section { padding: 96px 14px; }
  .section-heading { margin-bottom: 48px; }
  .section-heading > span { font-size: 9px; letter-spacing: 0.2em; }
  .section-heading h2 { margin-top: 20px; font-size: clamp(40px, 12vw, 50px); line-height: 1.06; letter-spacing: -0.015em; }
  .section-heading p { margin-top: 22px; font-size: 15px; line-height: 1.7; }

  .proof-section,
  .work-section { padding-left: 0; padding-right: 0; }
  .proof-section .section-heading,
  .work-section .section-heading { width: calc(100vw - 28px); }
  .showcase-card {
    height: 390px;
    padding: 26px;
    border-radius: 24px;
  }
  .showcase-card h3 { font-size: 30px; }
  .showcase-card > p { font-size: 15px; }
  .showcase-description { margin-top: 28px; }

  .methodology-grid { width: calc(100vw - 28px); grid-template-columns: 1fr; gap: 16px; }
  .methodology-grid .skill-flip-card:nth-child(even) { width: calc(100% - 20px); margin-left: 20px; }
  .methodology-grid .skill-flip-card:nth-child(odd) { width: calc(100% - 20px); }
  .skill-flip-card { height: 390px; }
  .skill-face { padding: 28px; }
  .skill-value { margin-top: 30px; font-size: 58px; }
  .skill-face > strong { margin-top: 28px; font-size: 25px; }
  .skill-back > strong { margin-top: 52px; font-size: 29px; }
  .skill-summary,
  .skill-back-copy { font-size: 14px; }
  .skills-touch-hint { display: block; }


  .feature-glow,
  .graphite-tile,
  .jingjie-tile { grid-column: auto; }
  .project-feature { min-height: auto; padding: 22px 22px 30px; }
  .robot-visual { min-height: 205px; }
  .robot-core { width: 142px; height: 142px; }
  .robot-core::before { inset: 27px; }
  .robot-core::after { inset: 54px; }
  .feature-copy h3 { margin-top: 22px; font-size: 32px; line-height: 1.1; letter-spacing: -0.015em; }
  .feature-copy > p { font-size: 17px; }
  .project-tile { min-height: 330px; padding: 26px 24px; }
  .project-tile h3 { margin-top: 34px; font-size: 56px; }
  .project-tile p { font-size: 16px; }
  .featured-project-grid { width: calc(100vw - 28px); grid-template-columns: 1fr; gap: 16px; }
  .featured-project-grid .project-tile { width: 100%; min-height: 360px; }
  .showcase-shelf .horizontal-shelf__track > * { flex-basis: min(86vw, 360px); }

  .work-list { gap: 14px; }
  .work-row { min-height: auto; grid-template-columns: 1fr; gap: 22px; padding: 26px 24px; }
  .work-year { display: flex; justify-content: space-between; padding: 0 0 20px; border-right: 0; border-bottom: 1px solid var(--line); }
  .work-row > strong { grid-column: auto; padding-top: 22px; border-top: 1px solid var(--line); }
  .work-copy h3 { font-size: 27px; }

  .contact-section { min-height: auto; padding-top: 108px; padding-bottom: 76px; gap: 48px; }
  .contact-copy,
  .contact-cards { width: 100%; }
  .contact-copy h2 { font-size: clamp(43px, 13vw, 54px); }
  .contact-copy p { margin-top: 24px; font-size: 16px; }
  .contact-cards { grid-template-columns: 1fr; gap: 10px; }
  .contact-cards div { min-height: 88px; border-radius: 0; }

  footer { min-height: 126px; flex-direction: column; justify-content: center; align-items: flex-start; padding: 24px 18px; line-height: 1.7; }

}

@media (hover: none) {
  .skill-flip-card:hover .skill-flip-inner { transform: none; }
  .skill-flip-card.is-flipped .skill-flip-inner { transform: rotateY(180deg); }
  .impact-item:hover,
  .project-tile:hover,
  .project-feature:hover,
  .work-row:hover { transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## `src\main.jsx`

```jsx
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import '@fontsource-variable/inter';
import ProofDrawer from './components/ProofDrawer';
import { navItems, proofArchive, projects } from './data/content';
import { useActiveSection, useReveal } from './hooks/usePageEffects';
import ProjectPage from './routes/ProjectPage';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import FeaturedProjects from './sections/FeaturedProjects';
import Hero from './sections/Hero';
import Methodology from './sections/Methodology';
import ProofArchive from './sections/ProofArchive';
import './style.css';

document.documentElement.classList.add('js');

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { active, scrolled } = useActiveSection(navItems, { enabled: isHome });

  if (!isHome) {
    return (
      <header className={`header ${scrolled ? 'is-compact' : ''}`}>
        <nav className="nav-pill nav-pill--project" aria-label="项目导航">
          <Link to="/#projects">← 返回代表项目</Link>
          <span>PROJECT CASE</span>
        </nav>
      </header>
    );
  }

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

function HomePage() {
  useReveal();
  const [searchParams, setSearchParams] = useSearchParams();
  const proofId = searchParams.get('proof');
  const proofItem = proofArchive.find((item) => item.id === proofId);
  const proofProject = proofItem ? projects[proofItem.projectId] : null;

  const openProof = (id) => {
    const next = new URLSearchParams(searchParams);
    next.set('proof', id);
    setSearchParams(next);
  };

  const closeProof = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('proof');
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <Hero />
      <Methodology />
      <ProofArchive onSelectProof={openProof} />
      <FeaturedProjects />
      <Experience />
      <Contact />
      <footer><span>© 2026 ZHANG ZHIBO</span><span>DESIGNED FOR IMPACT · BUILT FOR DELIVERY</span></footer>
      {proofProject && <ProofDrawer project={proofProject} onClose={closeProof} />}
    </>
  );
}

function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

## `src\sections\Hero.jsx`

```jsx
import React from 'react';
import NumberTicker from '../components/NumberTicker';
import { heroMetricIds, profile, resolveMetrics } from '../data/content';

export default function Hero() {
  const heroMetrics = resolveMetrics(heroMetricIds);

  return (
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

      <div className="hero-metrics" aria-label="核心成果">
        {heroMetrics.map((metric, index) => (
          <article className="impact-item" data-reveal style={{ '--delay': `${index * 70}ms` }} key={metric.id}>
            <NumberTicker metric={metric} />
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>
      <a className="scroll-cue" href="#skills"><span>继续浏览</span><i /></a>
    </section>
  );
}
```

## `src\sections\Methodology.jsx`

```jsx
import React from 'react';
import MethodologyCard from '../components/MethodologyCard';
import SectionTitle from '../components/SectionTitle';
import { methodology } from '../data/content';

export default function Methodology() {
  return (
    <section id="skills" className="section skills-section cinematic-grid">
      <SectionTitle
        eyebrow="METHODOLOGY"
        title={<>从洞察，<em>走向结果。</em></>}
        lead="一套从问题定义、原型验证到执行交付与成果沉淀的工作方法。"
      />
      <div className="methodology-grid">
        {methodology.map((method, index) => (
          <MethodologyCard method={method} index={index} key={method.id} />
        ))}
      </div>
      <p className="skills-touch-hint">手机端轻触卡片即可翻面</p>
    </section>
  );
}
```

