# SEO内容生成平台 - API接口文档

## 📋 API概述

本文档描述了AI驱动的SEO内容生成平台的RESTful API接口规范。所有API接口遵循REST设计原则，使用JSON格式进行数据交换。

### 🌐 基础信息

- **Base URL**: `https://api.seoer-platform.com/v1`
- **开发环境**: `http://localhost:3000/api`
- **协议**: HTTPS (生产环境) / HTTP (开发环境)
- **数据格式**: JSON
- **字符编码**: UTF-8

### 🔐 认证方式

使用JWT (JSON Web Token) 进行身份认证：

```http
Authorization: Bearer <your-jwt-token>
Content-Type: application/json
```

---

## 📊 通用响应格式

### 成功响应

```json
{
  "success": true,
  "data": {
    // 具体数据内容
  },
  "message": "操作成功",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### 错误响应

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "请求参数验证失败",
    "details": [
      {
        "field": "title",
        "message": "标题不能为空"
      }
    ]
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### 分页响应

```json
{
  "success": true,
  "data": {
    "items": [
      // 数据项列表
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

---

## 🔑 用户认证接口

### 用户注册

**接口**: `POST /auth/register`

**描述**: 创建新用户账户

**请求参数**:
```json
{
  "name": "张三",
  "email": "zhangsan@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "张三",
      "email": "zhangsan@example.com",
      "plan": "free",
      "createdAt": "2024-01-15T10:30:00Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 900
    }
  },
  "message": "注册成功"
}
```

### 用户登录

**接口**: `POST /auth/login`

**描述**: 用户登录获取访问令牌

**请求参数**:
```json
{
  "email": "zhangsan@example.com",
  "password": "password123"
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "张三",
      "email": "zhangsan@example.com",
      "plan": "pro",
      "avatar": "https://example.com/avatar.jpg"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 900
    }
  },
  "message": "登录成功"
}
```

### 刷新Token

**接口**: `POST /auth/refresh`

**描述**: 使用刷新令牌获取新的访问令牌

**请求参数**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 900
  }
}
```

### 用户登出

**接口**: `POST /auth/logout`

**描述**: 用户登出，使令牌失效

**请求头**: 需要Authorization

**响应示例**:
```json
{
  "success": true,
  "message": "登出成功"
}
```

### 获取用户信息

**接口**: `GET /auth/me`

**描述**: 获取当前登录用户的详细信息

**请求头**: 需要Authorization

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "name": "张三",
    "email": "zhangsan@example.com",
    "plan": "pro",
    "avatar": "https://example.com/avatar.jpg",
    "quota": {
      "used": 45,
      "limit": 500,
      "resetDate": "2024-02-01T00:00:00Z"
    },
    "createdAt": "2024-01-01T10:30:00Z",
    "lastLoginAt": "2024-01-15T10:30:00Z"
  }
}
```

---

## 📝 文章管理接口

### 获取文章列表

**接口**: `GET /articles`

**描述**: 获取用户的文章列表，支持分页和筛选

**请求头**: 需要Authorization

**查询参数**:
- `page` (number): 页码，默认1
- `limit` (number): 每页数量，默认20，最大100
- `type` (string): 文章类型筛选 (review, top_list, comparison, guide)
- `status` (string): 状态筛选 (draft, published, archived)
- `search` (string): 搜索关键词
- `sortBy` (string): 排序字段 (createdAt, updatedAt, title)
- `sortOrder` (string): 排序方向 (asc, desc)

**请求示例**:
```http
GET /articles?page=1&limit=20&type=review&status=published&search=iPhone&sortBy=createdAt&sortOrder=desc
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "article_123",
        "title": "iPhone 15 Pro 深度评测：值得升级吗？",
        "type": "review",
        "status": "published",
        "excerpt": "iPhone 15 Pro带来了哪些新功能...",
        "seoScore": 85,
        "wordCount": 2500,
        "keywords": ["iPhone 15 Pro", "评测", "苹果手机"],
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-15T11:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 45,
      "totalPages": 3,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### 获取单篇文章

**接口**: `GET /articles/{id}`

**描述**: 获取指定文章的详细信息

**请求头**: 需要Authorization

**路径参数**:
- `id` (string): 文章ID

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "article_123",
    "title": "iPhone 15 Pro 深度评测：值得升级吗？",
    "content": "# iPhone 15 Pro 深度评测\n\n## 外观设计\n...",
    "type": "review",
    "status": "published",
    "excerpt": "iPhone 15 Pro带来了哪些新功能...",
    "metaTitle": "iPhone 15 Pro评测 - 2024年最值得买的苹果手机",
    "metaDescription": "详细评测iPhone 15 Pro的性能、摄像头、电池续航等方面...",
    "keywords": ["iPhone 15 Pro", "评测", "苹果手机"],
    "tags": ["数码评测", "苹果", "智能手机"],
    "categories": ["数码科技"],
    "seoScore": 85,
    "seoAnalysis": {
      "titleScore": 90,
      "metaScore": 85,
      "keywordScore": 80,
      "contentScore": 85,
      "suggestions": [
        "建议在文章中增加更多相关关键词",
        "可以添加更多内部链接"
      ]
    },
    "wordCount": 2500,
    "readingTime": 10,
    "generationParams": {
      "productName": "iPhone 15 Pro",
      "targetKeywords": ["iPhone 15 Pro评测"],
      "tone": "professional",
      "length": "detailed"
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

### 创建文章

**接口**: `POST /articles`

**描述**: 创建新文章

**请求头**: 需要Authorization

**请求参数**:
```json
{
  "title": "iPhone 15 Pro 深度评测：值得升级吗？",
  "content": "# iPhone 15 Pro 深度评测\n\n## 外观设计\n...",
  "type": "review",
  "status": "draft",
  "excerpt": "iPhone 15 Pro带来了哪些新功能...",
  "metaTitle": "iPhone 15 Pro评测 - 2024年最值得买的苹果手机",
  "metaDescription": "详细评测iPhone 15 Pro的性能、摄像头、电池续航等方面...",
  "keywords": ["iPhone 15 Pro", "评测", "苹果手机"],
  "tags": ["数码评测", "苹果", "智能手机"],
  "categories": ["数码科技"]
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "article_124",
    "title": "iPhone 15 Pro 深度评测：值得升级吗？",
    "status": "draft",
    "createdAt": "2024-01-15T12:00:00Z"
  },
  "message": "文章创建成功"
}
```

### 更新文章

**接口**: `PUT /articles/{id}`

**描述**: 更新指定文章

**请求头**: 需要Authorization

**路径参数**:
- `id` (string): 文章ID

**请求参数**: 与创建文章相同，所有字段都是可选的

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "article_123",
    "title": "iPhone 15 Pro 深度评测：值得升级吗？（更新版）",
    "updatedAt": "2024-01-15T13:00:00Z"
  },
  "message": "文章更新成功"
}
```

### 删除文章

**接口**: `DELETE /articles/{id}`

**描述**: 删除指定文章

**请求头**: 需要Authorization

**路径参数**:
- `id` (string): 文章ID

**响应示例**:
```json
{
  "success": true,
  "message": "文章删除成功"
}
```

---

## 🤖 AI内容生成接口

### 生成产品评测文章

**接口**: `POST /generate/review`

**描述**: 使用AI生成产品评测文章

**请求头**: 需要Authorization

**请求参数**:
```json
{
  "productName": "iPhone 15 Pro",
  "productCategory": "智能手机",
  "targetKeywords": ["iPhone 15 Pro评测", "苹果手机"],
  "tone": "professional", // professional, casual, enthusiastic
  "length": "detailed", // brief, standard, detailed
  "focusAreas": ["性能", "摄像头", "电池续航", "设计"],
  "targetAudience": "科技爱好者",
  "includeComparison": true,
  "comparisonProducts": ["iPhone 14 Pro", "Samsung Galaxy S24"]
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "taskId": "task_123",
    "status": "processing",
    "estimatedTime": 30,
    "message": "文章生成中，预计30秒完成"
  }
}
```

### 生成十大列表文章

**接口**: `POST /generate/top-list`

**描述**: 使用AI生成十大推荐列表文章

**请求头**: 需要Authorization

**请求参数**:
```json
{
  "listTitle": "2024年十大最佳智能手机",
  "category": "智能手机",
  "targetKeywords": ["最佳智能手机", "手机推荐"],
  "criteria": ["性能", "价格", "摄像头", "电池续航"],
  "priceRange": {
    "min": 1000,
    "max": 8000
  },
  "tone": "professional",
  "includeSpecs": true,
  "includePricing": true
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "taskId": "task_124",
    "status": "processing",
    "estimatedTime": 45,
    "message": "列表文章生成中，预计45秒完成"
  }
}
```

### 查询生成任务状态

**接口**: `GET /generate/status/{taskId}`

**描述**: 查询AI生成任务的状态

**请求头**: 需要Authorization

**路径参数**:
- `taskId` (string): 任务ID

**响应示例 - 处理中**:
```json
{
  "success": true,
  "data": {
    "taskId": "task_123",
    "status": "processing",
    "progress": 65,
    "currentStep": "生成文章内容",
    "estimatedTimeRemaining": 15
  }
}
```

**响应示例 - 完成**:
```json
{
  "success": true,
  "data": {
    "taskId": "task_123",
    "status": "completed",
    "progress": 100,
    "result": {
      "articleId": "article_125",
      "title": "iPhone 15 Pro 深度评测：值得升级吗？",
      "content": "# iPhone 15 Pro 深度评测\n\n...",
      "seoScore": 88,
      "wordCount": 2800,
      "generationTime": 28
    }
  }
}
```

**响应示例 - 失败**:
```json
{
  "success": false,
  "data": {
    "taskId": "task_123",
    "status": "failed",
    "error": {
      "code": "AI_SERVICE_ERROR",
      "message": "AI服务暂时不可用，请稍后重试"
    }
  }
}
```

### 获取生成历史

**接口**: `GET /generate/history`

**描述**: 获取用户的AI生成历史记录

**请求头**: 需要Authorization

**查询参数**:
- `page` (number): 页码，默认1
- `limit` (number): 每页数量，默认20
- `type` (string): 生成类型筛选
- `status` (string): 状态筛选

**响应示例**:
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "taskId": "task_123",
        "type": "review",
        "status": "completed",
        "productName": "iPhone 15 Pro",
        "articleId": "article_125",
        "generationTime": 28,
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 15,
      "totalPages": 1
    }
  }
}
```

---

## 📊 SEO分析接口

### 分析文章SEO

**接口**: `POST /seo/analyze`

**描述**: 分析文章的SEO表现并提供优化建议

**请求头**: 需要Authorization

**请求参数**:
```json
{
  "articleId": "article_123",
  "targetKeywords": ["iPhone 15 Pro评测", "苹果手机"]
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "overallScore": 85,
    "analysis": {
      "title": {
        "score": 90,
        "length": 28,
        "hasKeyword": true,
        "suggestions": ["标题长度适中，包含主要关键词"]
      },
      "metaDescription": {
        "score": 85,
        "length": 155,
        "hasKeyword": true,
        "suggestions": ["描述长度合适，建议增加更多吸引点击的词汇"]
      },
      "keywords": {
        "score": 80,
        "density": {
          "iPhone 15 Pro评测": 2.1,
          "苹果手机": 1.8
        },
        "suggestions": ["关键词密度合理，可以适当增加相关长尾关键词"]
      },
      "content": {
        "score": 85,
        "wordCount": 2500,
        "readability": 78,
        "structure": {
          "hasH1": true,
          "hasH2": true,
          "hasH3": true,
          "headingCount": 8
        },
        "suggestions": [
          "文章结构清晰，建议增加更多小标题",
          "可以添加更多内部链接"
        ]
      },
      "images": {
        "score": 70,
        "count": 5,
        "altTextCount": 3,
        "suggestions": ["建议为所有图片添加alt文本"]
      }
    },
    "recommendations": [
      {
        "priority": "high",
        "category": "images",
        "title": "完善图片alt文本",
        "description": "为剩余2张图片添加描述性的alt文本",
        "impact": "提升可访问性和SEO表现"
      },
      {
        "priority": "medium",
        "category": "content",
        "title": "增加内部链接",
        "description": "添加3-5个指向相关文章的内部链接",
        "impact": "提升页面权重和用户体验"
      }
    ]
  }
}
```

---

## 📈 数据统计接口

### 获取用户统计数据

**接口**: `GET /stats/dashboard`

**描述**: 获取用户仪表板统计数据

**请求头**: 需要Authorization

**查询参数**:
- `period` (string): 统计周期 (7d, 30d, 90d, 1y)

**响应示例**:
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalArticles": 45,
      "publishedArticles": 38,
      "draftArticles": 7,
      "averageSeoScore": 82,
      "totalWords": 125000,
      "generationsUsed": 42,
      "generationsLimit": 500
    },
    "trends": {
      "articlesCreated": [
        { "date": "2024-01-08", "count": 3 },
        { "date": "2024-01-09", "count": 5 },
        { "date": "2024-01-10", "count": 2 },
        { "date": "2024-01-11", "count": 4 },
        { "date": "2024-01-12", "count": 6 },
        { "date": "2024-01-13", "count": 3 },
        { "date": "2024-01-14", "count": 4 }
      ],
      "seoScores": [
        { "date": "2024-01-08", "averageScore": 78 },
        { "date": "2024-01-09", "averageScore": 81 },
        { "date": "2024-01-10", "averageScore": 79 },
        { "date": "2024-01-11", "averageScore": 83 },
        { "date": "2024-01-12", "averageScore": 85 },
        { "date": "2024-01-13", "averageScore": 82 },
        { "date": "2024-01-14", "averageScore": 84 }
      ]
    },
    "topKeywords": [
      { "keyword": "iPhone评测", "count": 8 },
      { "keyword": "智能手机", "count": 6 },
      { "keyword": "数码产品", "count": 5 },
      { "keyword": "科技评测", "count": 4 },
      { "keyword": "产品推荐", "count": 3 }
    ],
    "articleTypes": [
      { "type": "review", "count": 25, "percentage": 55.6 },
      { "type": "top_list", "count": 12, "percentage": 26.7 },
      { "type": "comparison", "count": 5, "percentage": 11.1 },
      { "type": "guide", "count": 3, "percentage": 6.7 }
    ]
  }
}
```

---

## ❌ 错误代码说明

### 认证相关错误

| 错误代码 | HTTP状态码 | 描述 | 解决方案 |
|----------|------------|------|----------|
| `AUTH_TOKEN_MISSING` | 401 | 缺少认证令牌 | 在请求头中添加Authorization |
| `AUTH_TOKEN_INVALID` | 401 | 认证令牌无效 | 使用有效的JWT令牌 |
| `AUTH_TOKEN_EXPIRED` | 401 | 认证令牌已过期 | 使用refresh token获取新令牌 |
| `AUTH_INSUFFICIENT_PERMISSIONS` | 403 | 权限不足 | 检查用户权限或升级账户 |

### 请求相关错误

| 错误代码 | HTTP状态码 | 描述 | 解决方案 |
|----------|------------|------|----------|
| `VALIDATION_ERROR` | 400 | 请求参数验证失败 | 检查请求参数格式和必填字段 |
| `RESOURCE_NOT_FOUND` | 404 | 请求的资源不存在 | 检查资源ID是否正确 |
| `DUPLICATE_RESOURCE` | 409 | 资源已存在 | 使用不同的标识符 |
| `RATE_LIMIT_EXCEEDED` | 429 | 请求频率超限 | 降低请求频率或升级账户 |

### 业务相关错误

| 错误代码 | HTTP状态码 | 描述 | 解决方案 |
|----------|------------|------|----------|
| `QUOTA_EXCEEDED` | 402 | 配额已用完 | 升级账户或等待配额重置 |
| `AI_SERVICE_ERROR` | 503 | AI服务不可用 | 稍后重试或联系技术支持 |
| `GENERATION_FAILED` | 500 | 内容生成失败 | 检查生成参数或重新尝试 |
| `SEO_ANALYSIS_FAILED` | 500 | SEO分析失败 | 检查文章内容或重新分析 |

### 系统相关错误

| 错误代码 | HTTP状态码 | 描述 | 解决方案 |
|----------|------------|------|----------|
| `INTERNAL_SERVER_ERROR` | 500 | 服务器内部错误 | 联系技术支持 |
| `SERVICE_UNAVAILABLE` | 503 | 服务暂时不可用 | 稍后重试 |
| `DATABASE_ERROR` | 500 | 数据库错误 | 联系技术支持 |

---

## 🔄 API版本控制

### 版本策略

- **当前版本**: v1
- **版本格式**: `/api/v{version}`
- **向后兼容**: 保持至少2个主版本的向后兼容性
- **废弃通知**: 新版本发布前30天通知废弃计划

### 版本变更

**v1.0** (当前版本)
- 基础用户认证功能
- 文章管理CRUD操作
- AI内容生成功能
- SEO分析功能

**v1.1** (计划中)
- 批量操作支持
- 高级SEO分析
- 文章模板功能
- 协作功能

---

## 🧪 API测试

### 使用Postman测试

1. **导入Postman集合**
```bash
# 下载Postman集合文件
curl -o seoer-api.postman_collection.json \
  https://api.seoer-platform.com/docs/postman-collection
```

2. **设置环境变量**
```json
{
  "baseUrl": "http://localhost:3000/api",
  "accessToken": "{{your-jwt-token}}",
  "refreshToken": "{{your-refresh-token}}"
}
```

### 使用cURL测试

**登录示例**:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**获取文章列表**:
```bash
curl -X GET http://localhost:3000/api/articles \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"
```

**生成文章**:
```bash
curl -X POST http://localhost:3000/api/generate/review \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "productName": "iPhone 15 Pro",
    "targetKeywords": ["iPhone 15 Pro评测"],
    "tone": "professional",
    "length": "detailed"
  }'
```

### JavaScript SDK示例

```javascript
// 安装SDK
// npm install @seoer-platform/api-client

import { SeoerApiClient } from '@seoer-platform/api-client'

// 初始化客户端
const client = new SeoerApiClient({
  baseUrl: 'https://api.seoer-platform.com/v1',
  apiKey: 'your-api-key'
})

// 登录
const authResult = await client.auth.login({
  email: 'user@example.com',
  password: 'password123'
})

// 生成文章
const generateResult = await client.generate.review({
  productName: 'iPhone 15 Pro',
  targetKeywords: ['iPhone 15 Pro评测'],
  tone: 'professional'
})

// 获取文章列表
const articles = await client.articles.list({
  page: 1,
  limit: 20,
  type: 'review'
})
```

---

## 📞 技术支持

### 联系方式

- **API文档**: https://docs.seoer-platform.com
- **技术支持**: api-support@seoer-platform.com
- **状态页面**: https://status.seoer-platform.com
- **GitHub Issues**: https://github.com/seoer-platform/api/issues

### 支持时间

- **工作日**: 9:00 - 18:00 (UTC+8)
- **响应时间**: 
  - 紧急问题: 2小时内
  - 一般问题: 24小时内
  - 功能建议: 72小时内

---

*API文档最后更新时间: 2024-01-15*  
*文档版本: v1.0.0*