import useRedirect from '@/hooks/useRedirect';
import { useInfoContext } from '@/contexts/infoContext';
import useLoading from '@/hooks/useLoading';
import Loading from './Loading';
import Botonera from './Botonera';
import Similares from './Similares';
import useSimilarity from '@/hooks/useSimilarity';

export default function Similarity() {
  const { info } = useInfoContext();

  useRedirect({ content: info.content });

  const { isLoading, setIsLoading } = useLoading();
  const { topResults } = useSimilarity({ content: info.content, setIsLoading });

  if (isLoading) {
    return (
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='w-4/5 h-auto sm:h-4/5 flex flex-col-reverse md:flex-row items-center justify-center py-10 gap-5'>
      <div className='w-full flex flex-col gap-5'>
        <Similares topResults={topResults} />
        <Botonera />
      </div>
    </div>
  );
}
