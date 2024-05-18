export enum Classification {
  news = 'news',
  veracity = 'veracity',
  sentiment = 'sentiment',
}

export interface TopResult {
  title: string;
  url: string;
  source: string;
  category: string;
  date: string;
  score: number;
}
