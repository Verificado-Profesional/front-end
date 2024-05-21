// Services
import { callService } from '@/services/callService';

// Types
import type { Classification } from '@/types/types';

const endpoints = {
  news: 'news/fetch-data',
  veracity: 'veracity',
  sentiment: 'sentiment',
  similarity: 'similarity',
  xTrends: 'trends/twitter',
  googleTrends: 'trends/google',
};

export const fetchData = async (link: string) => {
  const body = JSON.stringify({
    url: link,
  });

  const response = await callService({ endpoint: endpoints.news, body });
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
  return (
    await callService({ endpoint: endpoints[classification], body })
  ).json();
};

export const getSimilarity = async (content: string) => {
  const body = JSON.stringify({
    text: content,
  });
  return (await callService({ endpoint: endpoints.similarity, body })).json();
};

export const getTrends = async ({
  isTwitter,
  params,
}: {
  isTwitter?: boolean;
  params?: {
    date?: string;
    region?: string;
  };
}) => {
  return (
    await callService({
      endpoint: endpoints[isTwitter ? 'xTrends' : 'googleTrends'],
      method: 'GET',
      params: params ? params : undefined,
    })
  ).json();
};
