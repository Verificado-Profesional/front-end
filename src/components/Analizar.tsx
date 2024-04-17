import { useState } from 'react';
import ButtonIcon from './ButtonIcon';
import { useInfo, useInfoContext } from '@/hooks/useInfo';
import Loading from './Loading';
import SearchIcon from './icons/SearchIcon';

export const prerender = false;

export default function Analizar() {
  const [isWithLink, setIsWithLink] = useState(true);
  const { isLoading, fetchStatus, handleChange, setSearch } = useInfo({
    isWithLink,
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
          <div className='w-full flex flex-col lg:flex-row justify-between lg:items-center items-start'>
            <h1 className='text-[#04001F] text-4xl font-bold'>
              Ingresar Noticia
            </h1>
            <ButtonIcon
              onClick={handleClick}
              title={isWithLink ? 'Manual' : 'Link'}
              icon={isWithLink ? 'TextIcon' : 'LinkIcon'}
              className='flex flex-row-reverse lg:flex-row text-[#04001F] gap-4'
            />
          </div>
          {isWithLink ? (
            <div className='flex md:flex-row flex-col justify-center gap-4 items-center'>
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
                } border rounded-xl border-[#04001F] text-[#04001F] p-4 resize-none outline-none w-full md:w-[90%]`}
                onChange={handleChange}
              />
              <figure
                onClick={handleSearch}
                className='md:w-auto w-full flex justify-center items-center bg-[#04001F] p-4 rounded-xl cursor-pointer'
              >
                <SearchIcon className='w-6 h-6' />
              </figure>
            </div>
          ) : (
            <textarea
              id='newArea'
              className='border rounded-xl border-[#04001F] h-3/5 text-[#04001F] p-4 resize-none outline-none'
              placeholder='Ingresar noticia'
              onChange={handleChange}
            />
          )}
          {isLoading && (
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Loading />
            </div>
          )}
          <div className='w-full flex justify-end'>
            <a
              className={`w-40 px-4 py-2 ${
                (isWithLink && fetchStatus === 200) || !isWithLink
                  ? 'bg-[#04001F] hover:bg-[#242844]'
                  : 'bg-gray-500 pointer-events-none cursor-not-allowed'
              } rounded-3xl font-semibold flex justify-center items-center transition-all duration-300`}
              href='/analizar/veracidad'
            >
              Analizar
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
