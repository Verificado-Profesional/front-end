import { useEffect, useState } from 'react';

// Services
import { getSimilarity } from '@/helpers/callService';

// Types
import type {
  SimilaresProps as SimilaresResponse,
  UseSimilaresProps as SimilaresProps,
} from '@/types/types';

export default function useSimilarity({
  content,
  setIsLoading,
}: SimilaresProps): SimilaresResponse {
  const [topResults, setTopResults] = useState([]);

  useEffect(() => {
    if (content !== '') {
      setIsLoading(true);
      getSimilarity(content)
        .then((resp) => {
          setTopResults(resp.data.top_results);
        })
        .catch((e) => {
          setTopResults([]);
          console.log('ERROR', e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setTopResults([]);
    }
  }, [content]);

  return { topResults };
}
