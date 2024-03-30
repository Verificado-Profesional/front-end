import { useEffect } from 'react';
import { useInfoContext } from './useInfo';

export default function useRedirect() {
  const { info } = useInfoContext();

  useEffect(() => {
    if (info.content === '') {
      window.location.replace('/analizar');
    }
  }, []);
  return {};
}
