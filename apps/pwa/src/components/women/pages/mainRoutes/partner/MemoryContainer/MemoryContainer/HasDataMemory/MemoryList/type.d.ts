import { HasDataMemoryPropsType } from '../type';

export type MemoryListPropsType = Pick<HasDataMemoryPropsType, 'isFetchingNextPage' | 'memories'>;
