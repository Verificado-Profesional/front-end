import { getSimilarity } from '@/helpers/callService';
import type { TopResult } from '@/types/types';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

interface Props {
  content: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface Similarity {
  topResults: Array<TopResult>;
}

// "status": "success",
// "message": "Se obtuvieron exitosamente las noticias similares",
// "data": {
//   "content": {
//     "text": "Dengue"
//   },
//   "top_results": [
//     {
//       "title": "Dengue: cuál es la situación actual y cómo se previene la enfermedad",
//       "url": "https://chequeado.com/el-explicador/dengue-cual-es-la-situacion-actual-y-como-se-previene-la-enfermedad/",
//       "source": "Chequeado",
//       "category": "El Explicador",
//       "date": "10/03/2020",
//       "score": 0.9005
//     },

export default function useSimilarity({
  content,
  setIsLoading,
}: Props): Similarity {
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
