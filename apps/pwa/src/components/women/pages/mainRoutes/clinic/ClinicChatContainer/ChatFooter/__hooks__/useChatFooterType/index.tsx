import { useEffect, useState } from 'react';

import { ClinicStateEnums } from '../../../../enumbs';
import { ChatFooterTypeTypes, UseChatFooterTypeProps } from './types';

const useChatFooterType = ({ isRate, state }: UseChatFooterTypeProps) => {
  const [footerType, setFooterType] = useState<ChatFooterTypeTypes>(null);

  useEffect(() => {
    if (!isRate && state === ClinicStateEnums.Closed) {
      setFooterType('rating');
    } else if (isRate && state === ClinicStateEnums.Closed) {
      setFooterType('rated');
    } else if (state === ClinicStateEnums.Rejected || state === ClinicStateEnums.rejectBySuppoer) {
      setFooterType('banner');
    } else {
      setFooterType('chatMessageInput');
    }
  }, [isRate, state]);

  return { footerType };
};

export default useChatFooterType;
