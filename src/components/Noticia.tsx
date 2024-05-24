// Context
import { useInfoContext } from '@/contexts/infoContext';

// Icons
import ExternalLinkIcon from './icons/ExternalLinkIcon';

// Types
import type { NoticiaProps } from '@/types/types';

export default function Noticia({
  analysisByParagraph = false,
  paragraphs = [],
}: NoticiaProps) {
  const { info } = useInfoContext();

  return (
    <article className='w-full md:w-3/5 h-[30rem] border border-white rounded-xl flex flex-col'>
      <div className='w-full p-7 rounded-t-lg bg-white'>
        <span className=' border-l-2 border-[#04001F] pl-5 flex flex-row justify-between'>
          <h1 className='text-[#04001F] font-semibold uppercase'>
            Noticia
            {analysisByParagraph ? ` - ${paragraphs.length} párrafos` : ''}
          </h1>
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
        </span>
      </div>
      <div className='w-full max-h-4/5 h-full p-7 bg-[#04001F] rounded-b-xl overflow-y-scroll'>
        {analysisByParagraph ? (
          paragraphs.map((paragraph) => paragraph.content)
        ) : (
          <p className='text-white font-light text-balance truncate'>
            {info.content}
          </p>
        )}
      </div>
    </article>
  );
}
