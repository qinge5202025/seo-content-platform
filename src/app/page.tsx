import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Search, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'SEO内容平台 - 智能内容创作与优化',
  description: '专业的SEO内容创作平台，提供AI驱动的内容生成、关键词优化、竞争分析等功能，助力您的网站获得更好的搜索排名。',
  keywords: 'SEO, 内容创作, 关键词优化, AI写作, 搜索引擎优化, 内容营销',
  openGraph: {
    title: 'SEO内容平台 - 智能内容创作与优化',
    description: '专业的SEO内容创作平台，提供AI驱动的内容生成、关键词优化、竞争分析等功能',
    type: 'website',
    locale: 'zh_CN',
  },
}

const features = [
  {
    icon: Search,
    title: '智能关键词分析',
    description: '基于AI的关键词研究和竞争分析，发现高价值的SEO机会',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'AI内容生成',
    description: '利用先进的AI技术，快速生成高质量、SEO友好的内容',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Shield,
    title: '内容质量保证',
    description: '多维度内容质量检测，确保内容的原创性和专业性',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Globe,
    title: '多语言支持',
    description: '支持多种语言的内容创作和SEO优化，拓展全球市场',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    title: '团队协作',
    description: '完善的团队协作功能，支持多人同时编辑和审核内容',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: TrendingUp,
    title: '数据分析',
    description: '详细的SEO数据分析和排名监控，实时跟踪优化效果',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
]

const stats = [
  { label: '活跃用户', value: '10,000+' },
  { label: '生成内容', value: '500,000+' },
  { label: '关键词优化', value: '1,000,000+' },
  { label: '客户满意度', value: '98%' },
]

const testimonials = [
  {
    name: '张明',
    role: '数字营销经理',
    company: '科技创新公司',
    content: '这个平台大大提高了我们的内容创作效率，SEO效果也非常显著。',
    avatar: '/avatars/user1.jpg',
  },
  {
    name: '李华',
    role: 'SEO专家',
    company: '电商平台',
    content: 'AI生成的内容质量超出预期，关键词优化功能特别实用。',
    avatar: '/avatars/user2.jpg',
  },
  {
    name: '王芳',
    role: '内容运营',
    company: '媒体公司',
    content: '团队协作功能让我们的工作流程更加顺畅，强烈推荐！',
    avatar: '/avatars/user3.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">SEO内容平台</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
              功能特性
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              价格方案
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              博客
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              联系我们
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">登录</Link>
            </Button>
            <Button asChild>
              <Link href="/register">免费试用</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* 英雄区域 */}
      <section className="relative py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 全新AI驱动的SEO内容平台
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              智能创作
              <span className="gradient-text"> SEO内容</span>
              <br />提升搜索排名
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              利用先进的AI技术，快速生成高质量、SEO友好的内容。从关键词研究到内容优化，
              一站式解决您的SEO内容需求，让您的网站在搜索引擎中脱颖而出。
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/register">
                  开始免费试用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">观看演示</Link>
              </Button>
            </div>
            
            <div className="mt-16">
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
                <div className="relative rounded-xl border bg-background/50 p-2 shadow-2xl">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="SEO内容平台界面预览"
                    width={1200}
                    height={675}
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特性 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              强大的功能特性
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              我们提供全面的SEO内容解决方案，帮助您在竞争激烈的搜索引擎中获得优势
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              用户评价
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              看看我们的用户怎么说
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="">
                <CardContent className="pt-6">
                  <blockquote className="text-lg mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              准备开始您的SEO内容之旅？
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              立即注册，免费试用我们的AI驱动SEO内容平台，体验智能内容创作的魅力
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/register">
                  立即开始免费试用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">联系销售团队</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t bg-muted/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl">SEO内容平台</span>
              </div>
              <p className="text-sm text-muted-foreground">
                专业的AI驱动SEO内容创作平台，助力您的网站获得更好的搜索排名。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/features" className="hover:text-foreground transition-colors">功能特性</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground transition-colors">价格方案</Link></li>
                <li><Link href="/api" className="hover:text-foreground transition-colors">API文档</Link></li>
                <li><Link href="/integrations" className="hover:text-foreground transition-colors">集成</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">资源</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blog" className="hover:text-foreground transition-colors">博客</Link></li>
                <li><Link href="/help" className="hover:text-foreground transition-colors">帮助中心</Link></li>
                <li><Link href="/tutorials" className="hover:text-foreground transition-colors">教程</Link></li>
                <li><Link href="/community" className="hover:text-foreground transition-colors">社区</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">关于我们</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">联系我们</Link></li>
                <li><Link href="/careers" className="hover:text-foreground transition-colors">招聘</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">隐私政策</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 SEO内容平台. 保留所有权利.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                服务条款
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                隐私政策
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}