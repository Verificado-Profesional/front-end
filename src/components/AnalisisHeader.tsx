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
    <header className='w-full'>
      <nav className='w-full'>
        <ul className='w-full flex flex-row justify-center gap-5'>
          <HeaderButton
            title='Veracidad'
            icon={<TargetIcon className='w-12' />}
            href={'veracidad'}
            isSelected={pathname === 'veracidad'}
          />
          <HeaderButton
            title='Sentimiento'
            icon={<MasksIcon className='w-12' />}
            href={'sentimiento'}
            isSelected={pathname === 'sentimiento'}
          />
          <HeaderButton
            title='Sintáctico'
            icon={<TextScanIcon className='w-12' />}
            href={'sintactico'}
            isSelected={pathname === 'sintactico'}
          />
        </ul>
      </nav>
    </header>
  );
}
