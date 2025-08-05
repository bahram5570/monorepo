import { DistractPropsType } from '../type';

export type MoviePropsType = Pick<DistractPropsType, 'children'>;
export type ListType = { image: string; description: string; englishName?: string }[];
