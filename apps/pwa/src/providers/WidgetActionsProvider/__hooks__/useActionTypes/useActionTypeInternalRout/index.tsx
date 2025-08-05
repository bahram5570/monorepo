import { actionRouteConverter } from './__utils__/actionRouteConverter';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { CallInternalRoutTypes } from './types';

const useActionTypeInternalRout = (onActionComplete: () => void) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const callInternalRout: CallInternalRoutTypes = ({ actionInternal }) => {
    pageNavigationHandler({
      id: Math.random(),
      showProgressBar: true,
      linkTo: actionRouteConverter(actionInternal),
    });
  };

  return { callInternalRout };
};

export default useActionTypeInternalRout;
