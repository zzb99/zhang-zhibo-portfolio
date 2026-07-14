import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'zzb-exhibition-content-v1';

export const defaultExhibitionProjects = [
  {
    id: 'postal', slug: 'postal-sorting-robot', order: 1, year: '2025',
    title: '中邮分拣机器人', category: '工业自动化 / 测试验证',
    intro: '面向真实邮政包裹分拣场景，完成机器人抓取、连续运行与包裹安全验证。',
    background: '实验室中的抓取表现需要进入连续输送、尺寸变化与柔性包装并存的业务现场，测试标准因此从单次成功扩展为稳定性、破损控制与长期运行。',
    outputs: ['分拣场景与测试流程', '抓取稳定性验证记录', '连续运行问题清单', '项目路演与成果材料'],
    materials: ['现场测试影像', '抓取数据面板', '包裹样本记录', '阶段验收资料'],
    result: '演示数据：抓取成功率达到 99.2%，包裹破损率控制在 0.5‰ 以内，并形成可复盘的测试与成果档案。',
    hero: '/assets/postal-hero.png', accent: '#dce5e8', status: '测试验证', progress: 86,
    links: [{ label: '项目说明', url: '#project-story' }],
  },
  {
    id: 'jingjie', slug: 'cleanzone-hotel-product', order: 2, year: '2025',
    title: '净界', category: '酒店产品 / 服务创新',
    intro: '围绕酒店烧水壶卫生信任，提出可更换内胆、可视封签与耗材补充机制。',
    background: '住客难以判断客房器具的清洁状态。项目将不可见的清洁流程转化为可以被看见、被替换和被验证的产品体验。',
    outputs: ['可更换内胆结构', '一次性安心封签', '客房使用流程', '酒店耗材复购模型'],
    materials: ['产品结构演示', '使用场景图', '包装与封签', '商业路径说明'],
    result: '演示内容：完成产品结构、视觉呈现与酒店端补充流程，形成从住客体验到耗材运营的完整概念方案。',
    hero: '/assets/jingjie-hero.png', accent: '#e9e2f4', status: '产品迭代', progress: 68,
    links: [{ label: '产品结构', url: '#project-story' }],
  },
  {
    id: 'panxiu', slug: 'tuzu-panxiu-material-library', order: 3, year: '2025',
    title: '土族盘绣纹样数字化与开放素材库', category: '非遗文化 / 数字档案',
    intro: '从传承人访谈与纹样采集出发，延伸至文化产品、网店与开放素材网站。',
    background: '通过联系非遗传承人建立纹样来源与文化语境，再将实物采集、数字整理、产品开发和公开使用连接成完整项目。',
    outputs: ['传承人访谈与纹样采集', '纹样数字化与标签整理', '盘绣衍生产品开发', '线上网店与开放素材网站'],
    materials: ['纹样档案', '访谈记录', '产品样机', '店铺与网站界面'],
    result: '演示内容：形成一套可检索、可展示、可用于产品设计的纹样档案，并完成产品、网店和网站的连续呈现。',
    hero: '/assets/panxiu-hero.png', accent: '#eadfd2', status: '内容建设', progress: 74,
    links: [{ label: '开放素材库', url: '#project-story' }, { label: '项目网店', url: '#project-story' }],
  },
  {
    id: 'coinops', slug: 'coin-multi-platform-operations', order: 4, year: '2024—2025',
    title: '古钱币多平台运营项目', category: '收藏档案 / 内容运营',
    intro: '把分散藏品整理成可检索、可拍摄、可发布和可持续运营的内容与商品体系。',
    background: '古钱币信息、图片、证书与平台素材长期分散。项目从藏品档案开始，建立拍摄、上架、内容发布与多平台协同流程。',
    outputs: ['藏品信息与证书归档', '标准化拍摄与商品素材', '多平台店铺内容体系', '本地运营后台与工作流'],
    materials: ['藏品档案卡', '摄影规范', '平台商品页', '运营数据面板'],
    result: '演示内容：形成从藏品录入到多平台发布的连续工作流，减少重复整理，并让每件藏品具备完整的数字档案。',
    hero: '/assets/coinops-hero.png', accent: '#e4ddd3', status: '运营中', progress: 59,
    links: [{ label: '运营工作台', url: '#project-story' }],
  },
  {
    id: 'aimeijia', slug: 'aimeijia-local-search-geo', order: 5, year: '2025',
    title: '晋中爱美家本地搜索与 GEO 增长项目', category: '品牌官网 / 本地增长',
    intro: '围绕本地家政服务完成官网、搜索内容与 GEO 可见性优化，并跟踪阶段结果。',
    background: '本地服务需要同时回答品牌可信度、搜索收录和用户转化问题。项目将官网建设、服务页面、内容结构与本地搜索验证放进同一条增长链路。',
    outputs: ['品牌官网与服务页面', '本地关键词内容结构', 'GEO 问答与实体信息优化', '搜索表现与线索跟踪'],
    materials: ['官网页面', '搜索结果记录', '关键词看板', '阶段复盘报告'],
    result: '演示数据：核心服务词可见性、页面收录与咨询线索连续增长，形成可复用的本地内容与 GEO 优化流程。',
    hero: '/assets/aimeijia-hero.png', accent: '#dfecea', status: '增长测试', progress: 63,
    links: [{ label: '品牌官网', url: '#project-story' }, { label: '增长记录', url: '#project-story' }],
  },
];

const ExhibitionContext = createContext(null);

function readStoredProjects() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(parsed) && parsed.length === defaultExhibitionProjects.length ? parsed : defaultExhibitionProjects;
  } catch {
    return defaultExhibitionProjects;
  }
}

export function ExhibitionProvider({ children }) {
  const [exhibitionProjects, setExhibitionProjects] = useState(readStoredProjects);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exhibitionProjects));
  }, [exhibitionProjects]);

  const api = useMemo(() => ({
    exhibitionProjects,
    updateProject(id, patch) {
      setExhibitionProjects((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
    },
    resetProjects() { setExhibitionProjects(defaultExhibitionProjects); },
    importProjects(items) {
      if (!Array.isArray(items) || items.length !== defaultExhibitionProjects.length) throw new Error('备份文件中的项目数量不正确');
      const required = new Set(defaultExhibitionProjects.map((item) => item.id));
      if (!items.every((item) => required.has(item.id) && item.title && item.slug)) throw new Error('备份文件格式不正确');
      setExhibitionProjects(items);
    },
  }), [exhibitionProjects]);

  return <ExhibitionContext.Provider value={api}>{children}</ExhibitionContext.Provider>;
}

export function useExhibition() {
  const value = useContext(ExhibitionContext);
  if (!value) throw new Error('useExhibition must be used inside ExhibitionProvider');
  return value;
}

export { STORAGE_KEY };
