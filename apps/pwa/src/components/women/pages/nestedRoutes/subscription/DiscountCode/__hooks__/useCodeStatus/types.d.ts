import { CodeInputProps } from '../../types';

export interface UseCodeStatusProps extends Pick<CodeInputProps, 'discountCodeHelper' | 'isValidDiscountCode'> {
  approveCodeHandler: () => void;
}

export type ScriptInfoTypes = null | { script: string; color: string };
