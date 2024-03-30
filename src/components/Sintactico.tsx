import { useInfoContext } from '@/hooks/useInfo';
import useRedirect from '@/hooks/useRedirect';

export default function Sintactic() {
  const { info } = useInfoContext();
  useRedirect({ content: info.content });

  return <div>Sintáctico</div>;
}
