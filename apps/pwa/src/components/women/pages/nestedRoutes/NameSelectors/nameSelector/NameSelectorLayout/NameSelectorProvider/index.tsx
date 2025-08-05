'use client';

import { createContext, useEffect, useState } from 'react';

import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import NameSelectorHeading from '../NameSelectorHeading';
import NameSelectorTabs from '../NameSelectorTabs';
import { NAME_SELECTOR_TABINDEX_QUERY_NAME } from '../constants';
import { NameSelectorTabsEnum } from '../enum';
import useNameSelectorApplyFilters from './__hooks__/useNameSelectorApplyFilters';
import {
  NameSelectorContextTypes,
  NameSelectorProviderAllFiltersTypes,
  NameSelectorProviderDataTypes,
  NameSelectorProviderFavoriteFiltersTypes,
  NameSelectorProviderTypes,
  NameSelectorResetFiltersTypes,
  NameSelectorTabHandlerTypes,
  NameSelectorTabsContextTypes,
} from './types';

const initialFavorite = { paneNo: 0 };
const initialAll = { paneNo: 0, styles: [], gender: SelectNameGenderEnum.None };

export const NameSelectorContext = createContext<NameSelectorContextTypes>({
  data: null,
  setData: () => {},

  allFilters: initialAll,
  setAllFilters: () => {},

  favoriteFilters: initialFavorite,
  setFavoriteFilters: () => {},

  applyFilters: false,
  applyFiltersHandler: () => {},

  resetFiltersHandler: () => {},
});

export const NameSelectorTabsContext = createContext<NameSelectorTabsContextTypes>({
  tabHandler: () => {},
  tab: NameSelectorTabsEnum.Suggestion,
});

const NameSelectorProvider = ({ children, initialData }: NameSelectorProviderTypes) => {
  const { applyFilters, applyFiltersHandler } = useNameSelectorApplyFilters();
  const [data, setData] = useState<NameSelectorProviderDataTypes>(initialData);
  const [allFilters, setAllFilters] = useState<NameSelectorProviderAllFiltersTypes>(initialAll);
  const [favoriteFilters, setFavoriteFilters] = useState<NameSelectorProviderFavoriteFiltersTypes>(initialFavorite);

  const { getQueryParams } = useQueryParamsHandler();
  const [tab, setTab] = useState(NameSelectorTabsEnum.All);

  const initialTab = getQueryParams(NAME_SELECTOR_TABINDEX_QUERY_NAME) as null | NameSelectorTabsEnum;

  useEffect(() => {
    if (initialTab !== null) {
      setTab(+initialTab);
    }
  }, [initialTab]);

  const tabHandler: NameSelectorTabHandlerTypes = (v) => {
    setTab(v);
  };

  const resetFiltersHandler = (v: NameSelectorResetFiltersTypes) => {
    let currentFilters = { ...allFilters };

    switch (v) {
      case 'gender':
        currentFilters.gender = SelectNameGenderEnum.None;
        break;

      case 'styles':
        currentFilters.styles = [];
        break;

      default:
        currentFilters = initialAll;
        break;
    }

    setAllFilters(currentFilters);
    applyFiltersHandler();
  };

  return (
    <NameSelectorContext.Provider
      value={{
        data,
        setData,

        allFilters,
        setAllFilters,

        favoriteFilters,
        setFavoriteFilters,

        applyFilters,
        applyFiltersHandler,

        resetFiltersHandler,
      }}
    >
      <NameSelectorTabsContext.Provider value={{ tab, tabHandler }}>
        <NameSelectorHeading description={data.description} />

        <div className="w-full">
          <NameSelectorTabs />

          <>{children}</>
        </div>
      </NameSelectorTabsContext.Provider>
    </NameSelectorContext.Provider>
  );
};

export default NameSelectorProvider;
