import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useWidgetActions from '@hooks/useWidgetActions';

import { multipleStepRoutes } from '../../../multipleStepRoutes';

const useSubmit = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const nextrout = getQueryParams('nextrout');
  const { actionHandler } = useWidgetActions();

  const onSuccessHandler = () => {
    actionHandler(multipleStepRoutes(nextrout));
  };

  const { callApi, isLoading } = useApi({
    api: 'profile/woman/info/setheight',
    method: 'PUT',
    onSuccess: onSuccessHandler,
  });

  const submitHandler = (height: number) => {
    const payload = {
      height,
    };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
