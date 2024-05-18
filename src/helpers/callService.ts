// Services
import { callService } from '@/services/callService';

// Types
import type { Classification } from '@/types/types';

const endpoints = {
  news: 'news/fetch-data',
  veracity: 'veracity',
  sentiment: 'sentiment',
  similarity: 'similarity',
};

export const fetchData = async (link: string) => {
  const body = JSON.stringify({
    url: link,
  });

  const response = await callService(endpoints.news, body);
  return {
    content: await response.json(),
    status: response.status,
  };
};

export const getClassification = async (
  classification: Classification,
  content: string
) => {
  const body = JSON.stringify({
    text: content,
  });
  return (await callService(endpoints[classification], body)).json();
};

export const getSimilarity = async (content: string) => {
  const body = JSON.stringify({
    text: content,
  });
  return (await callService(endpoints.similarity, body)).json();
};
