import Chart from 'react-google-charts';

// Components
import DatePicker from './DatePicker';
import Loading from './Loading';
import Selector from './Selector';

// Custom Hooks
import useGeoTrends from '@/hooks/useGeoTrends';
import useLoading from '@/hooks/useLoading';

// Data
import keys from '@/data/keys.json';

export default function GeoTrends() {
  const { isLoading, setIsLoading } = useLoading();
  const { options, trends, regions, trend, date, setTrend, handleDateChange } =
    useGeoTrends({
      setIsLoading,
    });

  console.log(trend, regions);
  return (
    <div className='w-full rounded-3xl bg-[var(--color-primary)]/50 backdrop-blur-[4px] border-2 border-white flex flex-col'>
      <div className='w-full p-5 items-start md:items-center rounded-t-[22px] bg-[var(--color-primary)]/50 backdrop-blur-[4px] flex md:flex-row flex-col gap-5'>
        {keys.trends_date_title}
        <DatePicker date={date} onChange={handleDateChange} />
        {trend === '' ? null : keys.trends_trend_title}
        <Selector
          items={trends}
          setSelected={setTrend}
          label={trend === '' ? keys.trends_trend_title : trend}
        />
      </div>
      <div className='w-full h-[35rem] relative -z-10 bg-white rounded-b-[22px] p-5'>
        {isLoading ? (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Loading />
          </div>
        ) : regions.length === 1 ? (
          <p className='w-full h-full flex justify-center items-center text-center text-xl font-medium text-[var(--color-primary)]'>
            {keys.trends_no_trends_finded}
          </p>
        ) : (
          <Chart
            chartType='GeoChart'
            width='100%'
            height='100%'
            data={regions}
            options={options}
            className='rounded-3xl z-0'
          />
        )}
      </div>
    </div>
  );
}
