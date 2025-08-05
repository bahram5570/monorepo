import { RoutinItemResponseTypes } from '../__hooks__/useGetData/types';

export interface RoutinItemHeadingProps extends Pick<RoutinItemResponseTypes, 'title' | 'description' | 'icon'> {}
