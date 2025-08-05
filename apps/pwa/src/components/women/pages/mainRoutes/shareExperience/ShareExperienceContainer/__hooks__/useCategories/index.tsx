import { useEffect, useState } from 'react';

import { CategoriesListTypes, SelectedCategoryIdHandlerTypes } from './types';

const useCategories = (data: CategoriesListTypes) => {
  const [categories, setCategories] = useState<null | CategoriesListTypes>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<null | string>(null);

  useEffect(() => {
    if (data) {
      setCategories(data);

      const initialSelected = data.find((item) => item.isSelected);

      if (initialSelected) {
        setSelectedCategoryId(initialSelected.id);
      }
    }
  }, [data]);

  const selectedCategoryIdHandler: SelectedCategoryIdHandlerTypes = (id) => {
    setSelectedCategoryId(id);
  };

  return { categories, selectedCategoryId, selectedCategoryIdHandler };
};

export default useCategories;
