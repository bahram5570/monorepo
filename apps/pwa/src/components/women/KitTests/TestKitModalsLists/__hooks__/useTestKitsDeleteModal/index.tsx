import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { OpenDeleteModalHandlerTypes } from './types';

const useTestKitsDeleteModal = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const openDeleteModalHandler: OpenDeleteModalHandlerTypes = (v) => {
    pageNavigationHandler({ showProgressBar: true, id: v.createTime });
    newQueryParamsHandler({ [MODALS.TEST_KITS_LIST_DELETE]: JSON.stringify(v) });
  };

  return { openDeleteModalHandler };
};

export default useTestKitsDeleteModal;
