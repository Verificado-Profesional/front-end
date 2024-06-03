import '@/styles/styles.css';

export default function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      id='warning'
      className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle`}
    >
      <path d='M12 9v4' />
      <path d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z' />
      <path d='M12 16h.01' />
    </svg>
  );
}