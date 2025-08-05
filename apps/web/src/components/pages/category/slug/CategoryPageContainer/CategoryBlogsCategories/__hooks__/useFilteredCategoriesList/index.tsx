import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';

import { FilteredCategoriesListTypes } from './types';

const useFilteredCategoriesList = (list: FilteredCategoriesListTypes) => {
  const pathname = usePathname();
  const [filteredCategoriesList, setFilteredCategoriesList] = useState<FilteredCategoriesListTypes>([]);

  useEffect(() => {
    const slug = pathname.split('/')[2];
    const result: FilteredCategoriesListTypes = [];

    list.forEach((item) => item.slug !== slug && result.push(item));
    setFilteredCategoriesList(result);
  }, []);

  return { filteredCategoriesList };
};

export default useFilteredCategoriesList;
