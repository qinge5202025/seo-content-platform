import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            页面未找到
          </h2>
          <p className="text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移动。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            返回首页
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>或者您可以：</p>
            <div className="mt-2 space-x-4">
              <Link href="/about" className="text-indigo-600 hover:underline">
                关于我们
              </Link>
              <Link href="/dashboard" className="text-indigo-600 hover:underline">
                用户中心
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}