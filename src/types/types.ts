import type { Dispatch, SetStateAction } from 'react';

export enum Classification {
  news = 'news',
  veracity = 'veracity',
  sentiment = 'sentiment',
}

export interface ButtonIconProps {
  onClick: () => void;
  icon: string;
  title: string;
  className?: string;
}

export interface CardProps {
  className?: string;
  id: number;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export interface ClassificationProps {
  content: string;
  classificationType: Classification;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface ClassificationsResponse {
  classification: boolean;
  trueProbability: number;
  falseProbability: number;
}

export interface HeaderProps {
  pathname: string;
}

export interface HamburguerIconProps {
  isSelected: boolean;
  onClick: () => void;
}

export interface InfoProps {
  isWithLink: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface ResultadoProps {
  classification: boolean;
  classificationResult: string | undefined;
  classificationText: string | undefined;
  trueProbability: number;
  falseProbability: number;
}

export interface ResultadoSimilarProps {
  resultado: TopResult;
}

export interface SimilaresProps {
  firstTime?: boolean;
  topResults: Array<TopResult>;
}

export interface UseSimilaresProps {
  content: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface TopResult {
  title: string;
  url: string;
  source: string;
  category: string;
  date: string;
  score: number;
}
