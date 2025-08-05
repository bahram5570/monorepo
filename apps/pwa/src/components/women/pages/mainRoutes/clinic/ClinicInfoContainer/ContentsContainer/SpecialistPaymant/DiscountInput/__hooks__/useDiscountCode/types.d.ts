import { DiscountInputProps } from '../../types';

export interface UseDiscountCodeProps extends DiscountInputProps {}

export type ApplyDiscountResponseTypes = {
  price: number;
  valid: boolean;
  payPrice: number;
  priceUnit: string;
  discountCode: string;
  currentValue: number;
  discountPrice: number;
  discountString: string;
  discountMessage: string;
  discountPercent: number;
};
