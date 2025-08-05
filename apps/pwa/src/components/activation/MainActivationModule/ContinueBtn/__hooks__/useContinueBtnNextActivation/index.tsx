import { useState } from 'react';

import useCustomToast from '@hooks/useCustomToast';
import useSectionSaver from '@providers/__activation__/ActivationProvider/__hooks__/useSectionSaver';
import { useRouter } from 'next/navigation';

import { NextActivationHandlerTypes } from './types';

const useContinueBtnNextActivation = () => {
  const router = useRouter();
  const { onToast } = useCustomToast();
  const { sectionSaverHandler } = useSectionSaver();
  const [resetKey, setResetKey] = useState(Math.random().toString());

  const nextActivationHandler: NextActivationHandlerTypes = (v) => {
    if (v.invalidMessage) {
      onToast({ message: v.invalidMessage, type: 'error' });
      setResetKey(Math.random().toString());
      return;
    }

    if (typeof v.nextActivation === 'string' && v.nextActivation.length > 0) {
      sectionSaverHandler(v.nextActivation);
      router.push(v.nextActivation);
    } else {
      if (v.onRegister) {
        v.onRegister();
      }
    }
  };

  return { nextActivationHandler, resetKey };
};

export default useContinueBtnNextActivation;
