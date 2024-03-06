import { useState } from 'react';
import styles from './HamburguerIcon.module.css';

const HamburguerIcon = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section className={styles.section}>
      <div
        className={styles.container}
        onClick={() => {
          console.log('click');
          setIsSelected(!isSelected);
        }}
      >
        <div
          className={`${styles.line} ${
            isSelected ? styles['line1-selected'] : styles.line1
          }`}
        ></div>
        <div
          className={`${styles.line} ${
            isSelected ? styles['line2-selected'] : styles.line2
          }`}
        ></div>
        <div
          className={`${styles.line} ${
            isSelected ? styles['line3-selected'] : styles.line3
          }`}
        ></div>
      </div>
    </section>
  );
};

export default HamburguerIcon;
