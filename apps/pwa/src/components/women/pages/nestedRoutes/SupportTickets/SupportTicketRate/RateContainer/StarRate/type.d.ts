import { RateValuesType, ValuesHandlerTypes } from '../type';

export type StarRatePropsType = Pick<RateValuesType, 'rate'> & {
  valuesHandler: ValuesHandlerTypes;
};
