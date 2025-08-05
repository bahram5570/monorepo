import { NameTypes } from './__hooks__/useListMaker/types';

export type CyclesModuleProps = NameTypes & {
  valueHandler: (v: number) => void;
};
