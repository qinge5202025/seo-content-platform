'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ProvidersProps {
  children: React.ReactNode
  session?: any
}

export function Providers({ children, session }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }))

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools 
              initialIsOpen={false}
            />
          )}
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

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
      // src/components/providers.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // 确保导入路径正确

// ... 其他代码

function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools
          initialIsOpen={false}
          // 将 position 修改为 'bottom' 或 'top'
          // buttonPosition 则可以设置为 'bottom-left' 或 'bottom-right' 来控制按钮位置
          position="bottom" // 或者 'top'
          buttonPosition="bottom-left" // 或 'bottom-right'，这个通常可以放 left/right
        />
      )}
    </QueryClientProvider>
  );
}

export default Providers;
    </div>
  )
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="loading-provider">
      {children}
    </div>
  )
}

export function GlobalStateProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="global-state-provider">
      {children}
    </div>
  )
}

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