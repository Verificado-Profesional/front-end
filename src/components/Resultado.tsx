export default function Resultado() {
  return (
    <article className='w-full md:w-2/6 bg-[var(--bg-green)] p-7 rounded-xl flex flex-col gap-10'>
      <div className='flex flex-row justify-center items-center gap-5'>
        <img
          className=' w-16 lg:w-20 transition-all duration-300'
          src='/assets/FactifyLogoFact.svg'
          alt='Fact'
        />
        <h1 className='text-[#00C66A] text-5xl lg:text-6xl titan-one-regular transition-all duration-300'>
          87%
        </h1>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-semibold text-black'>Resultado</h2>
        <p className=' font-light text-black'>Texto descriptivo</p>
      </div>
    </article>
  );
}
