import { useInfoContext } from '@/hooks/useInfo';

export default function Veracity() {
  const { info } = useInfoContext();
  return (
    <div>
      <p>Content: {info.content}</p>
      <p>Link: {info.link}</p>
    </div>
  );
}
