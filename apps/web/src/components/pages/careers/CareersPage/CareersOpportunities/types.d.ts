import { CareersPageTypes } from '../types';

export interface CareersOpportunitiesTypes extends Pick<CareersPageTypes, 'opportunities'> {}

type ItemsTypes = Pick<CareersOpportunitiesTypes, 'opportunities'>['opportunities'][0];
export interface CardGeneratorTypes extends ItemsTypes {}
