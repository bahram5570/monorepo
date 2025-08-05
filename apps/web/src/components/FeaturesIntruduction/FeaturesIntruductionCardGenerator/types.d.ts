import { FeaturesIntruductionTypes } from '../types';

type ItemTypes = Pick<FeaturesIntruductionTypes, 'list'>['list'][0];
export interface FeaturesIntruductionCardGeneratorTypes extends ItemTypes {
  isInverse: boolean;
}
