import { useEffect, useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { MODAL_QUERY_NAME } from '../../constants';
import { UseModalStatusProps } from './types';

const useModalStatus = ({ isOpen, isSlidingMode }: UseModalStatusProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const [isSlidingModeTrue, setIsSlidingModeTrue] = useState(isSlidingMode);

  const isModalOpen = typeof isOpen === 'undefined' ? getQueryParams(MODAL_QUERY_NAME) !== null : isOpen;

  useEffect(() => {
    if (isModalOpen) {
      setIsSlidingModeTrue(isSlidingMode);
    }
  }, [isModalOpen, isSlidingMode]);

  return { isModalOpen, isSlidingModeTrue };
};

export default useModalStatus;
