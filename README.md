# 张智博个人作品集

一个使用 React 与 Vite 构建的个人作品集网站，用于展示个人介绍、研究经历、项目作品、奖项荣誉和联系方式。

## 功能

- 响应式单页作品集布局
- 个人介绍与研究方向展示
- 项目、成果及荣誉陈列
- 联系方式与页面导航
- 自定义交互动效与视觉组件

## 技术栈

- React 19
- Vite 7
- CSS
- Inter Variable Font

## 本地运行

需要安装 Node.js，并启用 pnpm。

```bash
pnpm install
pnpm dev
```

启动后访问 `http://127.0.0.1:5173`。

## 构建

```bash
pnpm build
```

构建结果会生成在 `dist` 目录中。

## 项目结构

```text
public/                 静态资源
src/
  components/           可复用组件
  data/                 页面内容数据
  hooks/                页面交互逻辑
  sections/             页面区块
  main.jsx              应用入口
  style.css             全局样式
index.html              HTML 入口
vite.config.js          Vite 配置
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |

## 许可

本项目内容与设计用于个人作品展示。未经许可，请勿直接复制或用于商业用途。
