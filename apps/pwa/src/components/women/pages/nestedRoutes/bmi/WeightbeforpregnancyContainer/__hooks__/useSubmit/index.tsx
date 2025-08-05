import { currentDate } from '@utils/dates';

import { multipleStepRoutes } from '@components/women/pages/nestedRoutes/bmi/multipleStepRoutes';
import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useWidgetActions from '@hooks/useWidgetActions';

const { gDate } = currentDate();

const useSubmit = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { actionHandler } = useWidgetActions();

  const onSuccessHandler = () => {
    const nextrout = getQueryParams('nextrout');
    actionHandler(multipleStepRoutes(nextrout));
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: onSuccessHandler,
    api: 'profile/woman/info/beforepregnancyweight',
  });

  const submitHandler = (weight: number) => {
    const payload = { date: gDate, weight };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
