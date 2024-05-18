export default function ExternalLinkIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-external-link`}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
      <path d='M11 13l9 -9' />
      <path d='M15 4h5v5' />
    </svg>
  );
}
