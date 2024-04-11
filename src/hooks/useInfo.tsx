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

  useEffect(() => {
    setInfo({
      content: '',
      link: '',
    });
    setFetchStatus(0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://verificado-back-end-smpa.onrender.com/news/fetch-data',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: info.link,
          }),
        }
      );
      if (response.status === 200) {
        const article = await response.json();
        setFetchStatus(200);
        setInfo({
          content: article,
          link: info.link,
        });
      } else {
        setFetchStatus(response.status);
      }
    };

    if (info.link !== '') {
      fetchData().catch((e) => {
        setFetchStatus(e.status);
      });
    } else {
      setFetchStatus(0);
    }
  }, [info.link]);

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
    setFetchStatus,
    handleChange,
  };
};
