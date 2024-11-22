import React from 'react';
import styles from './page.module.css';

const Page = () => {
  try {
    
  } catch (error) {
    
  }
  // 定义舱门数量
  const compartments = 8; // 可以根据需要修改数量（6-10）

  return (
    <div className={styles.container}>
      <div className={styles.cabinet}>
        <div className={styles.compartments}>
          {[...Array(compartments)].map((_, index) => (
            <div key={index} className={styles.door}>
              <div className={styles.doorContent}>
                <span className={styles.doorNumber}>{index + 1}</span>
                <div className={styles.status}>可用</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
