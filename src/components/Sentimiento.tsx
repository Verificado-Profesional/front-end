import { useInfoContext } from '@/hooks/useInfo';

export default function Sentiment() {
  const { info } = useInfoContext();
  return (
    <div>
      Sentimiento
      <p>Content: {info.content}</p>
      <p>Link: {info.link}</p>
    </div>
  );
}
