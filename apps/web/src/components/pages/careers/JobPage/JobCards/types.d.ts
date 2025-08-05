import { JobPageTypes } from '../types';

export interface JobCardsTypes
  extends Pick<JobPageTypes, 'location' | 'departman' | 'employmentTimeType' | 'employmentLocationType'> {}

export interface CardGeneratorTypes {
  Icon: any;
  title: string;
  description: string;
}

export interface CardsBigScreenTypes {
  list: JSX.Element[];
}

export interface CardsSmallScreenTypes {
  list: JSX.Element[];
}
