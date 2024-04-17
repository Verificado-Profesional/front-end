import { useInfoContext } from '@/hooks/useInfo';
import useLoading from '@/hooks/useLoading';
import useRedirect from '@/hooks/useRedirect';
import Loading from './Loading';

export default function Sintactic() {
  const { info } = useInfoContext();
  useRedirect({ content: info.content });
  // const { isLoading } = useLoading();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return <div>Sintáctico</div>;
}
