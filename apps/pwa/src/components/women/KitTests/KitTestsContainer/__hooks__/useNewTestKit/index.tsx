import { useState } from 'react';

import { currentDate } from '@utils/dates';

import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useCustomToast from '@hooks/useCustomToast';

import { NewTestResponseTypes, UseNewTestKitProps } from './types';

const useNewTestKit = ({ moduleType, gregorianDate, onSuccess }: UseNewTestKitProps) => {
  const { onToast } = useCustomToast();
  const { refetchQuery } = useCustomReactQuery();
  const [resetKey, setResetKey] = useState(Math.random());

  const successHandler = (v: NewTestResponseTypes) => {
    if (v.valid) {
      setResetKey(Math.random());
      refetchQuery({ queryKey: ['signsInfoCalendar'] });

      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (moduleType === KitTestModuleTypeEnums.Ovulation) {
        onToast({ message: 'فقط یک بار در روز امکان ثبت تست تخمک‌گذاری وجود داره!' });
      }
    }
  };

  let api = '';
  switch (moduleType) {
    case KitTestModuleTypeEnums.Ovulation:
      api = 'info/woman/ovulation';
      break;
    case KitTestModuleTypeEnums.BabyCheck:
      api = 'info/woman/babycheck/add';
      break;
  }

  const { callApi, isLoading } = useApi({ api, method: 'POST', onSuccess: successHandler });

  const submitHandler = (v: any) => {
    const { time } = currentDate();
    callApi({ ...v, date: `${gregorianDate} ${time}` });
  };

  return { submitHandler, isLoading, resetKey };
};

export default useNewTestKit;
