// Icons
import BulbFilledIcon from './icons/BulbFilledIcon';
import BulbIcon from './icons/BulbIcon';

// Types
import type { CardProps } from '@/types/types';

export default function Card({
  className,
  id,
  title,
  description,
  selected,
  onClick,
}: CardProps) {
  return (
    <div
      className={`${className} transition-all duration-300 group flex flex-col ${
        selected ? 'cursor-auto' : 'cursor-pointer'
      } items-center justify-between gap-5 rounded-3xl border-2 border-white bg-[#04001f]/50 p-5 backdrop-blur-[2px]`}
      onClick={onClick}
    >
      <div className='flex flex-col justify-center items-center'>
        {selected ? (
          <BulbFilledIcon className='w-16 text-[#050120]' />
        ) : (
          <BulbIcon
            className={`w-16 transition-all duration-300 ${
              selected
                ? 'text-[#050120]'
                : 'text-white group-hover:text-[#92A7FF]'
            }`}
          />
        )}
        <h1
          className={`transition-all duration-300 text-center ${
            selected
              ? 'text-[#050120] text-lg'
              : 'text-white group-hover:text-[#92A7FF] text-base'
          } text-bold`}
        >
          {id}. {title}
        </h1>
      </div>
      {selected && (
        <p className='flex text-pretty text-md text-[#050120]'>{description}</p>
      )}
    </div>
  );
}
