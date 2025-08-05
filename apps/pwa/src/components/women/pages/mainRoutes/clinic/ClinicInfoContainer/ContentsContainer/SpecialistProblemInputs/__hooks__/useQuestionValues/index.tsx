import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@utils/system';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { SPECIALIST_PAYMENT_QUERY_NAME } from '../../../constants';
import { QuestionValuesHandlerTypes, QuestionValuesTypes } from './types';

const useQuestionValues = () => {
  const [questionValues, setQuestionValues] = useState<QuestionValuesTypes | null>(null);
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const firstTimeRef = useRef<{ firstTime: boolean }>({ firstTime: isDevelopeMode() });
  const router = useRouter();

  const questionValuesHandler: QuestionValuesHandlerTypes = (v) => {
    newQueryParamsHandler({ [SPECIALIST_PAYMENT_QUERY_NAME]: 'true' });
    setQuestionValues(v);
  };

  useEffect(() => {
    if (firstTimeRef.current.firstTime) {
      firstTimeRef.current.firstTime = false;
    } else {
      const isOpen = getQueryParams(SPECIALIST_PAYMENT_QUERY_NAME) !== null;

      if (isOpen) {
        router.back();
      }
    }
  }, []);

  return { questionValues, questionValuesHandler };
};

export default useQuestionValues;
