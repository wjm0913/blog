import type { Metadata } from 'next'

export async function generateCommonMetadata(pageTitle: string, pageDescription: string): Promise<Metadata> {
  // 可以在这里添加一些通用的逻辑
  return {
    title: `${pageTitle}-${pageDescription}`,
    description: pageDescription,
    // 其他通用的元数据字段
  }
}

