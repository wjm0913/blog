"use client"

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './FullPageScroll.module.css';

interface ScreenProps {
  children: ReactNode;
  background: string;
  backgroundImage?: string; // 新增属性，用于支持图片背景
  useGradient?: boolean; // 新增属性，用于控制是否使用渐变背景
}

interface FullPageScrollProps {
  screens: ScreenProps[];
  scrollPromptText?: string;
  navDotSize?: number;
  navDotSpacing?: number;
  transitionDuration?: number;
}

// 单个屏幕组件
const Screen: React.FC<ScreenProps> = ({ children, background, backgroundImage, useGradient = true }) => (
  <section
    className={`${styles.screen} ${useGradient ? styles.gradientBackground : ''}`}
    style={{
      backgroundImage: useGradient ? background : `url(${backgroundImage})`,
      backgroundSize: useGradient ? '300% 300%' : 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {children}
  </section>
);

const Index: React.FC<FullPageScrollProps> = ({
  screens,
  scrollPromptText = "↓ 向下滚动 ↓",
  navDotSize = 10,
  navDotSpacing = 5,
  transitionDuration = 300,
}) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);
  const mainRef = useRef<HTMLElement>(null);
  const screenCount = screens.length;
  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (mainRef.current && !isScrollingRef.current) {
        // 防抖：限制滚动事件的触发频率
        const now = new Date().getTime();
        if (now - lastScrollTimeRef.current < 500) return;
        lastScrollTimeRef.current = now;

        // 计算当前屏幕和滚动方向
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
        const screenHeight = scrollHeight / screenCount;
        let currentScreen = Math.round(scrollTop / screenHeight);

        // 处理正常滚动
        if (event.deltaY > 0 && currentScreen < screenCount - 1) {
          currentScreen++;
        } else if (event.deltaY < 0 && currentScreen > 0) {
          currentScreen--;
        }
        // 处理循环滚动：从最后一屏回到第一屏
        else if (event.deltaY > 0 && currentScreen === screenCount - 1) {
          setIsTransitioning(true);
          setShowScrollPrompt(false);
          setTimeout(() => {
            currentScreen = 0;
            mainRef.current!.scrollTop = 0;
            setIsTransitioning(false);
            setShowScrollPrompt(true);
          }, transitionDuration);
        }
        // 处理循环滚动：从第一屏回到最后一屏
        else if (event.deltaY < 0 && currentScreen === 0) {
          setIsTransitioning(true);
          setShowScrollPrompt(false);
          setTimeout(() => {
            currentScreen = screenCount - 1;
            mainRef.current!.scrollTop = scrollHeight - clientHeight;
            setIsTransitioning(false);
          }, transitionDuration);
        }

        // 执行滚动动画
        if (!isTransitioning) {
          isScrollingRef.current = true;
          mainRef.current.scrollTo({
            top: currentScreen * screenHeight,
            behavior: 'smooth'
          });

          // 滚动完成后重置标志
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }

        // 更新状态
        setActiveScreen(currentScreen);
        setShowScrollPrompt(currentScreen !== screenCount - 1);
      }
    };

    // 添加和移除滚轮事件监听器
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isTransitioning, screenCount, transitionDuration]);

  return (
    <>
      {/* 过渡遮罩层 */}
      <div className={`${styles.overlay} ${isTransitioning ? styles.active : ''}`} />
      <main className={styles.main} ref={mainRef}>
        {/* 导航指示器 */}
        <div className={styles.navIndicator}>
          {screens.map((_, index) => (
            <div
              key={index}
              className={`${styles.navDot} ${index === activeScreen ? styles.active : ''}`}
              style={{
                width: navDotSize,
                height: navDotSize,
                margin: `${navDotSpacing}px 0`,
              }}
            />
          ))}
        </div>
        {/* 滚动提示 */}
        {showScrollPrompt && (
          <div className={styles.scrollPrompt}>
            {scrollPromptText}
          </div>
        )}
        {/* 渲染所有屏幕 */}
        {screens.map((screen, index) => (
          <Screen
            key={index}
            background={screen.background}
            backgroundImage={screen.backgroundImage}
            useGradient={screen.useGradient !== false} // 默认为 true
          >
            {screen.children}
          </Screen>
        ))}
      </main>
    </>
  );
};

export default Index;
