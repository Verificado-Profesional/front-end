import { getClassification } from '@/helpers/callService';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

interface Props {
  content: string;
  classificationType: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface Classifications {
  classification: boolean;
  trueProbability: number;
  falseProbability: number;
}

export default function useClassification({
  content,
  classificationType,
  setIsLoading,
}: Props): Classifications {
  const [classification, setClassification] = useState(false);
  const [trueProbability, setTrueProbability] = useState(0);
  const [falseProbability, setFalseProbability] = useState(0);

  useEffect(() => {
    if (content !== '') {
      setIsLoading(true);
      getClassification(classificationType, content)
        .then((classification) => {
          setClassification(classification.data.classification);
          setTrueProbability(classification.data.true_probability);
          setFalseProbability(classification.data.false_probability);
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

  return { classification, trueProbability, falseProbability };
}
