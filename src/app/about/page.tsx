'use client'
import Link from 'next/link'
import { Users, Target, Award, Globe, Heart, Zap, Shield, TrendingUp } from 'lucide-react'

const teamMembers = [
  {
    name: '张明',
    role: '创始人 & CEO',
    bio: '10年互联网产品经验，专注于AI和SEO技术的结合应用。',
    image: '/api/placeholder/150/150'
  },
  {
    name: '李华',
    role: 'CTO',
    bio: '前阿里巴巴技术专家，在AI算法和大数据处理方面有丰富经验。',
    image: '/api/placeholder/150/150'
  },
  {
    name: '王芳',
    role: '产品总监',
    bio: 'SEO行业资深专家，帮助数百家企业提升搜索排名。',
    image: '/api/placeholder/150/150'
  },
  {
    name: '刘强',
    role: '技术总监',
    bio: '全栈开发专家，专注于高性能Web应用和AI系统架构。',
    image: '/api/placeholder/150/150'
  }
]

const milestones = [
  {
    year: '2022',
    title: '公司成立',
    description: 'SEO内容平台正式成立，开始AI驱动的内容创作研发'
  },
  {
    year: '2023',
    title: '产品上线',
    description: '第一版产品正式发布，获得首批1000+用户'
  },
  {
    year: '2024',
    title: '快速增长',
    description: '用户突破10万，成为行业领先的AI内容创作平台'
  },
  {
    year: '2024',
    title: '技术突破',
    description: '推出新一代AI算法，内容质量和SEO效果显著提升'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">SEO内容平台</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">功能特性</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">价格方案</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">博客</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">联系我们</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">登录</Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                免费试用
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              关于我们
              <span className="block text-blue-200">让AI赋能内容创作</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              我们致力于通过先进的AI技术，帮助企业和个人创作高质量的SEO内容，
              提升搜索排名，实现数字营销目标。
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的使命</h2>
              <p className="text-lg text-gray-600">
                让每个人都能轻松创作出专业级的SEO内容，
                通过AI技术降低内容创作门槛，提升内容质量和效率。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的愿景</h2>
              <p className="text-lg text-gray-600">
                成为全球领先的AI内容创作平台，
                帮助百万企业和个人实现数字化转型和营销成功。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们的团队由来自顶级科技公司的资深专家组成，
              在AI、SEO、产品设计等领域拥有丰富经验。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从创立至今，我们始终专注于AI技术在内容创作领域的应用，
              不断创新，为用户提供更好的产品体验。
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8">
                    <div className={`text-${index % 2 === 0 ? 'right' : 'left'}`}>
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block text-sm font-semibold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这些价值观指导着我们的每一个决策，塑造着我们的企业文化。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">用户至上</h3>
              <p className="text-gray-600">始终以用户需求为中心，提供最佳的产品体验</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">持续创新</h3>
              <p className="text-gray-600">不断探索新技术，推动行业发展</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">诚信可靠</h3>
              <p className="text-gray-600">保持透明诚信，建立长期信任关系</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">追求卓越</h3>
              <p className="text-gray-600">在每个细节上精益求精，追求完美</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">我们的成就</h2>
            <p className="text-xl text-blue-100">
              数字见证我们的成长和用户的信任
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-blue-200">注册用户</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,000,000+</div>
              <div className="text-blue-200">生成内容</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">支持语言</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">服务可用性</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            准备开始您的AI内容创作之旅？
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            加入我们的平台，体验AI驱动的内容创作，提升您的SEO效果。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              免费开始
            </Link>
            <Link href="/demo" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              观看演示
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="ml-2 text-xl font-bold">SEO内容平台</span>
              </div>
              <p className="text-gray-400">
                AI驱动的内容创作平台，帮助您轻松创建高质量的SEO内容。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">功能特性</Link></li>
                <li><Link href="/pricing" className="hover:text-white">价格方案</Link></li>
                <li><Link href="/integrations" className="hover:text-white">集成</Link></li>
                <li><Link href="/api-docs" className="hover:text-white">API文档</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">帮助中心</Link></li>
                <li><Link href="/tutorials" className="hover:text-white">教程</Link></li>
                <li><Link href="/community" className="hover:text-white">社区</Link></li>
                <li><Link href="/contact" className="hover:text-white">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">关于我们</Link></li>
                <li><Link href="/careers" className="hover:text-white">招聘</Link></li>
                <li><Link href="/privacy" className="hover:text-white">隐私政策</Link></li>
                <li><Link href="/terms" className="hover:text-white">服务条款</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SEO内容平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}