import HeaderView from "@/components/headerView";
import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我的博客',
  description: '一个使用 Next.js 构建的个人博客',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="flex flex-col min-h-screen">
        <HeaderView />
        <main className="container flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
