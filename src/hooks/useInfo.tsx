import { useInfoContext } from '@/contexts/infoContext';
import { fetchData } from '@/helpers/callService';
import {
  useEffect,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface Props {
  isWithLink: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useInfo = ({ isWithLink, setIsLoading }: Props) => {
  const { info, setInfo } = useInfoContext();
  const [fetchStatus, setFetchStatus] = useState(0);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setInfo({
      content: '',
      link: '',
    });
    setFetchStatus(0);
  }, []);

  useEffect(() => {
    if (isWithLink && info.link !== '' && search) {
      setIsLoading(true);
      fetchData(info.link)
        .then((resp) => {
          setInfo({
            content: resp.content,
            link: info.link,
          });
          setFetchStatus(resp.status);
        })
        .catch((e) => {
          setFetchStatus(e.status);
        })
        .finally(() => {
          setIsLoading(false);
          setSearch(false);
        });
    } else if (isWithLink && info.link === '') {
      setFetchStatus(0);
      setIsLoading(false);
      setSearch(false);
    }
  }, [search]);

  useEffect(() => {
    if (info.content !== '' && (search || isWithLink)) {
      document.getElementById('analizar')?.click();
    }
  }, [info.content, search]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    if (isWithLink) {
      setInfo({
        content: '',
        link: value,
      });
    } else {
      setInfo({
        content: value,
        link: '',
      });
    }
  };

  return {
    fetchStatus,
    handleChange,
    setFetchStatus,
    setSearch,
  };
};
