export default function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-target-arrow`}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M12 7a5 5 0 1 0 5 5'></path>
      <path d='M13 3.055a9 9 0 1 0 7.941 7.945'></path>
      <path d='M15 6v3h3l3 -3h-3v-3z'></path>
      <path d='M15 9l-3 3'></path>
    </svg>
  );
}
