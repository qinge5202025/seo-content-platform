'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'

interface ProvidersProps {
  children: React.ReactNode
  session?: any
}

export function Providers({ children, session }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 数据缓存时间
            staleTime: 60 * 1000, // 1分钟
            // 缓存时间
            gcTime: 10 * 60 * 1000, // 10分钟
            // 重试次数
            retry: (failureCount, error: any) => {
              // 4xx错误不重试
              if (error?.status >= 400 && error?.status < 500) {
                return false
              }
              // 最多重试2次
              return failureCount < 2
            },
            // 重试延迟
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            // 窗口聚焦时重新获取
            refetchOnWindowFocus: false,
            // 网络重连时重新获取
            refetchOnReconnect: true,
          },
          mutations: {
            // 突变重试次数
            retry: 1,
            // 突变重试延迟
            retryDelay: 1000,
          },
        },
      })
  )

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark', 'system']}
        >
          {children}
          <Toaster />
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools 
              initialIsOpen={false} 
              position="bottom-right"
              buttonPosition="bottom-right"
            />
          )}
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

// 错误边界组件
export function ErrorBoundary({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}) {
  return (
    <div className="error-boundary">
      {children}
    </div>
  )
}

// 加载组件
export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="loading-provider">
      {children}
    </div>
  )
}

// 全局状态管理
export function GlobalStateProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="global-state-provider">
      {children}
    </div>
  )
}

// 组合所有Provider
export function AppProviders({ 
  children, 
  session 
}: { 
  children: React.ReactNode
  session?: any 
}) {
  return (
    <ErrorBoundary>
      <Providers session={session}>
        <LoadingProvider>
          <GlobalStateProvider>
            {children}
          </GlobalStateProvider>
        </LoadingProvider>
      </Providers>
    </ErrorBoundary>
  )
}