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
        <div className='w-full flex justify-end'>
          <span className='w-full md:w-2/6'>
            <BackButton />
          </span>
        </div>
      </div>
    </div>
  );
}
