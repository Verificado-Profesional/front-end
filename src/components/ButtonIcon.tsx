import TextIcon from './icons/TextIcon.astro';
import LinkIcon from './icons/LinkIcon.astro';

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
      {icon === 'TextIcon' ? <TextIcon /> : <LinkIcon />}
    </button>
  );
}
