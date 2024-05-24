import { useEffect, useState } from 'react';

// Helpers
import { getClassification } from '@/helpers/callService';

// Types
import type {
  ClassificationProps,
  ClassificationServiceResponse,
  ClassificationsResponse,
} from '@/types/types';

export default function useClassification({
  content,
  classificationType,
  setIsLoading,
}: ClassificationProps): ClassificationsResponse {
  const [classification, setClassification] = useState(false);
  const [trueProbability, setTrueProbability] = useState(0);
  const [falseProbability, setFalseProbability] = useState(0);
  const [paragraphs, setParagraphs] = useState<ClassificationServiceResponse[]>(
    []
  );

  useEffect(() => {
    if (content !== '') {
      setIsLoading(true);
      getClassification(classificationType, content)
        .then((classification) => {
          setClassification(classification.data.predicted_text.classification);
          setTrueProbability(
            classification.data.predicted_text.true_probability
          );
          setFalseProbability(
            classification.data.predicted_text.false_probability
          );
          setParagraphs(classification.data.predicted_paragraphs);
        })
        .catch((e) => {
          setClassification(false);
          setTrueProbability(0);
          setFalseProbability(0);
          console.log('ERROR', e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setClassification(false);
      setTrueProbability(0);
      setFalseProbability(0);
    }
  }, [content]);

  return { classification, trueProbability, falseProbability, paragraphs };
}
