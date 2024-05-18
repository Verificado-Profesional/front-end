// Icons
import BackIcon from './icons/BackIcon';

export default function BackButton() {
  return (
    <a
      className='w-full h-[4.5rem] rounded-xl flex gap-2 justify-center items-center bg-[#050120] hover:bg-white hover:text-[#050120] border border-white]'
      href='/analizar'
    >
      <BackIcon className='w-6' />
      Volver
    </a>
  );
}
