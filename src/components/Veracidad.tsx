import useRedirect from '@/hooks/useRedirect';
import Noticia from './Noticia';
import Resultado from './Resultado';
import { useInfoContext } from '@/contexts/infoContext';
import useClassification from '@/hooks/useClassification';
import useLoading from '@/hooks/useLoading';
import Loading from './Loading';
import {
  getVeracityMessages,
  getVeracityResult,
} from '@/helpers/classificationMessages';
import { Classification } from '@/types/types';
import Botonera from './Botonera';

export default function Veracity() {
  const { info } = useInfoContext();

  useRedirect({ content: info.content });

  const { isLoading, setIsLoading } = useLoading();
  const { classification, trueProbability, falseProbability } =
    useClassification({
      content: info.content,
      classificationType: Classification.veracity,
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
      <div className='md:w-2/6 w-full flex flex-col gap-5'>
        <Resultado
          classification={classification}
          classificationResult={getVeracityResult(
            classification,
            classification ? trueProbability : falseProbability
          )}
          classificationText={getVeracityMessages(
            classification,
            classification ? trueProbability : falseProbability
          )}
          trueProbability={trueProbability}
          falseProbability={falseProbability}
        />
        <Botonera />
      </div>
    </div>
  );
}
