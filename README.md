# SEO内容生成平台

一个基于AI驱动的专业SEO内容生成平台，帮助用户快速创建高质量的产品评测、推荐文章和SEO优化内容。

## 🚀 功能特性

- **智能产品评测**: AI分析产品特性，生成专业、客观的产品评测文章
- **十大推荐列表**: 自动生成各类产品的十大推荐列表，包含详细对比和价格分析
- **SEO优化分析**: 实时SEO评分和优化建议，提升搜索引擎排名
- **快速内容生成**: 几分钟内生成高质量文章，大幅提升创作效率
- **多模板支持**: 提供多种文章模板，适应不同内容需求
- **数据分析**: 详细的内容表现分析和优化建议

## 🛠️ 技术栈

- **前端**: Next.js 14, React 18, TypeScript
- **样式**: Tailwind CSS, Radix UI
- **数据库**: PostgreSQL, Prisma ORM
- **状态管理**: Zustand, React Query
- **认证**: NextAuth.js
- **部署**: Vercel

## 📋 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0
- PostgreSQL >= 13

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/seo-content-platform.git
cd seo-content-platform
```

### 2. 安装依赖

```bash
npm install
```

### 3. 环境配置

复制环境变量模板文件：

```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，配置必要的环境变量：

```env
# 数据库配置
DATABASE_URL="postgresql://username:password@localhost:5432/seo_platform"

# NextAuth配置
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# AI服务配置
OPENAI_API_KEY="your-openai-api-key"
```

### 4. 数据库设置

生成Prisma客户端：

```bash
npm run db:generate
```

运行数据库迁移：

```bash
npm run db:migrate
```

填充种子数据：

```bash
npm run db:seed
```

### 5. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📝 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行ESLint检查
- `npm run lint:fix` - 自动修复ESLint问题
- `npm run type-check` - TypeScript类型检查
- `npm run format` - 格式化代码
- `npm run db:generate` - 生成Prisma客户端
- `npm run db:migrate` - 运行数据库迁移
- `npm run db:seed` - 填充种子数据
- `npm run db:studio` - 打开Prisma Studio
- `npm run test` - 运行测试

## 📁 项目结构

```
seo-content-platform/
├── src/
│   ├── app/                 # Next.js App Router页面
│   ├── components/          # React组件
│   │   ├── ui/             # 基础UI组件
│   │   └── features/       # 功能组件
│   ├── lib/                # 工具函数和配置
│   ├── hooks/              # 自定义React Hooks
│   ├── store/              # 状态管理
│   └── types/              # TypeScript类型定义
├── prisma/                 # 数据库模式和迁移
├── public/                 # 静态资源
├── docs/                   # 项目文档
└── tests/                  # 测试文件
```

## 🔧 开发指南

### 代码规范

项目使用ESLint和Prettier进行代码规范化：

```bash
# 检查代码规范
npm run lint

# 自动修复
npm run lint:fix

# 格式化代码
npm run format
```

### 数据库操作

```bash
# 查看数据库
npm run db:studio

# 重置数据库
npm run db:reset

# 推送模式更改
npm run db:push
```

### 测试

```bash
# 运行所有测试
npm run test

# 监听模式
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 📚 API文档

详细的API文档请查看 [API文档](./docs/SEOER_API_DOCS.md)。

## 🚀 部署

### Vercel部署

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置环境变量
4. 部署

### 环境变量配置

生产环境需要配置以下环境变量：

- `DATABASE_URL` - 数据库连接字符串
- `NEXTAUTH_URL` - 应用URL
- `NEXTAUTH_SECRET` - NextAuth密钥
- `OPENAI_API_KEY` - OpenAI API密钥

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 支持

如果您有任何问题或建议，请：

- 创建 [Issue](https://github.com/your-username/seo-content-platform/issues)
- 发送邮件至 support@seoplatform.com
- 查看 [文档](./docs/)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和用户。

---

**SEO内容生成平台** - 让AI帮您创作专业SEO内容 🚀