import useRedirect from '@/hooks/useRedirect';
import Noticia from './Noticia';
import Resultado from './Resultado';
import { useInfoContext } from '@/hooks/useInfo';
import Loading from './Loading';
import useLoading from '@/hooks/useLoading';

export default function Veracity() {
  const { info } = useInfoContext();
  useRedirect({ content: info.content });
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='w-4/5 h-auto sm:h-4/5 flex flex-col-reverse md:flex-row items-start justify-between py-10 gap-5'>
      <Noticia />
      <Resultado />
    </div>
  );
}
