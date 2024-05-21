// Custom Hooks
import useCommonTrends from './useCommonTrends';

// Types
import type { useGeoTrendsProps, useGeoTrendsResponse } from '@/types/types';

export default function useGeoTrends({
  setIsLoading,
}: useGeoTrendsProps): useGeoTrendsResponse {
  const {
    chartValues,
    date,
    selectorValue,
    selectorValues,
    handleDateChange,
    setSelectorValue,
  } = useCommonTrends({
    initialsChartValues: [['Provincias', 'Porcentaje de búsquedas']],
    isTwitter: false,
    isGeo: true,
    setIsLoading,
  });

  const options = {
    region: 'AR',
    resolution: 'provinces',
    colorAxis: { colors: ['#92A7FF', '#04001F'] },
    backgroundColor: 'white',
    datalessRegionColor: 'white',
    defaultColor: '#f5f5f5',
  };

  return {
    options,
    date,
    regions: chartValues,
    trend: selectorValue,
    trends: selectorValues,
    setTrend: setSelectorValue,
    handleDateChange,
  };
}
