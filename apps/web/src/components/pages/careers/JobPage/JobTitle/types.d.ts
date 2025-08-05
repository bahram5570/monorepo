import { JobPageTypes } from '../types';

export interface JobTitleTypes extends Pick<JobPageTypes, 'id'> {
  title: string;
}
