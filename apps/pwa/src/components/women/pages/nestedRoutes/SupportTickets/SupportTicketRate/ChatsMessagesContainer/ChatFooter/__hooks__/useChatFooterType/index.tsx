import { useEffect, useState } from 'react';

import { ChatFooterTypeTypes, UseChatFooterTypeProps } from './types';

const useChatFooterType = ({ isRate, status }: UseChatFooterTypeProps) => {
  const [footerType, setFooterType] = useState<ChatFooterTypeTypes>(null);

  useEffect(() => {
    if (!isRate && status === 1) {
      setFooterType('rating');
    } else if (isRate && status === 1) {
      setFooterType('rated');
    } else {
      setFooterType('chatMessageInput');
    }
  }, [isRate, status]);

  return { footerType };
};

export default useChatFooterType;
