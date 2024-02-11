// Copyright.tsx
import React from 'react';
import styles from './footer.module.css';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className={styles.copyRight}>
      © {currentYear} Tools Share. All rights reserved.
    </p>
  );
};

export default Copyright;
