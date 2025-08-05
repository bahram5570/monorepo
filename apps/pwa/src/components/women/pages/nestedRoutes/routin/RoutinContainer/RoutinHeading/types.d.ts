import { RoutinResponseTypes } from './../__hooks__/useGetData/types.d';

export interface RoutinHeadingProps extends Pick<RoutinResponseTypes, 'description' | 'image' | 'title'> {}
