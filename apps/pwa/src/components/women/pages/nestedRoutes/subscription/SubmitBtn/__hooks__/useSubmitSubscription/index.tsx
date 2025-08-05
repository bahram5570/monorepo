import { SubmitHandlerTypes } from './types';
import useBuySubscription from './useBuySubscription';
import useFreeSubscription from './useFreeSubscription';

const useSubmitSubscription = () => {
  const { buySubscription, buyLoading } = useBuySubscription();
  const { getFreeSubscription, freeLoading } = useFreeSubscription();

  const submitHandler: SubmitHandlerTypes = (isFree, payload) => {
    if (isFree) {
      getFreeSubscription(payload.packageId);
    } else {
      buySubscription(payload);
    }
  };

  const isLoading = buyLoading || freeLoading;

  return { submitHandler, isLoading };
};

export default useSubmitSubscription;
