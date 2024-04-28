<!--
 * @Author: dushuai
 * @Date: 2024-03-29 12:30:24
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-28 15:36:13
 * @description: readme
-->

# React-Template

一个自用的 React 项目模板，主要为了减少每次项目开发前的重复操作。主要采用 Vite + React + TypeScript + SWC + Tailwind css + Zustand/Valtio + Ant Design 等常用技术栈和常用库构建。

> 预览地址：[https://react-template-ds.netlify.app](https://react-template-ds.netlify.app/)

## 主要功能

- [x] 动态路由
- [x] 完善的 Axios
- [x] 区分环境变量
- [x] Zustand/Valtio 状态管理仓库
- [x] Svg To Component

## 安装

```bash
pnpm create keepdesign

# 选择 react-pc-template

pnpm install
```

## 运行

```bash
pnpm dev
```

## 打包

```bash
pnpm sit

# or

pnpm prod
```

`

## 技术栈

主要采用 Vite + React + TypeScript + SWC + Tailwind css + Zustand/Valtio + Ant Design 等常用技术栈和常用库构建。

> 默认采用 Zustand 为主状态管理，如果项目需要使用 Valtio，可自行安装并切换 src/store/modules/valtio/\*\* 内主要逻辑

- [Vite](https://vitejs.cn/vite3-cn/)
- [React](https://react.dev/)
- [Tailwindcss](https://www.tailwindcss.cn/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Valtio](https://valtio.pmnd.rs/)
- [Ant Design](https://ant.design/index-cn/)
