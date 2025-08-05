import { InfiniteData } from '@tanstack/react-query';

import { ResponsePropsType } from '../__hooks__/useGetData/type';

type dataType = Pick<ResponsePropsType, 'memories'>;
export interface HasDataMemoryPropsType extends dataType {
  isFetchingNextPage: (node: HTMLDivElement | null) => void;
}
