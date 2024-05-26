// Helpers
import { formatNumber } from '@/helpers/classificationMessages';
import type { ResultadoParrafosProps } from '@/types/types';

// Types

export default function ResultadoParrafos({
  paragraphs,
  getResultMessage,
  getTextMessage,
}: ResultadoParrafosProps) {
  const { totalTrueProb, totalFalseProb, trueCount, falseCount } =
    paragraphs.reduce(
      (acc, item) => {
        return {
          totalTrueProb: acc.totalTrueProb + item.true_probability,
          totalFalseProb: acc.totalFalseProb + item.false_probability,
          trueCount: acc.trueCount + (item.classification ? 1 : 0),
          falseCount: acc.falseCount + (!item.classification ? 1 : 0),
        };
      },
      { totalTrueProb: 0, totalFalseProb: 0, trueCount: 0, falseCount: 0 }
    );
  const classification = trueCount > falseCount;
  return (
    <article
      className={`w-full h-96 overflow-y-auto bg-[var(--color-primary)] border border-white p-7 rounded-xl flex flex-col gap-10`}
    >
      <div className='w-full flex flex-col gap-5'>
        <div className='w-full h-2 flex'>
          <span
            style={{
              width: `${formatNumber(totalFalseProb / paragraphs.length)}%`,
            }}
            className='bg-red-500 rounded-l-full'
          ></span>
          <span
            style={{
              width: `${formatNumber(totalTrueProb / paragraphs.length)}%`,
            }}
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
              ? formatNumber(totalTrueProb / paragraphs.length)
              : formatNumber(totalFalseProb / paragraphs.length)}
            %
          </h1>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-semibold text-white'>
          {getResultMessage(
            classification,
            classification
              ? totalTrueProb / paragraphs.length
              : totalFalseProb / paragraphs.length
          )}
        </h2>
        <p className=' font-light text-white'>
          {getTextMessage(
            classification,
            classification
              ? totalTrueProb / paragraphs.length
              : totalFalseProb / paragraphs.length
          )}
        </p>
        <hr />
        <p className=' font-light text-white'>
          # {classification ? 'Verdaderos' : 'Positivos'}: {trueCount}
        </p>
        <p className=' font-light text-white'>
          # {classification ? 'Falsos' : 'Negativos'}: {falseCount}
        </p>
      </div>
    </article>
  );
}
