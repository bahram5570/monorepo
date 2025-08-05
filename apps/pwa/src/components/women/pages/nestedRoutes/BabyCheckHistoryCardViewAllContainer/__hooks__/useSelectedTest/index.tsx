import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

const useSelectedTest = () => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = (i: number) => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'babyCheckHistoryCardDetails',
      linkTo: `/protected/babyCheckHistoryCardViewAll/${i}`,
    });
  };

  return { linkToHandler };
};

export default useSelectedTest;
