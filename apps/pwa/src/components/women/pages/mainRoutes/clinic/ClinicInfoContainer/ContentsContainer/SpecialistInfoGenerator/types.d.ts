import { SpecialistCardGeneratorProps } from '../SpecialistCardGenerator/types';

export interface SpecialistInfoGeneratorProps
  extends Pick<
    SpecialistCardGeneratorProps,
    'nezamNumber' | 'speciliaty' | 'firstName' | 'lastName' | 'isOnline' | 'image'
  > {
  backgroundColor: string;
}
