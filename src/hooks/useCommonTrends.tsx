import { useEffect, useState } from 'react';

// Services
import { getTrends } from '@/helpers/callService';

// Types
import type { UseCommonTrendsProps } from '@/types/types';

export default function useCommonTrends({
  initialsChartValues,
  isTwitter,
  isGeo = false,
  setIsLoading,
}: UseCommonTrendsProps) {
  const [date, setDate] = useState<Date>();
  const [selectorValue, setSelectorValue] = useState('');
  const [selectorValues, setSelectorValues] = useState<string[]>([]);
  const [chartValues, setChartValues] =
    useState<[string, string | number][]>(initialsChartValues);

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  };

  function createParams(date?: Date, selector?: string) {
    const params: { date?: string; region?: string; trend?: string } = {};
    if (date) {
      params.date = formatDate(date);
    }

    if (selector && selector !== '') {
      if (isGeo) {
        params.trend = selector;
      } else {
        params.region = selector;
      }
    }

    return params;
  }

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  useEffect(() => {
    setIsLoading(true);
    setChartValues(initialsChartValues);
    setSelectorValues([]);
    const params = createParams(date, selectorValue);
    getTrends({ isTwitter, params })
      .then((resp) => {
        const responseSelectors: string[] = resp.map((trend: any) =>
          isGeo ? trend.trend : trend.region
        );
        if (responseSelectors.length === 0) {
          setSelectorValue('');
        }
        setSelectorValues([...new Set(responseSelectors)]);
        if (!isGeo) {
          setChartValues((prevTrends) => [
            ...prevTrends,
            ...resp.map((trend: any) => [trend.tweet, trend.tweet_count]),
          ]);
        } else {
          const regionsFormatted: [string, string | number][] = Object.entries(
            !selectorValue || selectorValue === ''
              ? resp[0]
              : resp.find((item: any) => item.trend === selectorValue)
          )
            .filter(([key]) => key !== 'trend' && key !== 'date')
            .map(([key, value]): [string, string | number] => [
              key.replaceAll('_', ' '),
              value as string | number,
            ]);

          if (!selectorValue || selectorValue === '') {
            setSelectorValue(selectorValues[0]);
          }

          setChartValues([...initialsChartValues, ...regionsFormatted]);
        }
      })
      .catch((e) => {
        console.log('ERROR', e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [date, selectorValue]);

  return {
    date,
    selectorValue,
    selectorValues,
    chartValues,
    setSelectorValue,
    handleDateChange,
  };
}
