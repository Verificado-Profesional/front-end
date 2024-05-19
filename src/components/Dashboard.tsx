import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

// Tipo de cada elemento en `trendings`
interface Trending {
  _id: { $oid: string };
  date: string;
  tweet: string;
  url: string;
  tweet_count: number;
  region: string;
}

const trendings: Trending[] = [
  {
    _id: { $oid: '66495ff8789783844775b986' },
    date: '18-05-2024',
    tweet: '#Indy500',
    url: 'https://twitter.com/search?q=%23Indy500',
    tweet_count: 21000,
    region: 'Argentina',
  },
  {
    _id: { $oid: '66495ff8789783844775b99b' },
    date: '18-05-2024',
    tweet: 'Dove',
    url: 'https://twitter.com/search?q=Dove',
    tweet_count: 21000,
    region: 'Argentina',
  },
  {
    _id: { $oid: '66495ff8789783844775b99e' },
    date: '18-05-2024',
    tweet: 'Emma',
    url: 'https://twitter.com/search?q=Emma',
    tweet_count: 1277000,
    region: 'Argentina',
  },
];

const options = {
  title: 'Tendencias de X de Hoy',
  chartArea: { width: '50%' },
  hAxis: {
    title: 'Cantidad de tweets',
    minValue: 0,
  },
  vAxis: {
    title: 'Tendencia',
  },
  legend: { position: 'none' },
};

type MyTuple = [string, string | number];

// Define el tipo del array que contiene las tuplas
type MyArray = MyTuple[];

export default function Dashboard() {
  const [data, setData] = useState<MyArray>([
    ['Tendencia', 'Cantidad de tweets'],
  ]);

  useEffect(() => {
    const trendingsFormated: MyArray = trendings.map((trend) => [
      trend.tweet,
      trend.tweet_count,
    ]);

    setData((prevData) => [...prevData, ...trendingsFormated]);
  }, []);

  return (
    <div>
      <Chart
        chartType='BarChart'
        width='100%'
        height='400px'
        data={data}
        options={options}
      />
    </div>
  );
}
