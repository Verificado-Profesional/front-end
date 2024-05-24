import { useState } from 'react';
import type { UseAnalysisResponse } from '@/types/types';

export default function useAnalysis(): UseAnalysisResponse {
  const [analysisByParagraph, setAnalysisByParagraph] = useState(false);
  return {
    analysisByParagraph,
    setAnalysisByParagraph,
  };
}
