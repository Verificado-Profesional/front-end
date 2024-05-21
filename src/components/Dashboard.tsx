import GeoTrends from './GeoTrends';
import XTrends from './XTrends';

export default function Dashboard() {
  return (
    <div className='w-4/5 flex flex-col items-start justify-between py-32 gap-5'>
      <XTrends />
      <GeoTrends />
    </div>
  );
}
