import useCustomToast from '@hooks/useCustomToast';

import { useState } from 'react';

import { COMMENTS_MAX_CHARACTERS } from '../../constants';
import useNewCommentSubmit from '../useNewCommentSubmit';
import { CommentPayloadTypes, RatePayloadTypes } from './types';

const ratePayloadInitialValues: RatePayloadTypes = { rate: 0 };
const commentPayloadInitialValues: CommentPayloadTypes = { name: '', phone: '', message: '' };

const useNewComment = (articleId: string) => {
  const { onToast } = useCustomToast();
  const [ratePayload, setRatePayload] = useState<RatePayloadTypes>(ratePayloadInitialValues);
  const [commentPayload, setCommentPayload] = useState<CommentPayloadTypes>(commentPayloadInitialValues);

  const ratePayloadHandler = (v: number) => {
    setRatePayload({ ...ratePayload, rate: v });
  };

  const commentPayloadHandler = (v: string, name: 'name' | 'phone' | 'message') => {
    let value = '';

    if (name === 'phone') {
      value = v.length > 11 ? v.slice(0, 11) : v;
    } else {
      value = v.length > COMMENTS_MAX_CHARACTERS ? v.slice(0, COMMENTS_MAX_CHARACTERS) : v;
    }

    setCommentPayload({ ...commentPayload, [name]: value });
  };

  const successHandler = () => {
    setRatePayload(ratePayloadInitialValues);
    setCommentPayload(commentPayloadInitialValues);
    onToast({ type: 'success', message: 'ثبت نظر جدید با موفقیت انجام شد' });
  };

  const { submitHandler, isLoading } = useNewCommentSubmit({ articleId, successHandler });

  const submitNewCommentHandler = () => {
    submitHandler({ ratePayload, commentPayload });
  };

  return { submitNewCommentHandler, isLoading, ratePayload, commentPayload, ratePayloadHandler, commentPayloadHandler };
};

export default useNewComment;
