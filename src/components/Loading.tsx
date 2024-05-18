// Components
import Sello from './Sello';

// Styles
import '@/styles/styles.css';

export default function Loading() {
  return (
    // <div className="w-24 h-24 relative flex after:content-['Cargando...'] after:text-black after:flex after:items-center after:justify-center after:w-32 after:h-5 after:bg-white after:absolute after:rounded-md after:-bottom-1/2 after:left-[-25%] after:-z-0">
    <div className='w-24 h-24 relative flex loader'>
      <Sello />
      <div
        className={`w-[3.75rem] h-10 absolute bottom-[-40%] left-[65%] z-[2] overflow-hidden rotar`}
      >
        <img
          className='absolute w-10 h-10 rotar deslizar-1'
          src='/assets/FactifyLogoFact.svg'
          alt='Logo'
        />
        <img
          className='absolute w-10 h-10 rotar deslizar-2'
          src='/assets/FactifyLogoNeutral.svg'
          alt='Logo'
        />
        <img
          className='absolute w-10 h-10 rotar deslizar-3'
          src='/assets/FactifyLogoFake.svg'
          alt='Logo'
        />
      </div>
    </div>
  );
}
