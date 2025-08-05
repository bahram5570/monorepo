import { SpecialistPaymantProps } from '../types';

export interface InfoPaymentProps
  extends Pick<SpecialistPaymantProps, 'currentValue' | 'discountPrice' | 'payPrice' | 'price' | 'priceUnit'> {}
