import { useState } from 'react';

// Components
import Card from './Card';

// Data
import tips from '@/data/tips.json';
import keys from '@/data/keys.json';

export default function Inform() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full min-h-screen bg-[url('/assets/Fondo.svg')] bg-fixed bg-auto bg-repeat grid place-items-center">
      <div className='w-4/5 flex flex-col justify-center items-start mt-32 mb-20 gap-5'>
        <div className='w-full flex flex-col justify-center items-start'>
          <h1 className='text-3xl uppercase font-black text-[#92A7FF]'>
            {keys.inform_title}
          </h1>
          <h2 className='text-xl text-left font-semibold'>
            {keys.inform_subtitle}
          </h2>
        </div>
        <p className='w-full bg-[#04001f]/50 backdrop-blur-[2px] py-2 text-left text-base font-extralight rounded-3xl flex justify-start items-center mt-4 mb-4'>
          {keys.inform_guide_info}
        </p>

        <Card
          className='w-full border-none bg-[#92A7FF]'
          id={selected + 1}
          title={tips[selected].title}
          description={tips[selected].description}
          selected={true}
          onClick={() => {}}
        />
        <div className='w-full rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {tips
            .filter((tip) => tip.id - 1 !== selected)
            .map((tip) => (
              <Card
                className='hover:border-[#92A7FF]'
                key={tip.id}
                id={tip.id}
                title={tip.title}
                description={tip.description}
                selected={false}
                onClick={() => setSelected(tip.id - 1)}
              />
            ))}
        </div>
        <p className='w-full bg-[#04001f]/50 backdrop-blur-[2px] py-2 text-left text-base font-extralight rounded-3xl flex justify-start items-center mt-4 mb-4'>
          {keys.inform_close_message}
        </p>
      </div>
    </section>
  );
}
