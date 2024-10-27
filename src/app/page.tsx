"use client"

import React from 'react';
import FullPageScroll from '@/components/FullPageScroll/FullPageScroll';

const Page = () => {
  const screens = [
    {
      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      children: (
        <>
          <h2>欢迎来到我的博客</h2>
          <p>这里是第一屏，展示您的博客主题</p>
        </>
      ),
    },
    {
      background: 'linear-gradient(291deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      children: (
        <>
          <h2>最新文章</h2>
          <p>展示您的最新博客文章</p>
        </>
      ),
    },
    {
      background: 'linear-gradient(-45deg, #74B9FF, #A29BFE, #FAB1A0, #81ECEC)',
      children: (
        <>
          <h2>关于我</h2>
          <p>简短的自我介绍</p>
        </>
      ),
    },

    {
      background: 'linear-gradient(266deg, #FBDA61 0%, #FF5ACD 50%, #ffffff 100%)',
      children: (
        <>
          <h2>技能展示</h2>
          <p>展示您的技能或专长领域</p>
        </>
      ),
    },
    {
      background: 'linear-gradient(90deg, #FAD961 0%, #F76B1C 50%, #d42d2d 100%)',
      children: (
        <>
          <h2>联系我</h2>
          <p>提供您的联系方式或联系表单</p>
        </>
      ),
    },
  ];
  
  return (
    <FullPageScroll
      screens={screens}
      scrollPromptText="↓ 继续滚动 ↓"
      navDotSize={12}
      navDotSpacing={8}
      transitionDuration={400}
    />
  );
};

export default Page;

