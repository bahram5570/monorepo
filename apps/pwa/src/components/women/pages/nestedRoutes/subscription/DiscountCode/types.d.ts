import { ResponseTypes } from '../__hooks__/useGetData/types';
import { CodeHandlerTypes } from './__hooks__/useDiscountCode/types';

export interface DiscountCodeProps extends Pick<ResponseTypes, 'isValidDiscountCode' | 'discountCodeHelper'> {
  approvedCodeHandler: (v: string) => void;
  onApply: (v: { code: string }) => void;
  loadingResponse: boolean;
}

export interface CodeInputProps
  extends Pick<
    DiscountCodeProps,
    'discountCodeHelper' | 'isValidDiscountCode' | 'loadingResponse' | 'codeHandler' | 'approvedCodeHandler'
  > {
  codeHandler: (v: string) => void;
  onClick: () => void;
  code: string;
}
