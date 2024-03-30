import { useEffect, useState } from 'react';
import { useInfoContext } from './useInfo';

export default function useRedirect() {
  const { info } = useInfoContext();
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!firstTime) {
      if (info.content === '') {
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
