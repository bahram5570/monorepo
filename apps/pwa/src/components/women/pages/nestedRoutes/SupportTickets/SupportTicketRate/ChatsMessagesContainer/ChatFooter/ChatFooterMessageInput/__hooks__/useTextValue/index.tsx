import { useState } from 'react';

import useApi from '@hooks/useApi';
import { useParams } from 'next/navigation';

import useUpdateChatReactQuery from '../useUpdateChatReactQuery';

const useTextValue = () => {
  const { ticketId } = useParams();
  const [text, setText] = useState('');
  const { upgateHandler } = useUpdateChatReactQuery();

  const textHandler = (v: string) => {
    setText(v);
  };

  const successHandler = () => {
    upgateHandler({ text, fileName: '' });
    setText('');
  };

  const { callApi, isLoading: textLoading } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `support/ticket/${ticketId}`,
  });

  const submitTextHandler = () => {
    const value = text.trim();

    if (value && !textLoading) {
      callApi({ text, fileName: '' });
    }
  };

  return { text, textHandler, submitTextHandler, textLoading };
};

export default useTextValue;
