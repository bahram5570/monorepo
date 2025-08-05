import { useState } from 'react';

import useApi from '@hooks/useApi';

import useUpdateChatReactQuery from '../useUpdateChatReactQuery';

const useTextValue = (ticketId: string) => {
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
    method: 'PUT',
    onSuccess: successHandler,
    api: `advice/ticket/${ticketId}`,
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
