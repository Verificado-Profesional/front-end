import HeaderButton from './HeaderButton';
import MasksIcon from './icons/MasksIcon';
import TargetIcon from './icons/TargetIcon';
import TextScanIcon from './icons/TextScanIcon';

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
            title='Sintáctico'
            icon={<TextScanIcon className=' w-8 sm:w-12' />}
            href={'sintactico'}
            isSelected={pathname === 'sintactico'}
          />
        </ul>
      </nav>
    </header>
  );
}
