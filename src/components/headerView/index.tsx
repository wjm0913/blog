"use client"

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './HeaderView.module.css';

const HeaderView = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: '首页', path: '/' },
    { label: '技术日志', path: '/technologyLog' },
    { label: '关于', path: '/about' },
    // 可以根据需要添加更多导航项
  ];

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link href="/" className={styles.logo}>
          我的博客
        </Link>
      </div>
      {isMobile && (
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      )}
      <nav className={`${styles.rightSection} ${isMobile && isMenuOpen ? styles.menuOpen : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={pathname === item.path ? styles.activeLink : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        {isLoggedIn ? (
          <div className={styles.userSection}>
            {/*<img src="/user-avatar.png" alt="用户头像" className={styles.userIcon} />*/}
            <button
              onClick={() => setIsLoggedIn(false)}
              className={styles.logoutButton}
            >
              登出
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className={styles.loginButton}
          >
            登录
          </button>
        )}
      </nav>
    </header>
  );
};

export default HeaderView;
