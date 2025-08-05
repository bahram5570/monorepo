import { useEffect } from 'react';

import { ACTIVATION_PAYLOAD_VALUES } from '@constants/activation.constants';

import { UseClearCurrentPagePayloadProps } from './types';

const useClearCurrentPagePayload = ({ payloadHandler, payloadKeys }: UseClearCurrentPagePayloadProps) => {
  useEffect(() => {
    let resetValues = {};

    payloadKeys.forEach((key) => {
      const exceptionList = ['status', 'periodStatus'];

      if (!exceptionList.includes(key)) {
        resetValues = { ...resetValues, [key]: ACTIVATION_PAYLOAD_VALUES[key] };
      }
    });

    payloadHandler(resetValues);
  }, []);
};

export default useClearCurrentPagePayload;
