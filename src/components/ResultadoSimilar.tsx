// Icons
import ChequeadoIcon from './icons/ChequeadoIcon';
import GoogleIcon from './icons/GoogleIcon';

// Helpers
import { formatNumber } from '@/helpers/classificationMessages';

// Types
import type { ResultadoSimilarProps } from '@/types/types';

export default function ResultadoSimilar({ resultado }: ResultadoSimilarProps) {
  return (
    <a
      className='cursor-pointer w-full max-h-60 rounded-xl flex flex-col relative'
      href={resultado.url}
      target='_blank'
      rel='noreferrer'
    >
      <div className='w-full text-xl md:text-md lg:text-xl bg-[#04001F] flex p-4 justify-between items-center text-white rounded-t-xl border border-[#92A7FF] titan-one-regular transition-all duration-300'>
        <div className='flex flex-row gap-2'>
          <h1 className='text-center'>{formatNumber(resultado.score)}%</h1>
          <h2 className='text-center'>Similar</h2>
        </div>
        <figure className=''>
          {resultado.source.toLowerCase() === 'chequeado' ? (
            <ChequeadoIcon className='w-6' />
          ) : (
            <GoogleIcon className='w-6 bg-white rounded-full p-1' />
          )}
        </figure>
      </div>
      <div className='bg-[#92A7FF] w-full flex flex-col justify-between rounded-b-xl p-5'>
        <div className='w-full max-h-40 overflow-hidden relative'>
          <h1 className='w-full text-[#04001F] font-semibold line-clamp-4'>
            {resultado.title}
          </h1>
        </div>
        <p className='font-extralight text-[#04001F]'>{resultado.date}</p>
      </div>
    </a>
  );
}
