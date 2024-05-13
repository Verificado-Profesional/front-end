interface Props {
  classification: boolean;
  classificationResult: string | undefined;
  classificationText: string | undefined;
  trueProbability: number;
  falseProbability: number;
}

export default function Resultado({
  classification,
  classificationResult,
  classificationText,
  trueProbability,
  falseProbability,
}: Props) {
  const formatNumber = (number: number) => {
    return (number * 100).toFixed();
  };
  return (
    <article
      className={`w-full md:w-2/6 h-96 ${
        classification ? 'bg-[var(--bg-green)]' : 'bg-[var(--bg-red)]'
      } p-7 rounded-xl flex flex-col gap-10`}
    >
      <div className='w-full flex flex-col gap-5'>
        <div className='w-full h-2 flex'>
          <span
            style={{ width: `${formatNumber(falseProbability)}%` }}
            className='bg-red-500 rounded-l-full'
          ></span>
          <span
            style={{ width: `${formatNumber(trueProbability)}%` }}
            className='bg-green-500 rounded-r-full'
          ></span>
        </div>
        <div className='flex flex-row justify-center items-center gap-5'>
          <img
            className=' w-16 lg:w-20 transition-all duration-300'
            src={`/assets/${
              classification ? 'FactifyLogoFact' : 'FactifyLogoFake'
            }.svg`}
            alt={classification ? 'Fact' : 'Fake'}
          />
          <h1
            className={`${
              classification ? 'text-[#00C66A]' : 'text-[#F24A4A]'
            } text-5xl lg:text-6xl titan-one-regular transition-all duration-300`}
          >
            {classification
              ? formatNumber(trueProbability)
              : formatNumber(falseProbability)}
            %
          </h1>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-semibold text-black'>{classificationResult}</h2>
        <p className=' font-light text-black'>{classificationText}</p>
      </div>
    </article>
  );
}
