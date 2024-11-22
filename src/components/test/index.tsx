'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('登录信息:', { username, password });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>🌟</div>
        </div>
        <h2 className={styles.title}>欢迎回来</h2>
        <p className={styles.subtitle}>请登录您的账号</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              用户名
            </label>
            <input
              id="username"
              type="text"
              required
              className={styles.input}
              placeholder="请输入用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              密码
            </label>
            <input
              id="password"
              type="password"
              required
              className={styles.input}
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.options}>
            <div className={styles.rememberMe}>
              <input
                id="remember"
                type="checkbox"
                className={styles.checkbox}
              />
              <label htmlFor="remember">记住我</label>
            </div>
            <a href="/forgot-password" className={styles.forgotPassword}>
              忘记密码？
            </a>
          </div>

          <button type="submit" className={styles.button}>
            登录
          </button>

          <div className={styles.register}>
            <p>
              还没有账号？
              <a href="/register" className={styles.registerLink}>
                立即注册
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}