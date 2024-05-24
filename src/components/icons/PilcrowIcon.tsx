export default function PilcrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-pilcrow`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M13 4v16' />
      <path d='M17 4v16' />
      <path d='M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5' />
    </svg>
  );
}
