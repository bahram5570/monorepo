import { DiscountCodeProps } from '../DiscountCode/types';

export interface SubmitBtnProps {
  payButtonText: string;
  approvedCode: string;
  packageId: string;
  isFree: boolean;
  value: number;
}
