import type { ReactElement } from 'react';

export default function HeaderButton({
  title,
  icon,
  href,
  isSelected,
}: {
  title: string;
  icon: ReactElement;
  href: string | undefined;
  isSelected: boolean;
}) {
  return (
    <li
      className={`rounded-xl border border-[#5F78FF] ${
        isSelected
          ? 'bg-white text-[#04001F] cursor-auto'
          : 'bg-[#04001F]/80 cursor-pointer'
      } w-full sm:w-40 font-semibold hover:bg-white hover:text-[#04001F]`}
    >
      <a
        className='w-full h-full rounded-xl py-2 sm:py-4 flex flex-row sm:flex-col justify-center items-center gap-4'
        href={`/analizar/${href}`}
      >
        {icon}
        {title}
      </a>
    </li>
  );
}
