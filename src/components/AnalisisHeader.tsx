// Components
import HeaderButton from './HeaderButton';

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
            title='Veracidad'
            icon={<TargetIcon className=' w-8 sm:w-12' />}
            href={'veracidad'}
            isSelected={pathname === 'veracidad'}
          />
          <HeaderButton
            title='Sentimiento'
            icon={<MasksIcon className=' w-8 sm:w-12' />}
            href={'sentimiento'}
            isSelected={pathname === 'sentimiento'}
          />
          <HeaderButton
            title='Similaridad'
            icon={<SimilIcon className=' w-8 sm:w-12' />}
            href={'similaridad'}
            isSelected={pathname === 'similaridad'}
          />
        </ul>
      </nav>
    </header>
  );
}
