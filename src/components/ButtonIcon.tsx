import type { ReactNode } from 'react';

interface Props {
  onClick: () => void;
  icon: string;
  title: string;
  className?: string;
}

export default function ButtonIcon({
  onClick,
  icon,
  title,
  className = '',
}: Props) {
  return (
    <button onClick={onClick} className={className}>
      {title}
      <img src={`/assets/icons/${icon}.svg`} alt='icon' />
    </button>
  );
}
