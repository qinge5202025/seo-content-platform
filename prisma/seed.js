// SEO内容生成平台 - 数据库种子数据
// 用于初始化数据库的基础数据

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 开始初始化数据库种子数据...')

  try {
    // ===========================================
    // 👤 创建用户数据
    // ===========================================
    
    console.log('📝 创建用户账户...')
    
    // 创建管理员用户
    const adminPassword = await bcrypt.hash('admin123456', 12)
    const admin = await prisma.user.upsert({
      where: { email: 'admin@seoer-platform.com' },
      update: {},
      create: {
        email: 'admin@seoer-platform.com',
        passwordHash: adminPassword,
        name: '系统管理员',
        plan: 'ENTERPRISE',
        emailVerified: true,
        emailVerifiedAt: new Date(),
        profile: {
          create: {
            company: 'SEO内容平台',
            bio: '系统管理员账户，负责平台管理和维护',
            timezone: 'Asia/Shanghai',
            language: 'zh-CN',
            preferences: {
              theme: 'light',
              notifications: {
                email: true,
                browser: true,
                sms: false
              },
              dashboard: {
                defaultView: 'overview',
                articlesPerPage: 20
              }
            }
          }
        }
      }
    })

    // 创建专业版测试用户
    const proPassword = await bcrypt.hash('pro123456', 12)
    const proUser = await prisma.user.upsert({
      where: { email: 'pro@example.com' },
      update: {},
      create: {
        email: 'pro@example.com',
        passwordHash: proPassword,
        name: '专业用户',
        plan: 'PRO',
        emailVerified: true,
        emailVerifiedAt: new Date(),
        profile: {
          create: {
            company: '数字营销公司',
            website: 'https://example.com',
            bio: '专注于SEO内容创作的数字营销专家',
            timezone: 'Asia/Shanghai',
            language: 'zh-CN',
            preferences: {
              theme: 'dark',
              notifications: {
                email: true,
                browser: true,
                sms: true
              }
            }
          }
        }
      }
    })

    // 创建免费版测试用户
    const freePassword = await bcrypt.hash('free123456', 12)
    const freeUser = await prisma.user.upsert({
      where: { email: 'free@example.com' },
      update: {},
      create: {
        email: 'free@example.com',
        passwordHash: freePassword,
        name: '免费用户',
        plan: 'FREE',
        emailVerified: true,
        emailVerifiedAt: new Date(),
        profile: {
          create: {
            company: '个人博客',
            bio: '刚开始学习SEO内容创作的新手',
            timezone: 'Asia/Shanghai',
            language: 'zh-CN'
          }
        }
      }
    })

    console.log(`✅ 创建了 ${[admin, proUser, freeUser].length} 个用户账户`)

    // ===========================================
    // 📊 创建用户配额
    // ===========================================
    
    console.log('📊 设置用户配额...')
    
    const nextMonth = new Date()
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    
    await prisma.userQuota.createMany({
      data: [
        // 管理员配额（无限制）
        {
          userId: admin.id,
          quotaType: 'articles',
          usedCount: 0,
          limitCount: -1, // -1 表示无限制
          nextResetAt: nextMonth
        },
        {
          userId: admin.id,
          quotaType: 'generations',
          usedCount: 0,
          limitCount: -1,
          nextResetAt: nextMonth
        },
        // 专业版用户配额
        {
          userId: proUser.id,
          quotaType: 'articles',
          usedCount: 15,
          limitCount: 500,
          nextResetAt: nextMonth
        },
        {
          userId: proUser.id,
          quotaType: 'generations',
          usedCount: 25,
          limitCount: 1000,
          nextResetAt: nextMonth
        },
        {
          userId: proUser.id,
          quotaType: 'api_calls',
          usedCount: 150,
          limitCount: 10000,
          nextResetAt: nextMonth
        },
        // 免费版用户配额
        {
          userId: freeUser.id,
          quotaType: 'articles',
          usedCount: 3,
          limitCount: 10,
          nextResetAt: nextMonth
        },
        {
          userId: freeUser.id,
          quotaType: 'generations',
          usedCount: 5,
          limitCount: 20,
          nextResetAt: nextMonth
        },
        {
          userId: freeUser.id,
          quotaType: 'api_calls',
          usedCount: 45,
          limitCount: 100,
          nextResetAt: nextMonth
        }
      ]
    })

    console.log('✅ 用户配额设置完成')

    // ===========================================
    // 🏷️ 创建标签数据
    // ===========================================
    
    console.log('🏷️ 创建标签数据...')
    
    const tags = await prisma.tag.createMany({
      data: [
        { name: '数码评测', slug: 'digital-review', color: '#1890ff', description: '数码产品评测相关内容' },
        { name: '智能手机', slug: 'smartphone', color: '#52c41a', description: '智能手机产品和技术' },
        { name: '笔记本电脑', slug: 'laptop', color: '#faad14', description: '笔记本电脑评测和推荐' },
        { name: '家电产品', slug: 'home-appliance', color: '#f5222d', description: '家用电器产品评测' },
        { name: '软件工具', slug: 'software-tool', color: '#722ed1', description: '软件应用和工具推荐' },
        { name: '游戏设备', slug: 'gaming-device', color: '#eb2f96', description: '游戏硬件和设备' },
        { name: '摄影器材', slug: 'photography', color: '#13c2c2', description: '相机和摄影设备' },
        { name: '音响设备', slug: 'audio-device', color: '#fa8c16', description: '音响和音频设备' },
        { name: '智能家居', slug: 'smart-home', color: '#a0d911', description: '智能家居产品和系统' },
        { name: '汽车科技', slug: 'automotive-tech', color: '#fadb14', description: '汽车技术和产品' }
      ]
    })

    console.log(`✅ 创建了 ${tags.count} 个标签`)

    // ===========================================
    // 📂 创建分类数据
    // ===========================================
    
    console.log('📂 创建分类数据...')
    
    // 创建主分类
    const digitalTech = await prisma.category.create({
      data: {
        name: '数码科技',
        slug: 'digital-tech',
        description: '数码产品和科技资讯',
        sortOrder: 1
      }
    })

    const lifestyle = await prisma.category.create({
      data: {
        name: '生活家居',
        slug: 'lifestyle',
        description: '生活用品和家居产品',
        sortOrder: 2
      }
    })

    const software = await prisma.category.create({
      data: {
        name: '软件应用',
        slug: 'software',
        description: '软件工具和应用推荐',
        sortOrder: 3
      }
    })

    const gaming = await prisma.category.create({
      data: {
        name: '游戏娱乐',
        slug: 'gaming',
        description: '游戏和娱乐产品',
        sortOrder: 4
      }
    })

    // 创建子分类
    await prisma.category.createMany({
      data: [
        // 数码科技子分类
        { name: '智能手机', slug: 'smartphones', parentId: digitalTech.id, sortOrder: 1 },
        { name: '笔记本电脑', slug: 'laptops', parentId: digitalTech.id, sortOrder: 2 },
        { name: '平板电脑', slug: 'tablets', parentId: digitalTech.id, sortOrder: 3 },
        { name: '智能穿戴', slug: 'wearables', parentId: digitalTech.id, sortOrder: 4 },
        
        // 生活家居子分类
        { name: '厨房电器', slug: 'kitchen-appliances', parentId: lifestyle.id, sortOrder: 1 },
        { name: '清洁用品', slug: 'cleaning-products', parentId: lifestyle.id, sortOrder: 2 },
        { name: '家具用品', slug: 'furniture', parentId: lifestyle.id, sortOrder: 3 },
        
        // 软件应用子分类
        { name: '办公软件', slug: 'office-software', parentId: software.id, sortOrder: 1 },
        { name: '设计工具', slug: 'design-tools', parentId: software.id, sortOrder: 2 },
        { name: '开发工具', slug: 'dev-tools', parentId: software.id, sortOrder: 3 },
        
        // 游戏娱乐子分类
        { name: '游戏主机', slug: 'gaming-consoles', parentId: gaming.id, sortOrder: 1 },
        { name: '游戏外设', slug: 'gaming-peripherals', parentId: gaming.id, sortOrder: 2 },
        { name: '游戏软件', slug: 'gaming-software', parentId: gaming.id, sortOrder: 3 }
      ]
    })

    console.log('✅ 分类数据创建完成')

    // ===========================================
    // 📝 创建AI生成模板
    // ===========================================
    
    console.log('🤖 创建AI生成模板...')
    
    await prisma.generationTemplate.createMany({
      data: [
        {
          name: '产品评测模板',
          type: 'REVIEW',
          description: '标准的产品评测文章模板，适用于各类数码产品',
          promptTemplate: `请为产品 "{{productName}}" 写一篇详细的评测文章。

要求：
1. 文章长度：{{length}}
2. 写作风格：{{tone}}
3. 重点关注：{{focusAreas}}
4. 目标关键词：{{keywords}}
5. 价格范围：{{priceRange}}

请按照以下结构组织文章：
- 产品概述和亮点
- 外观设计和工艺
- 功能特性详解
- 性能表现测试
- 使用体验分享
- 优缺点分析
- 竞品对比
- 购买建议和总结

注意：
- 保持客观公正的评测态度
- 提供具体的数据和测试结果
- 考虑不同用户群体的需求
- 包含实用的购买建议`,
          defaultParams: {
            length: 'detailed',
            tone: 'professional',
            focusAreas: ['性能', '设计', '价格', '用户体验'],
            includeSpecs: true,
            includePricing: true
          },
          isActive: true,
          createdBy: admin.id
        },
        {
          name: '十大推荐列表模板',
          type: 'TOP_LIST',
          description: '十大推荐列表文章模板，适用于产品排行和推荐',
          promptTemplate: `请创建一个关于 "{{listTitle}}" 的十大推荐列表。

要求：
1. 列出10个推荐项目
2. 每个项目包含详细介绍
3. 按照 {{criteria}} 进行排序
4. 包含价格信息：{{priceRange}}
5. 目标关键词：{{keywords}}
6. 目标受众：{{targetAudience}}

文章结构：
- 引言：说明推荐的背景和意义
- 选择标准：详细说明排名依据
- 十大推荐列表：
  每项包含：
  * 产品名称和图片
  * 核心特点和优势
  * 适用场景和用户群体
  * 价格信息和购买渠道
  * 用户评价摘要
- 购买指南：如何选择最适合的产品
- 总结建议：最终推荐和注意事项

注意：
- 确保推荐的多样性和实用性
- 提供清晰的比较维度
- 包含不同价位的选择`,
          defaultParams: {
            criteria: ['性能', '价格', '用户评价', '品牌信誉'],
            includeSpecs: true,
            includePricing: true,
            targetAudience: 'general'
          },
          isActive: true,
          createdBy: admin.id
        },
        {
          name: '产品对比模板',
          type: 'COMPARISON',
          description: '产品对比分析模板，适用于同类产品的详细比较',
          promptTemplate: `请创建一篇关于 "{{product1}}" 与 "{{product2}}" 的详细对比文章。

要求：
1. 对比维度：{{comparisonAspects}}
2. 写作风格：{{tone}}
3. 目标关键词：{{keywords}}
4. 文章长度：{{length}}

文章结构：
- 产品简介：两款产品的基本信息
- 规格对比：详细的参数对比表格
- 功能对比：核心功能的差异分析
- 性能对比：实际使用性能测试
- 设计对比：外观和用户体验对比
- 价格对比：性价比分析
- 适用场景：不同使用需求的推荐
- 总结建议：最终选择建议

注意：
- 保持客观中立的对比态度
- 提供具体的数据支撑
- 考虑不同用户的需求偏好`,
          defaultParams: {
            comparisonAspects: ['性能', '设计', '价格', '功能', '用户体验'],
            tone: 'objective',
            includeTable: true
          },
          isActive: true,
          createdBy: admin.id
        },
        {
          name: '使用指南模板',
          type: 'GUIDE',
          description: '产品使用指南和教程模板',
          promptTemplate: `请创建一篇关于 "{{guideTitle}}" 的详细使用指南。

要求：
1. 指南类型：{{guideType}}
2. 难度级别：{{difficultyLevel}}
3. 目标用户：{{targetUsers}}
4. 目标关键词：{{keywords}}

文章结构：
- 指南概述：说明指南的目的和适用范围
- 准备工作：所需工具和前置条件
- 详细步骤：分步骤的操作指导
- 注意事项：重要提醒和常见问题
- 进阶技巧：高级使用方法
- 故障排除：常见问题解决方案
- 总结：关键要点回顾

注意：
- 步骤要清晰易懂
- 提供图片或视频说明
- 考虑不同技能水平的用户`,
          defaultParams: {
            guideType: 'tutorial',
            difficultyLevel: 'beginner',
            includeImages: true,
            stepByStep: true
          },
          isActive: true,
          createdBy: admin.id
        }
      ]
    })

    console.log('✅ AI生成模板创建完成')

    // ===========================================
    // ⚙️ 创建系统设置
    // ===========================================
    
    console.log('⚙️ 创建系统设置...')
    
    await prisma.systemSetting.createMany({
      data: [
        {
          key: 'site_name',
          value: '"SEO内容生成平台"',
          description: '网站名称',
          isPublic: true
        },
        {
          key: 'site_description',
          value: '"AI驱动的专业SEO内容生成平台，帮助您快速创建高质量的产品评测和推荐文章"',
          description: '网站描述',
          isPublic: true
        },
        {
          key: 'default_seo_score_threshold',
          value: '80',
          description: '默认SEO评分阈值',
          isPublic: false
        },
        {
          key: 'max_article_length',
          value: '50000',
          description: '文章最大长度（字符）',
          isPublic: false
        },
        {
          key: 'ai_generation_timeout',
          value: '300',
          description: 'AI生成超时时间（秒）',
          isPublic: false
        },
        {
          key: 'free_plan_limits',
          value: JSON.stringify({
            articles: 10,
            generations: 20,
            api_calls: 100
          }),
          description: '免费计划限制',
          isPublic: false
        },
        {
          key: 'pro_plan_limits',
          value: JSON.stringify({
            articles: 500,
            generations: 1000,
            api_calls: 10000
          }),
          description: '专业计划限制',
          isPublic: false
        },
        {
          key: 'supported_languages',
          value: JSON.stringify(['zh-CN', 'en-US', 'ja-JP']),
          description: '支持的语言列表',
          isPublic: true
        },
        {
          key: 'maintenance_mode',
          value: 'false',
          description: '维护模式开关',
          isPublic: false
        },
        {
          key: 'registration_enabled',
          value: 'true',
          description: '是否允许用户注册',
          isPublic: true
        }
      ]
    })

    console.log('✅ 系统设置创建完成')

    // ===========================================
    // 📊 创建示例文章数据
    // ===========================================
    
    console.log('📝 创建示例文章...')
    
    // 获取创建的标签和分类
    const allTags = await prisma.tag.findMany()
    const smartphoneCategory = await prisma.category.findFirst({
      where: { slug: 'smartphones' }
    })
    
    // 创建示例文章
    const sampleArticle = await prisma.article.create({
      data: {
        userId: proUser.id,
        title: '2024年最佳智能手机推荐：十款值得购买的旗舰机型',
        content: `# 2024年最佳智能手机推荐：十款值得购买的旗舰机型

随着科技的不断发展，智能手机市场在2024年迎来了众多创新产品。本文将为您推荐十款最值得购买的旗舰智能手机，帮助您在众多选择中找到最适合的设备。

## 选择标准

我们的推荐基于以下几个关键标准：
- 处理器性能和运行速度
- 摄像头质量和拍照体验
- 电池续航能力
- 屏幕显示效果
- 系统流畅度和功能特性
- 性价比和用户评价

## 十大推荐机型

### 1. iPhone 15 Pro Max
**价格：** ¥9,999起
**核心特点：** A17 Pro芯片、钛金属机身、专业摄像系统

iPhone 15 Pro Max搭载了苹果最新的A17 Pro芯片，采用3nm工艺制程，性能相比上一代提升显著。钛金属机身不仅更加轻便，还提供了更好的耐用性。

### 2. Samsung Galaxy S24 Ultra
**价格：** ¥8,999起
**核心特点：** Snapdragon 8 Gen 3、S Pen支持、200MP主摄

三星Galaxy S24 Ultra继续保持了Note系列的精髓，内置S Pen为商务用户提供了便利的手写和绘图功能。

### 3. 小米14 Ultra
**价格：** ¥5,999起
**核心特点：** 徕卡影像系统、骁龙8 Gen 3、120W快充

小米14 Ultra在摄影方面表现出色，与徕卡合作的影像系统为用户带来了专业级的拍照体验。

## 购买建议

选择智能手机时，建议您：
1. 根据预算确定价格范围
2. 考虑主要使用场景（拍照、游戏、办公等）
3. 选择适合的屏幕尺寸
4. 关注电池续航能力
5. 考虑品牌售后服务

## 总结

以上十款智能手机都是2024年的优秀产品，各有特色。建议您根据个人需求和预算进行选择，相信都能为您带来出色的使用体验。`,
        excerpt: '2024年最值得购买的十款旗舰智能手机推荐，包含iPhone 15 Pro Max、Galaxy S24 Ultra等热门机型的详细评测和购买建议。',
        type: 'TOP_LIST',
        status: 'PUBLISHED',
        metaTitle: '2024年最佳智能手机推荐 - 十款旗舰机型评测',
        metaDescription: '专业评测2024年最值得购买的十款旗舰智能手机，包含详细参数对比、价格分析和购买建议，帮您选择最适合的手机。',
        slug: '2024-best-smartphones-top-10-flagship-models',
        wordCount: 1200,
        readingTime: 5,
        seoScore: 85,
        publishedAt: new Date(),
        keywords: {
          createMany: {
            data: [
              { keyword: '智能手机推荐', density: 2.5, isPrimary: true },
              { keyword: '2024手机', density: 1.8, isPrimary: false },
              { keyword: '旗舰手机', density: 1.5, isPrimary: false },
              { keyword: 'iPhone 15', density: 1.2, isPrimary: false },
              { keyword: 'Galaxy S24', density: 1.0, isPrimary: false }
            ]
          }
        },
        tags: {
          create: [
            { tagId: allTags[1].id }, // 智能手机
            { tagId: allTags[0].id }  // 数码评测
          ]
        },
        categories: smartphoneCategory ? {
          create: [{ categoryId: smartphoneCategory.id }]
        } : undefined
      }
    })

    // 为示例文章创建SEO分析
    await prisma.seoAnalysis.create({
      data: {
        articleId: sampleArticle.id,
        overallScore: 85,
        titleScore: 90,
        metaDescriptionScore: 88,
        keywordScore: 82,
        contentScore: 85,
        structureScore: 87,
        readabilityScore: 83,
        analysisDetails: {
          title: {
            length: 28,
            hasKeyword: true,
            isUnique: true,
            suggestions: ['标题长度适中，包含主要关键词']
          },
          metaDescription: {
            length: 156,
            hasKeyword: true,
            isCompelling: true,
            suggestions: ['描述长度合适，包含关键词和行动号召']
          },
          content: {
            wordCount: 1200,
            keywordDensity: 2.5,
            readabilityScore: 83,
            hasHeadings: true,
            suggestions: ['内容结构清晰，可适当增加内部链接']
          }
        },
        recommendations: [
          '可以添加更多内部链接提升SEO效果',
          '建议增加相关图片和alt标签',
          '可以考虑添加FAQ部分提升用户体验'
        ]
      }
    })

    console.log('✅ 示例文章创建完成')

    // ===========================================
    // 📈 创建示例生成任务
    // ===========================================
    
    console.log('🤖 创建示例生成任务...')
    
    await prisma.generationTask.create({
      data: {
        userId: proUser.id,
        taskType: 'TOP_LIST',
        status: 'COMPLETED',
        inputParams: {
          listTitle: '2024年最佳智能手机推荐',
          criteria: ['性能', '摄像', '续航', '价格'],
          priceRange: '3000-10000',
          keywords: ['智能手机推荐', '2024手机', '旗舰手机'],
          targetAudience: 'general'
        },
        resultArticleId: sampleArticle.id,
        processingTime: 45,
        tokensUsed: 3500,
        costAmount: 0.35,
        startedAt: new Date(Date.now() - 60000), // 1分钟前开始
        completedAt: new Date() // 刚完成
      }
    })

    console.log('✅ 示例生成任务创建完成')

    console.log('\n🎉 数据库种子数据初始化完成！')
    console.log('\n📋 创建的账户信息：')
    console.log('👑 管理员账户：admin@seoer-platform.com / admin123456')
    console.log('💼 专业版账户：pro@example.com / pro123456')
    console.log('🆓 免费版账户：free@example.com / free123456')
    console.log('\n🔗 您现在可以使用这些账户登录系统进行测试！')

  } catch (error) {
    console.error('❌ 种子数据初始化失败：', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })