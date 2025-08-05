import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

const usePopupModal = (hasPopup: boolean) => {
  const { getQueryParams } = useQueryParamsHandler();

  const hasQuery = getQueryParams(MODALS.WIDGET_POPUP) !== null;
  const isPopupModalOpen = hasQuery && hasPopup;

  return { isPopupModalOpen };
};

export default usePopupModal;
