import { useState } from 'react';

// Context
import { useInfoContext } from '@/contexts/infoContext';

// Custom hooks
import { useInfo } from '@/hooks/useInfo';
import useLoading from '@/hooks/useLoading';

// Components
import Loading from './Loading';

// Data
import keys from '@/data/keys.json';

// Icons
import ButtonIcon from './ButtonIcon';

export const prerender = false;

export default function Analizar() {
  const [isWithLink, setIsWithLink] = useState(true);
  const { isLoading, setIsLoading } = useLoading();
  const { info } = useInfoContext();
  const { fetchStatus, handleChange, setSearch } = useInfo({
    isWithLink,
    setIsLoading,
  });
  const { setInfo } = useInfoContext();

  const handleClick = () => {
    setIsWithLink(!isWithLink);
    setInfo({
      content: '',
      link: '',
    });
  };

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <main className='w-full flex flex-col justify-center items-start'>
      <section className="w-full h-screen bg-[url('/assets/Fondo.svg')] bg-fixed bg-auto bg-repeat flex justify-center items-center">
        <article
          className={` relative h-4/6 sm:h-3/5 p-5 sm:p-10 aspect-[16/28] sm:aspect-[16/20] md:aspect-[16/16] lg:aspect-[16/12] xl:aspect-[16/10] bg-white rounded-xl flex flex-col justify-between transition-all duration-300`}
        >
          <div className='w-full flex flex-col lg:flex-row justify-between lg:items-center items-start gap-4'>
            <h1 className='text-[#04001F] text-4xl font-bold'>
              {isWithLink ? keys.analizar_new_title : keys.analizar_text_title}
            </h1>
            <ButtonIcon
              onClick={handleClick}
              title={
                isWithLink
                  ? keys.analizar_manual_button_title
                  : keys.analizar_link_button_title
              }
              icon={isWithLink ? 'TextIcon' : 'LinkIcon'}
              className='flex flex-row-reverse lg:flex-row text-[#04001F] gap-4'
            />
          </div>
          {isWithLink ? (
            <input
              id='newInput'
              type='text'
              placeholder='Ingresar link'
              className={`${
                fetchStatus === 200
                  ? 'border border-green-400'
                  : fetchStatus === 0
                  ? ''
                  : 'border border-red-400'
              } border rounded-xl border-[#04001F] text-[#04001F] p-4 resize-none outline-none w-full`}
              onChange={handleChange}
            />
          ) : (
            <textarea
              id='newArea'
              className='border rounded-xl border-[#04001F] h-3/5 text-[#04001F] p-4 resize-none outline-none'
              placeholder={keys.analizar_text_title}
              onChange={handleChange}
            />
          )}
          {isLoading && (
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Loading />
            </div>
          )}
          <div className='w-full flex justify-end gap-5'>
            {isWithLink && info.content === '' && (
              <button
                onClick={handleSearch}
                className={`w-40 px-4 py-2 bg-[#04001F] hover:bg-[#242844] rounded-3xl font-semibold flex justify-center items-center transition-all duration-300`}
              >
                {keys.analizar_verify_link_button}
              </button>
            )}
            {(!isWithLink || (isWithLink && info.content !== '')) && (
              <a
                id='analizar'
                href='/analizar/veracidad'
                className='w-40 px-4 py-2 bg-[#04001F] hover:bg-[#242844] rounded-3xl font-semibold flex justify-center items-center transition-all duration-300'
              >
                {keys.analizar_button}
              </a>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
