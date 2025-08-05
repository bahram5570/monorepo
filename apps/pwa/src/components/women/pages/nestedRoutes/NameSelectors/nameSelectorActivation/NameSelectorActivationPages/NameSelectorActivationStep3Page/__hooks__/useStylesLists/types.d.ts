import { FetchSelectNameActivationTypes } from '@services/selectNameServices/types';

export type MainListTypes = string[];
export type SubListTypes = { [x in string]: Pick<FetchSelectNameActivationTypes, 'style'>['style']['styles'][0] };
