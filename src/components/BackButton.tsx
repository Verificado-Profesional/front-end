// Icons
import BackIcon from './icons/BackIcon';

export default function BackButton({ type = 'primary' }: { type?: string }) {
  return (
    <a
      className={`w-full md:w-auto md:aspect-square aspect-auto h-[4.5rem] rounded-xl flex gap-2 justify-center items-center hover:border hover:border-[#050120] hover:text-[#050120] bg-white text-[#050120]`}
      href='/analizar'
    >
      <BackIcon className='w-6' />
      <span className={type === 'primary' ? 'md:hidden flex' : ''}>Volver</span>
    </a>
  );
}
