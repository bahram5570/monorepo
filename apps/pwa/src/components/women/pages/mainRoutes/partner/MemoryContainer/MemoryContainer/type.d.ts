import { MemoryType } from './__hooks__/useGetData/type';

export type MemoryItemPropsType = Pick<MemoryType, 'fileName' | 'text' | 'time' | 'title' | 'id'> & {
  currentPage;
};
