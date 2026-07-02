import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'Gemini上传版源码');

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'src', 'components', 'Lanyard'), { recursive: true });
await mkdir(path.join(output, 'public'), { recursive: true });

const read = (file) => readFile(path.join(root, file), 'utf8');

let main = await read('src/main.jsx');
let borderGlow = await read('src/components/BorderGlow.jsx');
let spotlight = await read('src/components/SpotlightCard.jsx');

borderGlow = borderGlow
  .replace("import React, { useCallback, useEffect, useRef } from 'react';\n", '')
  .replace("import './BorderGlow.css';\n", '')
  .replace('export default function BorderGlow', 'function BorderGlow');

spotlight = spotlight
  .replace("import React, { useRef } from 'react';\n", '')
  .replace("import './SpotlightCard.css';\n", '')
  .replace('export default SpotlightCard;', '');

main = main
  .replace("import React, { useEffect, useRef, useState } from 'react';", "import React, { useCallback, useEffect, useRef, useState } from 'react';")
  .replace("import BorderGlow from './components/BorderGlow';\n", '')
  .replace("import SpotlightCard from './components/SpotlightCard';\n", '')
  .replace("import './style.css';", `${borderGlow}\n\n${spotlight}\n\nimport './style.css';`);

const combinedCss = [
  await read('src/style.css'),
  await read('src/components/BorderGlow.css'),
  await read('src/components/SpotlightCard.css'),
].join('\n\n');

let lanyard = await read('src/components/Lanyard/Lanyard.jsx');
lanyard = lanyard
  .replace("import cardGLB from './card.glb';", "import cardGLB from './card.glb?url';")
  .replace("import lanyard from './lanyard.png';\n", '')
  .replace("const BLANK_PIXEL =", "const WHITE_PIXEL =\n  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9Zl1sAAAAASUVORK5CYII=';\n\nconst BLANK_PIXEL =")
  .replace('const texture = useTexture(lanyardImage || lanyard);', 'const texture = useTexture(lanyardImage || WHITE_PIXEL);')
  .replace('color="white"', 'color="black"');

await writeFile(path.join(output, 'src', 'main.jsx'), main, 'utf8');
await writeFile(path.join(output, 'src', 'style.css'), combinedCss, 'utf8');
await writeFile(path.join(output, 'src', 'components', 'Lanyard', 'Lanyard.jsx'), lanyard, 'utf8');

await cp(path.join(root, 'src', 'components', 'Lanyard', 'Lanyard.css'), path.join(output, 'src', 'components', 'Lanyard', 'Lanyard.css'));
await cp(path.join(root, 'src', 'components', 'Lanyard', 'card.glb'), path.join(output, 'src', 'components', 'Lanyard', 'card.glb'));
await cp(path.join(root, 'public', 'lanyard-front.svg'), path.join(output, 'public', 'lanyard-front.svg'));
await cp(path.join(root, 'public', 'lanyard-back.svg'), path.join(output, 'public', 'lanyard-back.svg'));
await cp(path.join(root, 'index.html'), path.join(output, 'index.html'));
await cp(path.join(root, 'package.json'), path.join(output, 'package.json'));

console.log(output);
