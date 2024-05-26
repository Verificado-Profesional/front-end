import { formatNumber } from '@/helpers/classificationMessages';
import type { ResultadoParrafoPorps } from '@/types/types';

export default function ResultadoParrafo({
  paragraphInfo,
  paragraphNumber,
}: ResultadoParrafoPorps) {
  return (
    <article className='w-full max-h-60 rounded-xl flex flex-col relative'>
      <div className='w-full text-xl md:text-md lg:text-xl bg-[#04001F] flex p-4 justify-between items-center text-white rounded-t-xl border border-[#92A7FF] titan-one-regular transition-all duration-300'>
        <div className='flex flex-row gap-2'>
          <img
            className=' w-6 transition-all duration-300'
            src={`/assets/${
              paragraphInfo.classification
                ? 'FactifyLogoFact'
                : 'FactifyLogoFake'
            }.svg`}
            alt={paragraphInfo.classification ? 'Fact' : 'Fake'}
          />
          <h1
            className={`text-center ${
              paragraphInfo.classification ? 'text-[#00C66A]' : 'text-[#F24A4A]'
            }`}
          >
            {formatNumber(
              paragraphInfo.classification
                ? paragraphInfo.true_probability
                : paragraphInfo.false_probability
            )}
            %
          </h1>
        </div>
        <h1>{paragraphNumber + 1}</h1>
      </div>
      <div className='bg-[#92A7FF] w-full flex flex-col justify-between rounded-b-xl p-5'>
        <div className='w-full max-h-40 overflow-hidden relative'>
          <h1 className='w-full text-[#04001F] font-semibold line-clamp-4'>
            {paragraphInfo.content}
          </h1>
        </div>
      </div>
    </article>
  );
}
