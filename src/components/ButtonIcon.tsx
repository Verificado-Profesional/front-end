// Icons
import LinkIcon from './icons/LinkIcon';
import TextIcon from './icons/TextIcon';

// Types
import type { ButtonIconProps } from '@/types/types';

export default function ButtonIcon({
  onClick,
  icon,
  title,
  className = '',
}: ButtonIconProps) {
  return (
    <button onClick={onClick} className={className}>
      {title}
      {icon === 'TextIcon' ? <TextIcon /> : <LinkIcon />}
    </button>
  );
}
