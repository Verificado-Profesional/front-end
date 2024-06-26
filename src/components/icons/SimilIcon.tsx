export default function SimilIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-replace`}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
      <path d='M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
      <path d='M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3' />
      <path d='M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3' />
    </svg>
  );
}
