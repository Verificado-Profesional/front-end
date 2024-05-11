import useRedirect from '@/hooks/useRedirect';
import Noticia from './Noticia';
import Resultado from './Resultado';
import { useInfoContext } from '@/contexts/infoContext';
import useClassification from '@/hooks/useClassification';
import useLoading from '@/hooks/useLoading';
import Loading from './Loading';

export default function Veracity() {
  const { info } = useInfoContext();

  useRedirect({ content: info.content });

  const { isLoading, setIsLoading } = useLoading();
  const { classification, trueProbability, falseProbability } =
    useClassification({
      content: info.content,
      classificationType: 'veracity',
      setIsLoading,
    });

  if (
    isLoading ||
    (trueProbability === 0 && trueProbability === falseProbability)
  ) {
    return (
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='w-4/5 h-auto sm:h-4/5 flex flex-col-reverse md:flex-row items-start justify-between py-10 gap-5'>
      <Noticia />
      <Resultado
        classification={classification}
        trueProbability={trueProbability}
        falseProbability={falseProbability}
      />
    </div>
  );
}
