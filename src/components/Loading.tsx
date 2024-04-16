import Sello from './Sello';

export default function Loading() {
  return (
    <div className='w-96 h-96 relative flex'>
      <Sello />
      <div
        className={`w-60 h-40 absolute bottom-[-25%] left-[70%] z-0 overflow-hidden rotar`}
      >
        <img
          className='absolute w-40 h-40 rotar deslizar-1'
          src='/assets/FactifyLogoFact.svg'
          alt='Logo'
        />
        <img
          className='absolute w-40 h-40 rotar deslizar-2'
          src='/assets/FactifyLogoNeutral.svg'
          alt='Logo'
        />
        <img
          className='absolute w-40 h-40 rotar deslizar-3'
          src='/assets/FactifyLogoFake.svg'
          alt='Logo'
        />
      </div>
    </div>
  );
}
