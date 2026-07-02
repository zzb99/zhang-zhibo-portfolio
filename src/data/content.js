export const profile = {
  name: '张智博', age: 20, location: 'Shijiazhuang, China',
  email: 'zzb9999@outlook.com', wechat: '15631124118', github: '@zhangzhibo',
};

export const navItems = [
  ['about', '关于我'], ['proof', '获奖经历'], ['projects', '科研经历'],
  ['work', '工作经历'], ['contact', '联系我'],
];

export const impactStats = [
  { value: 11, suffix: '项', label: '国家专利', note: '创新成果资产' },
  { value: 300, prefix: '¥', suffix: 'W', label: '单日 GMV', note: '电商实战峰值' },
  { value: 50, suffix: 'W+', label: '单条播放', note: '内容增长验证' },
  { value: 1, suffix: '枚', label: '全国铜奖', note: '双创赛事成果' },
];

export const skillCards = [
  { value: '11', suffix: '项', label: '国家专利', title: '创新成果', summary: '把结构设计、技术说明与申报材料整理成可验证的知识产权成果。', backTitle: '结构设计与成果转化', backCopy: '从问题拆解、结构方案到材料归档，让创新不只停留在想法，而是成为可展示、可申报的成果资产。', tags: ['结构设计', '专利材料', '成果转化'] },
  { value: '99.2', suffix: '%', label: '抓取成功率', title: '机器人攻关', summary: '参与中邮分拣机器人测试验证，让实验指标进入真实业务场景。', backTitle: '测试验证与项目推进', backCopy: '围绕抓取稳定性、破损率与连续运行表现建立验证记录，并将数据转化为可交付的项目成果。', tags: ['Robotics', 'Testing', 'Delivery'] },
  { value: '¥300W', suffix: '', label: '单日 GMV', title: '电商运营', summary: '连接平台节奏、选品活动与团队执行，推动关键节点增长。', backTitle: '增长策略与复盘', backCopy: '参与拼多多、淘宝与抖音等平台运营，把活动节奏、数据复盘和新人协作沉淀为可复用的方法。', tags: ['运营增长', '数据复盘', '团队协同'] },
  { value: '50W+', suffix: '', label: '单条内容播放', title: '内容增长', summary: '从账号定位到选题与复盘，让内容表达和业务结果发生连接。', backTitle: '内容策划与转化', backCopy: '围绕用户、场景和转化目标设计内容，用真实数据持续校准选题、表达和发布节奏。', tags: ['内容策划', '短视频', '本地生活'] },
];

export const projects = {
  postal: { id: 'postal', eyebrow: 'CHINA POST · ROBOTICS', title: '中邮分拣机器人攻关', statement: '把实验室精度，带进真实分拣线。', summary: '参与机器人分拣场景的项目推进、测试验证与成果包装，让技术指标不止停留在报告里，而是成为可以被复盘、被交付的结果。', metrics: [['99.2%', '抓取成功率'], ['≤0.5‰', '包裹破损率'], ['2025', '项目推进']], details: ['围绕邮政包裹分拣场景梳理测试流程与验证指标', '协同完成抓取稳定性、破损率与连续运行表现记录', '将实验数据整理为项目展示、路演与成果申报材料'], tags: ['Robot', 'Testing', 'Delivery'] },
  commerce: { id: 'commerce', eyebrow: 'E-COMMERCE · GROWTH', title: '300W 电商操盘', statement: '把流量，变成可复盘的增长。', summary: '参与拼多多、淘宝、抖音等平台的店铺运营、活动节奏设计和新人培训，在双十一节点推动单日 GMV 达到 300 万。', metrics: [['¥300W', '单日 GMV'], ['3+', '平台协同'], ['双11', '关键节点']], details: ['从选品、活动节奏到店铺承接梳理完整运营链路', '通过数据复盘识别流量、转化与客单价的关键变化', '沉淀新人培训和节点作战流程，提升团队执行一致性'], tags: ['E-commerce', 'GMV', 'Operation'] },
  jingjie: { id: 'jingjie', eyebrow: 'PRODUCT · INNOVATION', title: '净界', statement: '一客一净，净在眼前。', summary: '面向酒店住宿场景，围绕传统烧水壶卫生信任不足的问题，提出“一次性可更换内胆 + 可视化封签 + 酒店耗材复购”的产品方案。', metrics: [['1客1换', '卫生机制'], ['可视化', '安心封签'], ['B端', '耗材复购']], details: ['从真实住宿痛点出发定义一次性可更换内胆结构', '通过可视化封签建立消费者可感知的卫生信任', '设计酒店端耗材补充与持续复购的商业闭环'], tags: ['Product', 'Hotel', 'Business Model'] },
  patent: { id: 'patent', eyebrow: 'INTELLECTUAL PROPERTY', title: '11 项国家专利', statement: '让创新，被清晰定义。', summary: '围绕结构方案、应用场景与技术创新点完成专利成果整理，把零散想法转化为可归档、可申报、可持续复用的知识产权资产。', metrics: [['11项', '国家专利'], ['结构', '设计能力'], ['转化', '成果方法']], details: ['拆解产品结构、工作原理和关键技术差异', '整理技术交底、附图逻辑与应用场景材料', '建立从创意发现到成果申报的可复用工作方法'], tags: ['Patent', 'Structure', 'IP'] },
  bronze: { id: 'bronze', eyebrow: 'INNOVATION · NATIONAL', title: '双创全国铜奖', statement: '让一个想法，经得起全国赛场。', summary: '围绕创新项目的方案表达、材料撰写与答辩呈现持续打磨，最终形成国家级赛事成果。', metrics: [['全国', '赛事级别'], ['铜奖', '最终成果'], ['全链路', '项目表达']], details: ['梳理项目价值、用户问题与解决方案之间的逻辑链', '参与申报材料、演示文稿与路演内容的迭代', '在答辩反馈中快速修正表达并强化结果呈现'], tags: ['National', 'Innovation', 'Pitch'] },
};

export const workItems = [
  { year: '2025', title: '酒店本地生活 / 新媒体运营', result: '单条视频 50W+ · OTA 评分 4.5 → 4.8', copy: '从账号定位、内容选题到投流与复盘，参与酒店抖音本地生活账号搭建，让内容表现与业务结果发生连接。', tags: ['内容策划', '短视频运营', '本地生活'] },
  { year: '2024', title: '多平台电商运营实践', result: '双十一单日 GMV 300W', copy: '参与拼多多、淘宝、抖音等平台的店铺运营、活动节奏设计和新人培训，把关键节点变成可执行的团队作战方案。', tags: ['电商运营', '数据复盘', '转化增长'] },
  { year: '2024', title: '项目运营与成果包装', result: '专利 · 路演 · 申报材料体系化沉淀', copy: '参与创新项目材料撰写、数据整理、路演表达和成果申报，把零散经历转化为可展示、可复盘、可沉淀的成果。', tags: ['项目策划', '材料撰写', '答辩表达'] },
];

export const proofShowcase = [
  { eyebrow: 'NATIONAL AWARD', title: '全国铜奖', subtitle: '双创赛事成果', description: '从项目策划、材料撰写到答辩展示，形成可复用的成果沉淀方法。', projectKey: 'bronze', dark: true },
  { eyebrow: 'IP ASSETS', title: '11 项国家专利', subtitle: '结构设计与成果转化', description: '把创新点整理成可验证、可申报、可持续复用的知识产权成果。', projectKey: 'patent' },
  { eyebrow: 'COMMERCE', title: '¥300W', subtitle: '单日 GMV 实战峰值', description: '连接平台节奏、活动策略与团队执行，让增长结果能够被复盘。', projectKey: 'commerce' },
  { eyebrow: 'ROBOTICS', title: '中邮机器人攻关', subtitle: '抓取成功率 99.2%', description: '参与机器人测试验证，将实验指标推进到真实业务场景。', projectKey: 'postal' },
];
