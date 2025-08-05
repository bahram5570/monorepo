import { SpecialistPaymantProps } from '../../types';

export interface UseBuyProps extends Pick<SpecialistPaymantProps, 'id' | 'questionValues' | 'type'> {}

export type BuyResponseTypes = {
  id: string;
  price: number;
  isValid: boolean;
  realPrice: number;
  redirectBank: boolean;
  bankResp: { isSuccess: boolean; message: string; token: string };
};

export type ApprovedCodeHandlerTypes = (v: string) => void;
