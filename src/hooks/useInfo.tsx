import type { APISpaceXResponse } from '@/types/response';
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(info.link);
      const html = await response.text();
      const tempElement = document.createElement('div');
      tempElement.innerHTML = html;
      const scripts = tempElement.querySelectorAll('script');

      let descriptionJson: APISpaceXResponse | null = null;
      for (const script of scripts) {
        if (script.textContent?.includes('"@type":["NewsArticle"]')) {
          descriptionJson = JSON.parse(script.textContent) as APISpaceXResponse;
          break;
        }
      }

      if (descriptionJson) {
        setInfo({
          content: descriptionJson.articleBody,
          link: info.link,
        });
      } else {
        setFetchStatus(500);
      }

      setFetchStatus(response.status);
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
