import { getArticle } from '@/services/news';
import { useEffect, useState, type ChangeEvent } from 'react';
import { create } from 'zustand';

interface Props {
  isWithLink: boolean;
}

type Info = {
  content: string;
  link: string;
};

type InfoContext = {
  info: Info;
  setInfo: (state: Info) => void;
};

export const useInfoContext = create<InfoContext>((set) => ({
  info: {
    content: '',
    link: '',
  },
  setInfo: (state) =>
    set({ info: { content: state.content, link: state.link } }),
}));

export const useInfo = ({ isWithLink }: Props) => {
  const { info, setInfo } = useInfoContext();
  const [fetchStatus, setFetchStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setInfo({
      content: '',
      link: '',
    });
    setFetchStatus(0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getArticle(info.link);
      if (response.status === 200) {
        const article = await response.json();
        setInfo({
          content: article,
          link: info.link,
        });
      }
      setFetchStatus(response.status);
      setSearch(false);
      setIsLoading(false);
    };

    if (isWithLink && info.link !== '' && search) {
      fetchData().catch((e) => {
        setFetchStatus(e.status);
        setIsLoading(false);
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
    isLoading,
    handleChange,
    setFetchStatus,
    setSearch,
  };
};
