---
name: personal-site
description: >-
  维护 MyInterface 仓库中的个人站（Vite + React + TypeScript）：求职首页、项目数据、
  Markdown 博客与笔记、构建产物 dist 部署到自有 Nginx。在用户编辑 pipchief.com 相关前端、
  添加文章/笔记或讨论部署与站点结构时使用。
---

# 个人站（MyInterface）

## 项目约定

- 技术栈：**Vite + React + TypeScript**，路由使用 `react-router-dom`；文章为 `src/content/**/*.md`，构建时打包进站点。
- 修改时优先**小范围改动**：不擅自引入新框架、不扩大范围到无关文件。
- 用户偏好**简体中文**沟通；页面内文案可按用户要求中英混排。

## 编辑要点

- **个人与求职信息**：`src/data/profile.ts`（姓名、职位、邮箱、外链、简介）。
- **项目列表**：`src/data/projects.ts`（GitHub、演示链接、`featured` 精选）。
- **博客**：`src/content/blog/*.md`，frontmatter 中 `category: blog`。
- **笔记**：`src/content/notes/*.md`，frontmatter 中 `category: note`；文件名（不含 `.md`）即 URL 中的 `slug`。
- **全局样式与主题色**：`src/index.css` 的 `:root` 变量。

## 部署提醒

- 本地执行 `npm run build`，将 **`dist/` 整个目录**同步到服务器 Nginx 的 `root`。
- SPA 需在 Nginx 配置 `try_files $uri $uri/ /index.html;`，否则刷新子路由会 404。
- 域名：`www.pipchief.com` / `pipchief.com` 由 Cloudflare DNS 指向服务器；纯前端不处理 DNS API。

## 输出习惯

- 引用本仓库已有代码时使用 Cursor 要求的代码引用格式（带行号与路径）。
- 非必要不新建说明类 markdown 文件；除非用户明确要求文档。
