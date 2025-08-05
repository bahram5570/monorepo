import { PaymentTypeQueryEnum } from './enums';

export type PaymentQueryTypes = {
  isSuccessful: boolean;
  paymentType: PaymentTypeQueryEnum;
};
