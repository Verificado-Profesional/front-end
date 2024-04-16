import styles from '@/styles/Sello.module.css';

export default function Sello() {
  return (
    <div className={`${styles.sello} absolute inset-0 w-full h-full flex z-10`}>
      <div className='absolute top-5 left-1/2 w-20 h-20 flex z-10'>
        <span className={styles.tapa}></span>
        <span className={styles['mango-sup']}></span>
        <span className={styles['mango']}></span>
      </div>
      <div className='absolute top-44 left-[5.25rem] flex w-40 h-40'>
        <span className={styles['base-sup']}></span>
        <span className={styles.base}></span>
        <span className={styles.tinta}></span>
      </div>
    </div>
  );
}
