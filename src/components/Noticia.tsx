import { useInfoContext } from '@/hooks/useInfo';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

export default function Noticia() {
  const { info } = useInfoContext();

  return (
    <article className='w-full md:w-3/5 h-[30rem] bg-white p-7 rounded-xl flex flex-col gap-5'>
      <div className=' border-l-2 border-[#04001F] pl-5 flex flex-row justify-between'>
        <h1 className='text-[#04001F] font-semibold uppercase'>Noticia</h1>
        {info.link === '' ? null : (
          <a
            target='_blank'
            rel='noreferrer'
            href={info.link}
            className='text-[#04001F]'
          >
            <ExternalLinkIcon className='w-6' />
          </a>
        )}
      </div>
      <p className='max-h-4/5 text-[#04001F] font-light text-balance truncate'>
        {info.content}
      </p>
    </article>
  );
}
