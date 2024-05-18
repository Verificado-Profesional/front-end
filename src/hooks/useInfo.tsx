import { useEffect, useState, type ChangeEvent } from 'react';

// Context
import { useInfoContext } from '@/contexts/infoContext';

// Services
import { fetchData } from '@/helpers/callService';

// Types
import type { InfoProps } from '@/types/types';

export const useInfo = ({ isWithLink, setIsLoading }: InfoProps) => {
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
    search,
    handleChange,
    setFetchStatus,
    setSearch,
  };
};
