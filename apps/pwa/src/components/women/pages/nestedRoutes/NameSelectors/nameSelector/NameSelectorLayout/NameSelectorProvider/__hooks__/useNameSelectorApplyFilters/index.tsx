import { useEffect, useState } from 'react';

const useNameSelectorApplyFilters = () => {
  const [applyFilters, setApplyFilters] = useState(false);

  const applyFiltersHandler = () => {
    setApplyFilters(true);
  };

  useEffect(() => {
    if (applyFilters) {
      setApplyFilters(false);
    }
  }, [applyFilters]);

  return { applyFilters, applyFiltersHandler };
};

export default useNameSelectorApplyFilters;
