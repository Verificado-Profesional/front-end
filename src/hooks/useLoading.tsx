import { useEffect, useState } from 'react';

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const esperarUnSegundo = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    esperarUnSegundo();
  }, []);

  return {
    isLoading,
  };
}
