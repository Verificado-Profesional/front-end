// Styles
import styles from './HamburguerIcon.module.css';

// Types
import type { HamburguerIconProps } from '@/types/types';

export const prerender = false;

const HamburguerIcon = ({ isSelected, onClick }: HamburguerIconProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container} onClick={onClick}>
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
