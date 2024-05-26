// Context
import { useInfoContext } from '@/contexts/infoContext';

// Components
import ActionButton from './ActionButton';
import BackButton from './BackButton';
import Loading from './Loading';
import Noticia from './Noticia';
import Resultado from './Resultado';

// Custom hooks
import useAnalysis from '@/hooks/useAnalysis';
import useClassification from '@/hooks/useClassification';
import useLoading from '@/hooks/useLoading';
import useRedirect from '@/hooks/useRedirect';

// Helpers
import {
  getVeracityMessages,
  getVeracityResult,
} from '@/helpers/classificationMessages';

// Types
import { Classification } from '@/types/types';
import ResultadoParrafos from './ResultadoParrafos';

export default function Veracity() {
  const { info } = useInfoContext();

  useRedirect({ content: info.content });

  const { isLoading, setIsLoading } = useLoading();
  const { analysisByParagraph, setAnalysisByParagraph } = useAnalysis();
  const { classification, trueProbability, falseProbability, paragraphs } =
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
    <div className='w-4/5 h-auto sm:h-4/5 flex flex-col md:flex-row items-start justify-between py-10 gap-5'>
      <Noticia
        analysisByParagraph={analysisByParagraph}
        paragraphs={paragraphs}
      />
      <div className='md:w-2/6 w-full flex flex-col gap-5'>
        {analysisByParagraph ? (
          <ResultadoParrafos
            paragraphs={paragraphs}
            getResultMessage={getVeracityResult}
            getTextMessage={getVeracityMessages}
          />
        ) : (
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
        )}
        <div className='w-full flex flex-col-reverse md:flex-row gap-5'>
          <BackButton />
          <ActionButton
            title={`Analizar por ${
              analysisByParagraph ? 'contenido' : 'párrafo'
            }`}
            onClick={() => setAnalysisByParagraph(!analysisByParagraph)}
          />
        </div>
      </div>
    </div>
  );
}
