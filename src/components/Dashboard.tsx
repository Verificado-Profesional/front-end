// Components
import GeoTrends from './GeoTrends';
import XTrends from './XTrends';

// Data
import keys from '@/data/keys.json';

export default function Dashboard() {
  return (
    <div className='w-4/5 flex flex-col items-start justify-between py-32 gap-5'>
      <h1 className='text-3xl uppercase font-black text-[#92A7FF]'>
        {keys.trends_x_title}
      </h1>
      <XTrends />
      <h1 className='text-3xl uppercase font-black text-[#92A7FF]'>
        {keys.trends_title}
      </h1>
      <GeoTrends />
    </div>
  );
}
