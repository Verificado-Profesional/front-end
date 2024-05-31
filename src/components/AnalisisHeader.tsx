// Components
import HeaderButton from './HeaderButton';

// Data
import keys from '@/data/keys.json';

// Icons
import MasksIcon from './icons/MasksIcon';
import SimilIcon from './icons/SimilIcon';
import TargetIcon from './icons/TargetIcon';

export default function AnalisisHeader({
  pathname,
}: {
  pathname: string | undefined;
}) {
  return (
    <header className='w-full flex justify-center'>
      <nav className='w-4/5'>
        <ul className='w-full flex flex-col sm:flex-row justify-center gap-5'>
          <HeaderButton
            title={keys.analizar_header_veracity}
            icon={<TargetIcon className=' w-8 sm:w-12' />}
            href={'veracidad'}
            isSelected={pathname === 'veracidad'}
          />
          <HeaderButton
            title={keys.analizar_header_sentiment}
            icon={<MasksIcon className=' w-8 sm:w-12' />}
            href={'sentimiento'}
            isSelected={pathname === 'sentimiento'}
          />
          <HeaderButton
            title={keys.analizar_header_similarity}
            icon={<SimilIcon className=' w-8 sm:w-12' />}
            href={'similaridad'}
            isSelected={pathname === 'similaridad'}
          />
        </ul>
      </nav>
    </header>
  );
}
