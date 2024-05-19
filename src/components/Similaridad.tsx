// Contexts
import { useInfoContext } from '@/contexts/infoContext';

// Custom hooks
import useLoading from '@/hooks/useLoading';
import useRedirect from '@/hooks/useRedirect';
import useSimilarity from '@/hooks/useSimilarity';

// Components
import BackButton from './BackButton';
import Loading from './Loading';
import Similares from './Similares';
import Noticia from './Noticia';

export default function Similarity() {
  const { info } = useInfoContext();

  useRedirect({ content: info.content });

  const { isLoading, setIsLoading } = useLoading();
  const { firstTime, topResults } = useSimilarity({
    content: info.content,
    setIsLoading,
  });

  if (isLoading || firstTime) {
    return (
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='w-4/5 h-auto sm:h-4/5 flex flex-col md:flex-row items-start justify-between py-10 gap-5'>
      <Noticia />
      <div className='md:w-1/2 lg:w-2/6 w-full flex flex-col gap-5'>
        <Similares topResults={topResults} />
        <BackButton />
      </div>
    </div>
  );
}
