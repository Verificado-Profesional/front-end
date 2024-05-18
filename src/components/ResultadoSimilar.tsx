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
      className='cursor-pointer w-full max-h-60 md:min-h-32 md:max-h-32 rounded-xl flex flex-col md:flex-row relative'
      href={resultado.url}
      target='_blank'
      rel='noreferrer'
    >
      <div className='w-full md:w-40 text-xl flex flex-row md:flex-col gap-2 md:gap-0 p-4 md:p-0 justify-start md:justify-center items-center text-white rounded-t-xl md:rounded-tr-none md:rounded-l-xl border border-[#92A7FF] titan-one-regular transition-all duration-300'>
        <h1 className='text-center md:text-3xl'>
          {formatNumber(resultado.score)}%
        </h1>
        <h2 className='text-center'>Similar</h2>
      </div>
      <div className='bg-[#92A7FF] w-full flex flex-col justify-between rounded-b-xl md:rounded-bl-none md:rounded-r-xl p-5'>
        <h1 className='w-full md:w-4/5 text-[#04001F] font-semibold uppercase'>
          {resultado.title}
        </h1>
        <p className='font-extralight text-[#04001F]'>
          Fecha: {resultado.date}
        </p>
        <figure className='absolute top-5 right-5'>
          {resultado.source.toLowerCase() === 'chequeado' ? (
            <ChequeadoIcon className='w-6' />
          ) : (
            <GoogleIcon className='w-6 bg-white rounded-full p-1' />
          )}
        </figure>
      </div>
    </a>
  );
}
