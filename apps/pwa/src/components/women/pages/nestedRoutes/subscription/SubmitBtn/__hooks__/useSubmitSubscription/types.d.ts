export type SubmitHandlerTypes = (
  isFree: boolean,
  payload: {
    packageId: string;
    discount: string;
    isWeb: boolean;
    value: number;
  },
) => void;

export type BuySubscriptionResponseTypes = { isSuccess: boolean; message: string; token: string };

export type FreeSubscriptionResponseTypes = { valid: boolean };
