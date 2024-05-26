import type { Dispatch, SetStateAction } from 'react';
import type { ChartWrapperOptions } from 'react-google-charts';

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

export interface NoticiaProps {
  analysisByParagraph?: boolean;
  paragraphs?: ClassificationServiceResponse[];
}

export interface ResultadoParrafosProps {
  paragraphs: ClassificationServiceResponse[];
  getResultMessage: (classification: boolean, accuracy: number) => string;
  getTextMessage: (classification: boolean, accuracy: number) => string;
}

export interface UseAnalysisResponse {
  analysisByParagraph: boolean;
  setAnalysisByParagraph: Dispatch<SetStateAction<boolean>>;
}

export interface ActionButton {
  title: string;
  onClick: () => void;
}

export interface CallServiceProps {
  body?: string;
  endpoint: string;
  method?: string;
  params?: {};
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

export interface ClassificationServiceResponse {
  classification: boolean;
  true_probability: number;
  false_probability: number;
  content: string;
}

export interface ClassificationsResponse {
  classification: boolean;
  trueProbability: number;
  falseProbability: number;
  paragraphs: ClassificationServiceResponse[];
}

export interface ResultadoParrafoPorps {
  paragraphInfo: ClassificationServiceResponse;
  paragraphNumber: number;
}

export interface DatePickerProps {
  date: Date | undefined;
  onChange: (newDate: Date) => void;
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

export interface SelectorProps {
  label: string;
  items: string[];
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface SimilaresProps {
  firstTime?: boolean;
  topResults: Array<TopResult>;
}

export interface UseSimilaresProps {
  content: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface useGeoTrendsProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface useGeoTrendsResponse {
  options: ChartWrapperOptions['options'] | undefined;
  trends: string[];
  regions: [string, string | number][];
  date: Date | undefined;
  trend: string;
  setTrend: Dispatch<SetStateAction<string>>;
  handleDateChange: (newDate: Date) => void;
}

export interface UseCommonTrendsProps {
  initialsChartValues: [string, string | number][];
  isTwitter: boolean;
  isGeo?: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface useTrendsProps {
  hTitle?: string;
  vTitle?: string;
  date?: Date | undefined;
  region?: string;
  isTwitter?: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface useTrendsResponse {
  options: ChartWrapperOptions['options'] | undefined;
  regions: string[];
  trends: [string, string | number][];
  date: Date | undefined;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  handleDateChange: (newDate: Date) => void;
}

export interface TopResult {
  title: string;
  url: string;
  source: string;
  category: string;
  date: string;
  score: number;
}
