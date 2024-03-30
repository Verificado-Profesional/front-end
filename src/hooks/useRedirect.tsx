import { useEffect, useState } from 'react';

export default function useRedirect({ content }: { content: string }) {
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!firstTime) {
      if (content === '') {
        window.location.replace('/analizar');
      }
    }
  }, [firstTime]);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    }
  }, []);
  return {};
}
