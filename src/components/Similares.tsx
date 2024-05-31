// Components
import ResultadoSimilar from './ResultadoSimilar';

// Data
import keys from '@/data/keys.json';

// Types
import type { SimilaresProps } from '@/types/types';

export default function Similares({ topResults }: SimilaresProps) {
  return (
    <div className='w-full h-96 flex flex-col justify-start items-start gap-5'>
      <h1 className='text-lg uppercase font-black text-[#92A7FF]'>
        {keys.analizar_similarity_title}
      </h1>
      <div className='w-full h-96 max-h-96 overflow-x-hidden gap-5 p-5 overflow-y-auto flex flex-col justify-start items-center bg-[var(--color-primary)]/50 backdrop-blur-[4px] border border-white rounded-3xl'>
        {topResults.length === 0 ? (
          <h1 className='text-center h-full flex items-center font-bold text-2xl'>
            {keys.analizar_similarity_no_similars}
          </h1>
        ) : (
          topResults.map((result) => (
            <ResultadoSimilar key={result.url} resultado={result} />
          ))
        )}
      </div>
    </div>
  );
}
