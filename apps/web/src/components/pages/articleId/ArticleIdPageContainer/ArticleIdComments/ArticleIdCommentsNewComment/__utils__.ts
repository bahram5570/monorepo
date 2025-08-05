import { toEnglishNumbers } from '@utils/numbers';

import { CommentPayloadTypes, RatePayloadTypes } from './__hooks__/useNewComment/types';

export const handleNewCommentValidation = (props: {
  commentPayload: CommentPayloadTypes;
  ratePayload: RatePayloadTypes;
}) => {
  const isRateValid = props.ratePayload.rate > 0;
  const isNameValid = props.commentPayload.name.trim().length >= 2;
  const isMessageValid = props.commentPayload.message.trim().length >= 2;
  const isPhoneValid = /^09\d{9}$/.test(toEnglishNumbers(props.commentPayload.phone));

  if (!isMessageValid) {
    return 'ثبت دیدگاه باید حداقل 2 کاراکتر داشته باشد';
  } else if (!isNameValid) {
    return 'نام باید حداقل 2 کاراکتر داشته باشد';
  } else if (!isPhoneValid) {
    return 'شماره همراه را درست وارد کنید';
  } else if (!isRateValid) {
    return 'یک امتیاز را انتخاب کنید';
  }
};

export const handleNewCommentDisable = (props: {
  commentPayload: CommentPayloadTypes;
  ratePayload: RatePayloadTypes;
}) => {
  const isDisable =
    props.ratePayload.rate === 0 ||
    props.commentPayload.name.trim() === '' ||
    props.commentPayload.phone.trim() === '' ||
    props.commentPayload.message.trim() === '';

  return isDisable;
};
