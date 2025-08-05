import { ValuesTypes } from '../../types';

export interface UseValueHandlerProps {
  valueHandler: (v: string) => void;
  values: ValuesTypes;
}
