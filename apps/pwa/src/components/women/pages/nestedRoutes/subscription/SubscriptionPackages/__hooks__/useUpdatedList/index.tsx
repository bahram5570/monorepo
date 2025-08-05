import { UseUpdatedListProps } from './types';

const useUpdatedList = ({ packages, showAll, visibleCount }: UseUpdatedListProps) => {
  const updatedList = showAll ? packages : packages.slice(0, visibleCount);

  return { updatedList };
};

export default useUpdatedList;
