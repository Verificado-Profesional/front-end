// Icons
import type { ActionButton } from '@/types/types';

export default function ActionButton({ title, onClick }: ActionButton) {
  return (
    <button
      onClick={onClick}
      className='w-full h-[4.5rem] rounded-xl flex gap-2 justify-center items-center bg-[#050120] hover:bg-white hover:text-[#050120] border border-white]'
    >
      {title}
    </button>
  );
}
