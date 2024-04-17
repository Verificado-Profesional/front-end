import styles from '@/styles/Sello.module.css';

export default function Sello() {
  return (
    <div className={`${styles.sello} absolute inset-0 w-full h-full flex z-10`}>
      <div className='absolute top-1 left-1/2 w-5 h-5 flex z-10'>
        <span className={styles.tapa}></span>
        <span className={styles['mango-sup']}></span>
        <span className={styles['mango']}></span>
      </div>
      <div className='absolute top-10 left-[1.3125rem] flex w-10 h-10'>
        <span className={styles['base-sup']}></span>
        <span className={styles.base}></span>
        <span className={styles.tinta}></span>
      </div>
    </div>
  );
}
