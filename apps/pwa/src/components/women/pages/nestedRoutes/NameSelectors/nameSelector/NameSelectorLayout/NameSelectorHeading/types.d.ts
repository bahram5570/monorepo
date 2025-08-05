import { FetchSelectNameTypes } from '@services/selectNameServices/types';

export interface NameSelectorHeadingProps {
  description: Pick<FetchSelectNameTypes, 'description'>['description'];
}
