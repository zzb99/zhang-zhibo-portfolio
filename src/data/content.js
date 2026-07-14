export const profile = {
  name: '张智博',
  age: 20,
  location: 'Shijiazhuang, China',
  email: 'zzb9999@outlook.com',
  wechat: '15631124118',
  github: '@zhangzhibo',
};

export const navItems = [
  ['about', '首页'],
  ['work', '经历'],
  ['projects', '项目'],
  ['proof', '成果'],
];

// Layer 1: factual outcomes. Every measurable fact has one canonical ID here.
export const metrics = {
  patentCount: {
    id: 'patentCount',
    value: 11,
    suffix: '项',
    label: '国家专利',
    note: '创新成果资产',
  },
  peakGmv: {
    id: 'peakGmv',
    value: 300,
    suffix: ' 万元',
    label: '单日 GMV',
    note: '双十一电商实战峰值',
  },
  postalSuccessRate: {
    id: 'postalSuccessRate',
    value: 99.2,
    suffix: '%',
    label: '抓取成功率',
    note: '中邮分拣机器人测试指标',
  },
  contentViews: {
    id: 'contentViews',
    value: 50,
    suffix: ' 万+',
    label: '单条视频播放',
    note: '酒店本地生活内容增长验证',
  },
  nationalBronzeAward: {
    id: 'nationalBronzeAward',
    value: 1,
    suffix: '枚',
    label: '全国铜奖',
    note: '双创赛事成果',
  },
  packageDamageRate: {
    id: 'packageDamageRate',
    value: 0.5,
    prefix: '≤',
    suffix: '‰',
    label: '包裹破损率',
    note: '分拣测试控制指标',
  },
  commercePlatformCount: {
    id: 'commercePlatformCount',
    value: 3,
    suffix: '+',
    label: '平台协同',
    note: '拼多多、淘宝与抖音',
  },
  otaRatingBefore: {
    id: 'otaRatingBefore',
    value: 4.5,
    label: 'OTA 优化前评分',
    note: '酒店运营基线',
  },
  otaRatingAfter: {
    id: 'otaRatingAfter',
    value: 4.8,
    label: 'OTA 优化后评分',
    note: '酒店运营结果',
  },
};

export function getMetric(metricOrId) {
  if (typeof metricOrId !== 'string') return metricOrId;
  return metrics[metricOrId];
}

export function formatMetric(metricOrId, options = {}) {
  const metric = getMetric(metricOrId);
  if (!metric) return '';

  const {
    withLabel = false,
    separator = ' ',
  } = options;
  const formattedValue = `${metric.prefix ?? ''}${metric.value}${metric.suffix ?? ''}`;

  return withLabel ? `${formattedValue}${separator}${metric.label}` : formattedValue;
}

export function resolveMetrics(metricIds = []) {
  return metricIds.map(getMetric).filter(Boolean);
}

// Layer 2: the reusable way of working. No outcome numbers belong in this layer.
export const methodology = [
  {
    id: 'insight',
    step: '01',
    eyebrow: 'INSIGHT / PROBLEM SOLVING',
    title: '洞察与问题拆解',
    summary: '从用户、场景和业务目标出发，识别表象背后的真实问题与关键约束。',
    detail: '通过场景观察、信息梳理和目标校准，把模糊需求转化为清晰、可验证的问题定义。',
    practices: ['用户与场景洞察', '问题定义', '目标与约束梳理'],
  },
  {
    id: 'build',
    step: '02',
    eyebrow: 'BUILD / PROTOTYPING',
    title: '方案构建与原型验证',
    summary: '把洞察转化为可讨论、可测试的结构方案、产品原型或增长假设。',
    detail: '用低成本原型和关键路径验证快速暴露风险，在投入扩大前持续修正方案。',
    practices: ['结构设计', '快速原型', '假设验证'],
  },
  {
    id: 'delivery',
    step: '03',
    eyebrow: 'DELIVERY / EXECUTION',
    title: '协同推进与执行交付',
    summary: '把方案拆成可执行任务，连接测试、运营、材料与团队协作，推动项目落地。',
    detail: '围绕节点、责任和验收标准建立推进节奏，让方案从表达走向真实场景。',
    practices: ['项目推进', '跨角色协同', '交付与复盘'],
  },
  {
    id: 'impact',
    step: '04',
    eyebrow: 'IMPACT / RESULTS',
    title: '证据沉淀与成果转化',
    summary: '用测试记录、业务数据和成果材料验证价值，并沉淀为可复用资产。',
    detail: '将结果整理成可追溯的证据、案例和方法，让一次项目形成持续影响。',
    practices: ['数据验证', '成果表达', '资产沉淀'],
  },
];

// Layer 3: case studies. Projects reference metric IDs instead of repeating values.
const projectRecords = {
  postal: {
    id: 'postal',
    slug: 'postal-sorting-robot',
    type: 'flagship',
    eyebrow: 'CHINA POST · ROBOTICS',
    title: '中邮分拣机器人攻关',
    statement: '把实验室精度，带进真实分拣线。',
    summary: '参与机器人分拣场景的项目推进、测试验证与成果包装，让技术指标成为可以被复盘、被交付的结果。',
    metricIds: ['postalSuccessRate', 'packageDamageRate'],
    facts: [{ value: '2025', label: '项目推进' }],
    narrative: {
      context: '邮政包裹分拣需要在连续运行环境中兼顾效率、稳定性与包裹安全。',
      problem: '实验室中的抓取表现，需要经过真实包裹、连续运行和破损控制验证，才能进入业务场景。',
      role: '参与项目推进、测试流程梳理、验证记录整理以及成果展示与申报材料包装。',
      process: [
        '围绕邮政包裹分拣场景梳理测试流程与验证指标。',
        '协同记录抓取稳定性、破损控制与连续运行表现。',
        '根据测试反馈整理问题并推动方案持续校准。',
      ],
      evidence: '以抓取表现、包裹破损控制和连续运行记录作为项目验证证据。',
      impact: '将实验数据整理为可复盘、可展示、可用于路演和成果申报的交付材料。',
    },
    tags: ['Robot', 'Testing', 'Delivery'],
  },
  commerce: {
    id: 'commerce',
    slug: 'ecommerce-growth',
    type: 'flagship',
    eyebrow: 'E-COMMERCE · GROWTH',
    title: '多平台电商增长操盘',
    statement: '把流量，变成可复盘的增长。',
    summary: '参与拼多多、淘宝、抖音等平台的店铺运营、活动节奏设计与新人培训，推动关键节点增长。',
    metricIds: ['peakGmv', 'commercePlatformCount'],
    facts: [{ value: '双11', label: '关键节点' }],
    narrative: {
      context: '多平台电商在大促节点需要同时协调流量、选品、页面承接、转化和团队执行。',
      problem: '平台节奏不同、关键数据变化快，增长动作必须被拆解、跟踪并及时复盘。',
      role: '参与店铺运营、活动节奏设计、数据复盘和新人协作流程沉淀。',
      process: [
        '从选品、活动节奏到店铺承接梳理完整运营链路。',
        '通过复盘识别流量、转化与客单价的关键变化。',
        '沉淀新人培训和节点作战流程，提升团队执行一致性。',
      ],
      evidence: '以平台经营数据、活动节点表现和团队执行记录作为复盘依据。',
      impact: '形成可重复执行的节点运营方法，并取得明确的业务增长结果。',
    },
    tags: ['E-commerce', 'GMV', 'Operation'],
  },
  jingjie: {
    id: 'jingjie',
    slug: 'cleanzone-hotel-product',
    type: 'flagship',
    eyebrow: 'PRODUCT · INNOVATION',
    title: '净界',
    statement: '一客一净，净在眼前。',
    summary: '面向酒店住宿场景，围绕传统烧水壶的卫生信任问题，提出可更换内胆、可视化封签与酒店耗材复购方案。',
    metricIds: [],
    facts: [
      { value: '一客一换', label: '卫生机制' },
      { value: '可视化', label: '安心封签' },
      { value: 'B 端', label: '耗材复购' },
    ],
    narrative: {
      context: '酒店住客难以判断客房烧水壶是否经过可靠清洁，卫生状态缺少可感知证据。',
      problem: '传统清洁流程对住客不可见，酒店也缺少兼顾体验、执行成本与持续供应的产品机制。',
      role: '参与用户痛点定义、产品结构构想、信任机制设计与商业闭环梳理。',
      process: [
        '从真实住宿痛点出发定义一次性可更换内胆结构。',
        '通过可视化封签建立消费者可感知的卫生信任。',
        '设计酒店端耗材补充与持续复购的商业闭环。',
      ],
      evidence: '以产品结构方案、酒店使用路径和耗材补充模型作为概念验证材料。',
      impact: '把卫生焦虑转化为可见、可执行、可持续运营的酒店产品方案。',
    },
    tags: ['Product', 'Hotel', 'Business Model'],
  },
  panxiu: {
    id: 'panxiu',
    slug: 'tuzu-panxiu-material-library',
    type: 'flagship',
    eyebrow: 'CULTURAL HERITAGE · DIGITAL ARCHIVE',
    title: '土族盘绣纹样数字化与开放素材库',
    statement: '让纹样被看见、检索与继续使用。',
    summary: '围绕土族盘绣纹样的数字化整理与开放素材库建设，呈现网站、素材管理与内容组织等工作内容。',
    metricIds: [],
    facts: [{ value: '资料整理中', label: '项目材料' }],
    narrative: {
      context: '项目以土族盘绣纹样的数字化整理与开放使用为主题。',
      problem: '详细项目材料将在后续补充到对应页面。',
      role: '网站、素材库与项目内容将统一在本项目内部展示。',
      process: ['项目资料整理中。'],
      evidence: '待补充真实素材与过程记录。',
      impact: '待补充真实项目成果。',
    },
    tags: ['数字化', '素材库', '文化传承'],
  },
  coinops: {
    id: 'coinops',
    slug: 'coin-multi-platform-operations',
    type: 'flagship',
    eyebrow: 'COLLECTIBLES · OPERATIONS',
    title: '古钱币多平台运营项目',
    statement: '把分散渠道，整理成可持续运营的现场。',
    summary: '围绕古钱币项目的多平台运营，后续将在项目内部展示网站、后台和实际工作流。',
    metricIds: [],
    facts: [{ value: '资料整理中', label: '项目材料' }],
    narrative: {
      context: '项目涉及古钱币相关的多平台运营。',
      problem: '详细项目材料将在后续补充到对应页面。',
      role: '网站、后台与运营工作流将统一在本项目内部展示。',
      process: ['项目资料整理中。'],
      evidence: '待补充真实素材与过程记录。',
      impact: '待补充真实项目成果。',
    },
    tags: ['多平台', '运营', '工作流'],
  },
  aimeijia: {
    id: 'aimeijia',
    slug: 'aimeijia-local-search-geo',
    type: 'flagship',
    eyebrow: 'LOCAL SEARCH · GEO',
    title: '晋中爱美家本地搜索与 GEO 增长项目',
    statement: '让本地搜索，连接真实增长动作。',
    summary: '围绕晋中爱美家的本地搜索与 GEO 增长工作，后续将在项目内部展示实际执行内容。',
    metricIds: [],
    facts: [{ value: '资料整理中', label: '项目材料' }],
    narrative: {
      context: '项目围绕本地搜索与 GEO 增长展开。',
      problem: '详细项目材料将在后续补充到对应页面。',
      role: '实际执行内容与工具工作流将统一在本项目内部展示。',
      process: ['项目资料整理中。'],
      evidence: '待补充真实素材与过程记录。',
      impact: '待补充真实项目成果。',
    },
    tags: ['本地搜索', 'GEO', '增长'],
  },
  patent: {
    id: 'patent',
    slug: 'patent-assets',
    type: 'proof',
    eyebrow: 'INTELLECTUAL PROPERTY',
    title: '专利成果体系',
    statement: '让创新，被清晰定义。',
    summary: '围绕结构方案、应用场景与技术创新点完成成果整理，把零散想法转化为可归档、可申报、可持续复用的知识产权资产。',
    metricIds: ['patentCount'],
    facts: [
      { value: '结构', label: '设计能力' },
      { value: '转化', label: '成果方法' },
    ],
    narrative: {
      context: '创新想法需要被转化为结构清楚、边界明确且能够持续复用的成果资产。',
      problem: '零散创意若缺少技术差异、附图逻辑和应用场景整理，很难形成稳定的申报材料。',
      role: '参与产品结构拆解、技术材料整理、附图逻辑梳理与成果归档。',
      process: [
        '拆解产品结构、工作原理和关键技术差异。',
        '整理技术交底、附图逻辑与应用场景材料。',
        '建立从创意发现到成果申报的可复用工作方法。',
      ],
      evidence: '以专利文件、结构附图和技术交底材料作为成果证据。',
      impact: '形成可归档、可申报并可持续复用的知识产权资产。',
    },
    tags: ['Patent', 'Structure', 'IP'],
  },
  bronze: {
    id: 'bronze',
    slug: 'national-innovation-award',
    type: 'proof',
    eyebrow: 'INNOVATION · NATIONAL',
    title: '全国双创赛事成果',
    statement: '让一个想法，经得起全国赛场。',
    summary: '围绕创新项目的方案表达、材料撰写与答辩呈现持续打磨，形成国家级赛事成果。',
    metricIds: ['nationalBronzeAward'],
    facts: [
      { value: '全国', label: '赛事级别' },
      { value: '全链路', label: '项目表达' },
    ],
    narrative: {
      context: '全国性双创赛事要求项目同时具备清晰价值、完整方案和可信的成果表达。',
      problem: '复杂项目需要在有限展示时间内讲清用户问题、解决方案、创新点与落地价值。',
      role: '参与项目策划、申报材料撰写、演示内容迭代和答辩表达优化。',
      process: [
        '梳理项目价值、用户问题与解决方案之间的逻辑链。',
        '参与申报材料、演示文稿与路演内容的迭代。',
        '根据答辩反馈快速修正表达并强化结果呈现。',
      ],
      evidence: '以赛事申报材料、演示文稿、答辩记录和获奖证明作为成果证据。',
      impact: '形成可复用的项目表达与成果沉淀方法，并取得国家级赛事成果。',
    },
    tags: ['National', 'Innovation', 'Pitch'],
  },
};

export const projects = projectRecords;

// Display indexes: ordering lives here; factual values remain in metrics.
export const heroMetricIds = [
  'patentCount',
  'peakGmv',
  'contentViews',
  'nationalBronzeAward',
];

export const featuredProjectIds = ['postal', 'jingjie', 'panxiu', 'coinops', 'aimeijia'];
export const proofProjectIds = ['bronze', 'patent'];

export const proofArchive = [
  {
    id: 'national-bronze',
    eyebrow: 'NATIONAL AWARD',
    projectId: 'bronze',
    metricId: 'nationalBronzeAward',
    subtitle: '双创赛事成果',
    description: '从项目策划、材料撰写到答辩展示，形成可复用的成果沉淀方法。',
    dark: true,
  },
  {
    id: 'patent-assets',
    eyebrow: 'IP ASSETS',
    projectId: 'patent',
    metricId: 'patentCount',
    subtitle: '结构设计与成果转化',
    description: '把创新点整理成可验证、可申报、可持续复用的知识产权成果。',
  },
  {
    id: 'commerce-impact',
    eyebrow: 'COMMERCE',
    projectId: 'commerce',
    metricId: 'peakGmv',
    subtitle: '单日 GMV 实战峰值',
    description: '连接平台节奏、活动策略与团队执行，让增长结果能够被复盘。',
  },
  {
    id: 'robotics-validation',
    eyebrow: 'ROBOTICS',
    projectId: 'postal',
    metricId: 'postalSuccessRate',
    subtitle: '中邮机器人测试验证',
    description: '参与机器人测试验证，将实验指标推进到真实业务场景。',
  },
];

export const workItems = [
  {
    year: '2025',
    title: '酒店本地生活 / 新媒体运营',
    metricIds: ['contentViews', 'otaRatingBefore', 'otaRatingAfter'],
    copy: '从账号定位、内容选题到投流与复盘，参与酒店抖音本地生活账号搭建，让内容表现与业务结果发生连接。',
    tags: ['内容策划', '短视频运营', '本地生活'],
  },
  {
    year: '2024',
    title: '多平台电商运营实践',
    metricIds: ['peakGmv', 'commercePlatformCount'],
    copy: '参与拼多多、淘宝、抖音等平台的店铺运营、活动节奏设计和新人培训，把关键节点变成可执行的团队作战方案。',
    tags: ['电商运营', '数据复盘', '转化增长'],
  },
  {
    year: '2024',
    title: '项目运营与成果包装',
    metricIds: ['patentCount', 'nationalBronzeAward'],
    copy: '参与创新项目材料撰写、数据整理、路演表达和成果申报，把零散经历转化为可展示、可复盘、可沉淀的成果。',
    tags: ['项目策划', '材料撰写', '答辩表达'],
  },
];
