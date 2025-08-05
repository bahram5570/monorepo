import { KitTestsContainerProps } from '../types';

export interface KitTestsListProps extends KitTestsContainerProps {}

export type DetailsTypes = null | {
  buttonScript: string;
  Icon: React.ElementType;
};

export type KitTestsListInfoTypes = (v: Pick<KitTestsListProps, 'data' | 'moduleType'>) => DetailsTypes;
