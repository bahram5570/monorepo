import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

const useSelectedTest = () => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = (i: number) => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'ovulationHistoryCardDetails',
      linkTo: `/protected/ovulationHistoryCardViewAll/${i}`,
    });
  };

  return { linkToHandler };
};

export default useSelectedTest;
