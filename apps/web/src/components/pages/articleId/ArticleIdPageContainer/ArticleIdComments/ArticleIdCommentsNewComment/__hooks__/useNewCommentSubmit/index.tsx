import useApi from '@hooks/useApi';

import { toEnglishNumbers } from '@utils/numbers';

import { SubmitNewCommentHandlerTypes, UseNewCommentSubmitTypes } from './types';

const useNewCommentSubmit = ({ articleId, successHandler }: UseNewCommentSubmitTypes) => {
  const { isLoading, callApi } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    url: `support/article/sp/${articleId}/newcomment`,
  });

  const submitHandler: SubmitNewCommentHandlerTypes = (v) => {
    const payload = { ...v.ratePayload, ...v.commentPayload, phone: toEnglishNumbers(v.commentPayload.phone) };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useNewCommentSubmit;
