import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

const useNameSelectorFilterModals = (modalQueryName: string) => {
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isOpenHandler = () => {
    newQueryParamsHandler({ [modalQueryName]: 'true' });
    pageNavigationHandler({ id: modalQueryName, showProgressBar: false });
  };

  const isOpen = getQueryParams(modalQueryName) !== null;
  const isLoading = pageNavigationLoading === modalQueryName;

  return { isOpen, isOpenHandler, isLoading };
};

export default useNameSelectorFilterModals;
