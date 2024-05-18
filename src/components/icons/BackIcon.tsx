export default function BackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up`}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 14l-4 -4l4 -4' />
      <path d='M5 10h11a4 4 0 1 1 0 8h-1' />
    </svg>
  );
}
