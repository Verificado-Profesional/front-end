// Custom Hooks
import useCommonTrends from './useCommonTrends';

// Types
import type { useTrendsProps, useTrendsResponse } from '@/types/types';

export default function useTrends({
  hTitle,
  vTitle,
  isTwitter = true,
  setIsLoading,
}: useTrendsProps): useTrendsResponse {
  const {
    chartValues,
    date,
    selectorValue,
    selectorValues,
    handleDateChange,
    setSelectorValue,
  } = useCommonTrends({
    initialsChartValues: [
      ['Tendencias', `Cantidad de ${isTwitter ? 'tweets' : 'búsquedas'}`],
    ],
    isTwitter: isTwitter,
    setIsLoading,
  });

  const options = {
    title: 'Tendencias',
    chartArea: { width: '50%' },
    hAxis: {
      title: hTitle,
      minValue: 0,
      viewWindow: {
        min: 0,
        max:
          chartValues.length > 1
            ? Math.max(
                ...chartValues.slice(1).map((item) => item[1] as number)
              ) + 1000
            : undefined,
      },
    },
    vAxis: {
      title: vTitle,
    },
    backgroundColor: 'transparent',
    colors: ['#92A7FF'],
    legend: { position: 'none' },
  };

  return {
    options,
    regions: selectorValues,
    trends: chartValues,
    date,
    region: selectorValue,
    setRegion: setSelectorValue,
    handleDateChange,
  };
}
