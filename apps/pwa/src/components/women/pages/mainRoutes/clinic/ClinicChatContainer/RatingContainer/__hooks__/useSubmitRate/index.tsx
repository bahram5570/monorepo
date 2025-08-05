import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { UseSubmitRateProps } from './types';

const useSubmitRate = ({ rate, description, feedbackValues }: UseSubmitRateProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery();
  const router = useRouter();

  const ticketId = getQueryParams('ticketId');

  const successHandler = () => {
    refetchQuery({ queryKey: ['chats'] });

    const isModalOpen = getQueryParams(MODAL_QUERY_NAME) !== null;

    if (isModalOpen) {
      router.back();
      router.back();
    } else {
      router.back();
    }
  };

  const { callApi, isLoading: isRateLoading } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `advice/ticket/${ticketId}/DrRate`,
  });

  const submitHandler = () => {
    const payload = {
      rate,
      description,
      feedbackPositive: feedbackValues.feedbackPositive,
      feedbackNegative: feedbackValues.feedbackNegative,
    };

    callApi(payload);
  };

  return { submitHandler, isRateLoading };
};

export default useSubmitRate;
