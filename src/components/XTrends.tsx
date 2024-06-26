import Chart from 'react-google-charts';

// Components
import DatePicker from './DatePicker';
import Loading from './Loading';
import Selector from './Selector';

// Custom Hooks
import useLoading from '@/hooks/useLoading';
import useXTrends from '@/hooks/useTrends';

// Data
import keys from '@/data/keys.json';

export default function XTrends() {
  const { isLoading, setIsLoading } = useLoading();
  const { options, trends, date, region, setRegion, handleDateChange } =
    useXTrends({
      hTitle: 'Cantidad de Tweets',
      vTitle: 'Tweet',
      setIsLoading,
    });

  const regions = ['argentina', 'buenos-aires', 'cordoba', 'rosario'];

  return (
    <div className='w-full rounded-3xl bg-[var(--color-primary)]/50 backdrop-blur-[4px] border-2 border-white flex flex-col'>
      <div className='w-full p-5 items-start md:items-center rounded-t-[22px] bg-[var(--color-primary)]/50 backdrop-blur-[4px] flex md:flex-row flex-col gap-5'>
        {keys.trends_date_title}
        <DatePicker date={date} onChange={handleDateChange} />
        {regions.length === 0 ? null : keys.trends_region_title}
        <Selector
          items={regions}
          setSelected={setRegion}
          label={
            region === ''
              ? keys.trends_x_default_region
              : region.replace('-', ' ')
          }
        />
      </div>
      <div className='w-full h-[35rem] relative -z-10 bg-white rounded-b-[22px] p-5'>
        {isLoading ? (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Loading />
          </div>
        ) : trends.length === 1 ? (
          <p className='w-full h-full flex justify-center items-center text-center text-xl font-medium text-[var(--color-primary)]'>
            {keys.trends_x_no_trends_finded}
          </p>
        ) : (
          <Chart
            chartType='BarChart'
            width='fit'
            height='100%'
            data={trends}
            options={options}
            className='rounded-3xl z-0'
          />
        )}
      </div>
    </div>
  );
}
