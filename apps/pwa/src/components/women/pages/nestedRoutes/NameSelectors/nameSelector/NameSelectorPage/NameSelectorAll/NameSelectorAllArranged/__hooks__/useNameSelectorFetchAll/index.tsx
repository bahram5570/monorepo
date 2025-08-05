import { useEffect, useState } from 'react';

import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import useApi from '@hooks/useApi';

import useNameSelectorData from '../../../../../__hooks__/useNameSelectorData';
import { NameSelectorApiHandlerTypes, NameSelectorApiInfoTypes, NameSelectorFetchAllResponseTypes } from './types';

let queryKeyCount = 0;

const useNameSelectorFetchAll = () => {
  const [apiInfo, setApiInfo] = useState<NameSelectorApiInfoTypes>(null);
  const { data, setData, allFilters, setAllFilters, applyFilters } = useNameSelectorData();

  const successHandler = (v: NameSelectorFetchAllResponseTypes) => {
    if (data) {
      const copyData = { ...data };
      copyData.allTotalCount = v.totalcount;

      switch (apiInfo?.type) {
        case 'filters':
          copyData.all = [...v.items];
          setAllFilters({ ...allFilters, paneNo: 0 });
          break;

        case 'pagination':
          copyData.all = [...copyData.all, ...v.items];
          setAllFilters({ ...allFilters, paneNo: allFilters.paneNo + 1 });
          break;
      }

      setData(copyData);
      setApiInfo(null);
      queryKeyCount++;
    }
  };

  const errorHandler = () => {
    setApiInfo(null);
  };

  const { callApi, isLoading } = useApi({
    method: 'GET',
    fetchOnMount: false,
    onError: errorHandler,
    api: apiInfo?.url || '',
    onSuccess: successHandler,
    queryKey: [`${apiInfo?.url || ''}-${queryKeyCount}`],
  });

  const apiHandler: NameSelectorApiHandlerTypes = (type) => {
    if (isLoading) {
      return;
    }

    const pageSize = data?.pageSize || 30;
    const gender = allFilters.gender;
    const styles = allFilters.styles;
    let pageNo = 0;

    if (data && type === 'pagination') {
      if ((allFilters.paneNo + 1) * pageSize >= data.allTotalCount) {
        return;
      }
    }

    switch (type) {
      case 'filters':
        pageNo = 0;
        break;

      case 'pagination':
        pageNo = allFilters.paneNo + 1;
        break;
    }

    let url = `feature/babyname/all?pageSize=${pageSize}&pageNo=${pageNo}`;

    if (gender !== SelectNameGenderEnum.None) {
      url = `${url}&gender=${gender}`;
    }

    if (styles.length > 0) {
      url = `${url}&styles=${styles}`;
    }

    setApiInfo({ url, type });
  };

  const paginationHandler = () => {
    apiHandler('pagination');
  };

  useEffect(() => {
    if (applyFilters) {
      apiHandler('filters');
    }
  }, [applyFilters]);

  useEffect(() => {
    if (apiInfo) {
      callApi();
    }
  }, [apiInfo]);

  return { paginationHandler, isLoading };
};

export default useNameSelectorFetchAll;
