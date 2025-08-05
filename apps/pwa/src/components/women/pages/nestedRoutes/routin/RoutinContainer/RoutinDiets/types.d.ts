import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

export interface RoutinDietsProps extends Pick<RoutinResponseTypes, 'name' | 'items'> {}
