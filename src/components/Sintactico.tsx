import { useInfoContext } from '@/hooks/useInfo';

export default function Sintactic() {
  const { info } = useInfoContext();
  return (
    <div>
      Sintáctico
      <p>Content: {info.content}</p>
      <p>Link: {info.link}</p>
    </div>
  );
}
