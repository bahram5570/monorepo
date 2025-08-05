import { useState } from 'react';

import { MESSAGE_PREGNANCY_CHECKUP_RESULT } from '@components/women/pages/nestedRoutes/PregnancyCheckup/constant';
import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { PregnancyQuestionTypeEnum } from '../../../enum';
import { ResponsePropsType, SubmitHandlerPropsType } from './type';

const useSubmit = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const pregnancyWeek = getQueryParams('week');
  const [api, setApi] = useState<string>('');
  const router = useRouter();

  const successHandler = (v: ResponsePropsType) => {
    sessionStorage.setItem(MESSAGE_PREGNANCY_CHECKUP_RESULT, JSON.stringify(v));
    router.push('/protected/pregnancyCheckup');
    // router.back();
    // router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    api: api,
    onSuccess: (v: ResponsePropsType) => successHandler(v),
  });

  const submitHandler = ({ selectedValues, type }: SubmitHandlerPropsType) => {
    switch (type) {
      case PregnancyQuestionTypeEnum.HtnWeek8:
        setApi('info/pregnancy/checkup/set/bloodpressure');
        break;
      case PregnancyQuestionTypeEnum.htnWeek24:
        setApi('info/pregnancy/checkup/set/bloodpressure');
        break;
      case PregnancyQuestionTypeEnum.ScreeningWeek11:
        setApi('info/pregnancy/checkup/set/screentest');
        break;
      case PregnancyQuestionTypeEnum.DiabetesWeek10:
        setApi('info/pregnancy/checkup/set/breakfastdiabet');
        break;
      case PregnancyQuestionTypeEnum.DiabetesWeek24:
        setApi('info/pregnancy/checkup/set/aftersugerdiabet');
        break;
      case PregnancyQuestionTypeEnum.DiabetesWeek8:
        setApi('info/pregnancy/checkup/set/primerydiabet');
        break;

      default:
        break;
    }

    const payload = {
      week: Number(pregnancyWeek),
      ...selectedValues,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
