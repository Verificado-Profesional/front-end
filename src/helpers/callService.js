import { callService } from '@/services/callService';

const endpoints = {
  news: 'news/fetch-data',
  veracity: 'veracity',
  sentiment: 'sentiment',
};

export const fetchData = async (link) => {
  const body = JSON.stringify({
    url: link,
  });

  const response = await callService(endpoints.news, body);
  return {
    content: await response.json(),
    status: response.status,
  };
};

export const getClassification = async (classification, content) => {
  const body = JSON.stringify({
    text: content,
  });
  return (await callService(endpoints[classification], body)).json();
};
