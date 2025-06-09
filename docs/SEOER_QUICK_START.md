# SEO内容生成平台 - 快速开始指南

## 🚀 项目简介

欢迎使用AI驱动的SEO内容生成平台！这是一个基于Next.js构建的现代化Web应用，旨在帮助内容创作者快速生成高质量、SEO优化的文章内容。

### ✨ 核心特性

- 🤖 **AI智能生成**: 基于GPT-4的内容生成引擎
- 📊 **SEO优化**: 自动化SEO分析和优化建议
- 🎨 **现代化UI**: 基于Ant Design的美观界面
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🔐 **安全可靠**: JWT认证和数据加密保护

---

## 🛠️ 开发环境要求

### 必需软件

| 软件 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | v18.0+ | JavaScript运行环境 |
| npm | v8.0+ | 包管理器 |
| PostgreSQL | v14.0+ | 主数据库 |
| Git | v2.30+ | 版本控制 |

### 推荐开发工具

**代码编辑器**: Visual Studio Code

**必装VSCode插件**:
```
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- Prisma
- GitLens
- Auto Rename Tag
- Bracket Pair Colorizer
```

**浏览器扩展**:
```
- React Developer Tools
- Redux DevTools (如果使用Redux)
- Lighthouse
- Web Developer
```

---

## 📦 项目初始化

### 1. 克隆项目

```bash
# 克隆仓库
git clone https://github.com/your-org/seo-content-platform.git
cd seo-content-platform

# 查看项目结构
ls -la
```

### 2. 安装依赖

```bash
# 安装所有依赖包
npm install

# 或者使用yarn
yarn install

# 验证安装
npm list --depth=0
```

### 3. 环境配置

```bash
# 复制环境变量模板
cp .env.example .env.local

# 编辑环境变量文件
nano .env.local  # 或使用你喜欢的编辑器
```

**环境变量配置示例**:
```env
# 数据库配置
DATABASE_URL="postgresql://username:password@localhost:5432/seoer_db"

# JWT密钥
JWT_SECRET="your-super-secret-jwt-key-here"
REFRESH_TOKEN_SECRET="your-refresh-token-secret-here"

# OpenAI API配置
OPENAI_API_KEY="sk-your-openai-api-key-here"
OPENAI_MODEL="gpt-4"

# 应用配置
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# 邮件服务配置 (可选)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Redis配置 (可选，用于缓存)
REDIS_URL="redis://localhost:6379"
```

### 4. 数据库设置

```bash
# 启动PostgreSQL服务
# macOS (使用Homebrew)
brew services start postgresql

# Windows (使用服务管理器)
# 启动PostgreSQL服务

# 创建数据库
psql -U postgres
CREATE DATABASE seoer_db;
\q

# 运行数据库迁移
npx prisma migrate dev --name init

# 生成Prisma客户端
npx prisma generate

# 填充种子数据
npx prisma db seed
```

### 5. 启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 或者使用yarn
yarn dev

# 服务器启动后，访问以下地址:
# 前端应用: http://localhost:3000
# API文档: http://localhost:3000/api-docs
```

---

## 🎯 快速启动模板

### 创建新项目 (从零开始)

如果你想从零开始创建类似的项目，可以使用以下命令:

```bash
# 使用Next.js创建项目
npx create-next-app@latest seo-content-platform --typescript --tailwind --eslint --app

cd seo-content-platform

# 安装核心依赖
npm install @prisma/client prisma
npm install antd @ant-design/icons
npm install openai
npm install jsonwebtoken bcryptjs
npm install zod
npm install @types/jsonwebtoken @types/bcryptjs

# 安装开发依赖
npm install -D @types/node
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### 基础项目结构

```bash
# 创建基础目录结构
mkdir -p src/{components,lib,types,utils}
mkdir -p src/components/{ui,forms,layout,features}
mkdir -p src/app/{api,dashboard,auth}
mkdir -p docs tests public/images

# 创建基础配置文件
touch .env.example
touch prisma/schema.prisma
touch tailwind.config.js
touch next.config.js
```

---

## 🏃‍♂️ 项目启动步骤

### 第一次运行项目

1. **检查环境**
```bash
# 检查Node.js版本
node --version  # 应该 >= 18.0.0

# 检查npm版本
npm --version   # 应该 >= 8.0.0

# 检查PostgreSQL
psql --version  # 应该 >= 14.0
```

2. **验证配置**
```bash
# 测试数据库连接
npx prisma db pull

# 检查环境变量
node -e "console.log(process.env.DATABASE_URL ? '✅ 数据库配置正确' : '❌ 数据库配置缺失')"
node -e "console.log(process.env.OPENAI_API_KEY ? '✅ OpenAI配置正确' : '❌ OpenAI配置缺失')"
```

3. **启动服务**
```bash
# 启动开发服务器
npm run dev

# 在新终端窗口中启动数据库管理界面 (可选)
npx prisma studio
```

4. **验证功能**
- 访问 http://localhost:3000 查看首页
- 注册新用户账户
- 尝试生成一篇测试文章
- 检查SEO分析功能

### 日常开发流程

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 安装新依赖 (如果有)
npm install

# 3. 运行数据库迁移 (如果有)
npx prisma migrate dev

# 4. 启动开发服务器
npm run dev

# 5. 开始开发...
```

---

## 📋 下一步开发计划

### Phase 1: 基础功能开发 (第1-2周)

**优先级: 高**

- [ ] 用户认证系统
  - [ ] 用户注册/登录页面
  - [ ] JWT Token管理
  - [ ] 密码重置功能
  - [ ] 用户资料管理

- [ ] 基础UI组件
  - [ ] 通用Button组件
  - [ ] 表单组件 (Input, Select, TextArea)
  - [ ] 布局组件 (Header, Sidebar, Footer)
  - [ ] 加载和错误状态组件

**开发任务**:
```bash
# 创建认证相关组件
touch src/components/forms/LoginForm.tsx
touch src/components/forms/RegisterForm.tsx
touch src/app/(auth)/login/page.tsx
touch src/app/(auth)/register/page.tsx

# 创建API路由
touch src/app/api/auth/login/route.ts
touch src/app/api/auth/register/route.ts
touch src/app/api/auth/refresh/route.ts
```

### Phase 2: 核心功能开发 (第3-4周)

**优先级: 高**

- [ ] AI内容生成
  - [ ] OpenAI API集成
  - [ ] 文章生成表单
  - [ ] 生成进度显示
  - [ ] 生成历史记录

- [ ] 文章管理
  - [ ] 文章列表页面
  - [ ] 文章详情页面
  - [ ] 文章编辑功能
  - [ ] 文章分类和标签

**开发任务**:
```bash
# 创建生成相关组件
touch src/components/features/ArticleGenerator.tsx
touch src/components/features/GenerationProgress.tsx
touch src/app/dashboard/generate/page.tsx

# 创建文章管理组件
touch src/components/features/ArticleList.tsx
touch src/components/features/ArticleEditor.tsx
touch src/app/dashboard/articles/page.tsx
```

### Phase 3: 高级功能开发 (第5-6周)

**优先级: 中**

- [ ] SEO分析功能
  - [ ] SEO评分算法
  - [ ] 优化建议生成
  - [ ] 关键词分析
  - [ ] 竞争对手分析

- [ ] 用户体验优化
  - [ ] 响应式设计完善
  - [ ] 性能优化
  - [ ] 错误处理改进
  - [ ] 用户反馈收集

### Phase 4: 部署和优化 (第7-8周)

**优先级: 中**

- [ ] 生产环境部署
  - [ ] Vercel部署配置
  - [ ] 数据库迁移到云端
  - [ ] 环境变量配置
  - [ ] 域名和SSL配置

- [ ] 监控和分析
  - [ ] 错误监控 (Sentry)
  - [ ] 性能监控 (Web Vitals)
  - [ ] 用户行为分析 (Google Analytics)
  - [ ] API监控和日志

---

## 🔧 推荐开发工具

### 代码质量工具

```bash
# 安装代码质量工具
npm install -D eslint prettier husky lint-staged

# 配置pre-commit钩子
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

**package.json配置**:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

### 测试工具

```bash
# 安装测试依赖
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event

# 创建测试配置
touch jest.config.js
touch jest.setup.js
```

### 数据库工具

```bash
# Prisma Studio (数据库可视化)
npx prisma studio

# 数据库迁移
npx prisma migrate dev --name feature_name

# 重置数据库
npx prisma migrate reset
```

---

## ❓ 常见问题解决

### 数据库连接问题

**问题**: `Error: P1001: Can't reach database server`

**解决方案**:
```bash
# 1. 检查PostgreSQL是否运行
ps aux | grep postgres

# 2. 启动PostgreSQL服务
# macOS
brew services start postgresql

# Windows
net start postgresql-x64-14

# 3. 检查数据库URL格式
echo $DATABASE_URL
```

### OpenAI API问题

**问题**: `Error: 401 Unauthorized`

**解决方案**:
```bash
# 1. 检查API密钥
echo $OPENAI_API_KEY

# 2. 验证API密钥有效性
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
     https://api.openai.com/v1/models

# 3. 检查账户余额
# 登录OpenAI控制台查看使用情况
```

### 端口占用问题

**问题**: `Error: listen EADDRINUSE: address already in use :::3000`

**解决方案**:
```bash
# 1. 查找占用端口的进程
lsof -ti:3000

# 2. 终止进程
kill -9 $(lsof -ti:3000)

# 3. 或者使用不同端口
npm run dev -- -p 3001
```

### 依赖安装问题

**问题**: `npm ERR! peer dep missing`

**解决方案**:
```bash
# 1. 清理缓存
npm cache clean --force

# 2. 删除node_modules和package-lock.json
rm -rf node_modules package-lock.json

# 3. 重新安装
npm install

# 4. 如果仍有问题，使用--legacy-peer-deps
npm install --legacy-peer-deps
```

---

## 📚 学习资源

### 官方文档

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev/)
- [Ant Design 文档](https://ant.design/docs/react/introduce)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Prisma 文档](https://www.prisma.io/docs)
- [OpenAI API 文档](https://platform.openai.com/docs)

### 推荐教程

**Next.js 学习路径**:
1. [Next.js 官方教程](https://nextjs.org/learn)
2. [Vercel Next.js 示例](https://github.com/vercel/next.js/tree/canary/examples)
3. [Next.js 最佳实践](https://nextjs.org/docs/pages/building-your-application)

**React 进阶**:
1. [React 官方教程](https://react.dev/learn)
2. [React Hooks 深入](https://react.dev/reference/react)
3. [React 性能优化](https://react.dev/reference/react/memo)

**TypeScript 学习**:
1. [TypeScript 官方手册](https://www.typescriptlang.org/docs/)
2. [TypeScript 与 React](https://react-typescript-cheatsheet.netlify.app/)

### 社区资源

- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [Next.js Discord](https://discord.com/invite/bUG2bvbtHy)
- [React 中文社区](https://react.docschina.org/)
- [掘金前端社区](https://juejin.cn/frontend)

---

## 🤝 贡献指南

### 开发流程

1. **Fork项目**
```bash
# Fork项目到你的GitHub账户
# 然后克隆你的fork
git clone https://github.com/your-username/seo-content-platform.git
```

2. **创建功能分支**
```bash
git checkout -b feature/your-feature-name
```

3. **开发和测试**
```bash
# 开发你的功能
# 运行测试
npm test

# 检查代码质量
npm run lint
npm run type-check
```

4. **提交代码**
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

5. **创建Pull Request**
- 在GitHub上创建Pull Request
- 填写详细的描述
- 等待代码审查

### 代码规范

**Commit Message格式**:
```
type(scope): description

[optional body]

[optional footer]
```

**类型说明**:
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

---

## 📞 获取帮助

如果你在开发过程中遇到问题，可以通过以下方式获取帮助:

1. **查看文档**: 首先查看本文档和相关技术文档
2. **搜索Issues**: 在GitHub仓库中搜索相关问题
3. **创建Issue**: 如果没有找到解决方案，创建新的Issue
4. **联系团队**: 发送邮件到 dev-team@seoer-platform.com

**Issue模板**:
```markdown
## 问题描述
简要描述你遇到的问题

## 复现步骤
1. 第一步
2. 第二步
3. 第三步

## 期望结果
描述你期望的结果

## 实际结果
描述实际发生的情况

## 环境信息
- 操作系统: 
- Node.js版本: 
- npm版本: 
- 浏览器: 

## 额外信息
其他可能有用的信息
```

---

**祝你开发愉快！🎉**

*最后更新时间: 2024-01-15*