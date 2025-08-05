import { ColorsTypes } from '../__utils__/types';

type DesignSystemTyps = {
  color: ColorsTypes;
};
type FreeTyps = {
  color: 'FREE-STYLES';
  borderColor: string;
};

export type SpinnerColorsTypes = DesignSystemTyps | FreeTyps;

export type SpinnerProps = SpinnerColorsTypes & {
  borderWidth?: number;
  width?: number;
};
