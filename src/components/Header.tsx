import { useState } from 'react';
import HamburguerIcon from './icons/HamburguerIcon';

import './styles.css';

export const prerender = false;

interface Props {
  pathname: string;
}

export default function Header({ pathname }: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header
      className={`w-full h-20 ${
        openMenu ? 'bg-[#04001F]' : 'backdrop-blur-sm bg-[#04001F]/50'
      } flex justify-center fixed inset-0 z-50 transition-all duration-500`}
    >
      <div className='w-4/5 flex flex-row justify-between items-center'>
        <a href='/' className='rounded-full'>
          <img
            src='/FactifyLogo.svg'
            alt='Factify'
            width='60px'
            height='60px'
          />
        </a>
        <div className='md:hidden'>
          <HamburguerIcon isSelected={openMenu} onClick={handleClick} />
        </div>
        <nav
          className={`flex w-full md:w-auto md:static absolute top-20 -left-full md:translate-x-0 transition-all duration-500 ${
            openMenu ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          <ul className='flex flex-col bg-[#04001F] md:bg-transparent w-full md:flex-row md:gap-16'>
            <li
              className={`${
                pathname === '/' ? 'selected' : ''
              } py-3 md:py-1 lg:w-32 md:w-28 md:text-md text-center transition-all duration-300 ease-in-out`}
            >
              <a href='/'>Inicio</a>
            </li>
            <li
              className={`${
                pathname === '/analizar' ? 'selected' : ''
              } py-3 md:py-1 lg:w-32 md:w-28 md:text-md text-center transition-all duration-300 ease-in-out`}
            >
              <a href='/analizar'>Analizar</a>
            </li>
            <li
              className={`${
                pathname === '/estadisticas' ? 'selected' : ''
              } py-3 md:py-1 lg:w-32 md:w-28 md:text-md text-center transition-all duration-300 ease-in-out`}
            >
              <a href='/estadisticas'>Estadísticas</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
