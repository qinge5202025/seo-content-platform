import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'

// 导入Inter字体
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// 元数据配置
export const metadata: Metadata = {
  title: {
    default: 'SEO内容生成平台',
    template: '%s | SEO内容生成平台',
  },
  description: 'AI驱动的专业SEO内容生成平台，帮助您快速创建高质量的产品评测和推荐文章',
  keywords: ['SEO', '内容生成', 'AI写作', '产品评测', '内容营销', '自动化写作'],
  authors: [{ name: 'SEO内容平台团队' }],
  creator: 'SEO内容平台',
  publisher: 'SEO内容平台',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seo-content-platform.example.com'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh-CN',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://seo-content-platform.example.com',
    title: 'SEO内容生成平台',
    description: 'AI驱动的专业SEO内容生成平台，帮助您快速创建高质量的产品评测和推荐文章',
    siteName: 'SEO内容生成平台',
    images: [
      {
        url: 'https://seo-content-platform.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO内容生成平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO内容生成平台',
    description: 'AI驱动的专业SEO内容生成平台，帮助您快速创建高质量的产品评测和推荐文章',
    images: ['https://seo-content-platform.example.com/twitter-image.jpg'],
    creator: '@seoplatform',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['my-email@example.com', 'https://example.com/about-me'],
    },
  },
}

// 根布局组件
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}