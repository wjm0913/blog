
/**
 *
 * @name:
 * @description:
 * @author: 魏建明
 * @time: 2024-10-27 20:14:55
 *
 */
import type { Metadata } from 'next'
import { generateCommonMetadata } from '@/utils/metadata';
import ClientPage from "@/components/rootPathView/ClientPage";

export async function generateMetadata(): Promise<Metadata> {
  return generateCommonMetadata('首页', '11111这是我的博客首页');
}

export default function Page() {
  return <ClientPage />;
}
