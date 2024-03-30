import useRedirect from '@/hooks/useRedirect';
import Noticia from './Noticia';
import Resultado from './Resultado';
import { useInfoContext } from '@/hooks/useInfo';

export default function Veracity() {
  const { info } = useInfoContext();
  useRedirect({ content: info.content });

  return (
    <div className='w-4/5 h-auto sm:h-4/5 flex flex-col sm:flex-row items-start justify-between py-10'>
      <Noticia />
      <Resultado />
    </div>
  );
}
