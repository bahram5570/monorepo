import { useEffect, useState } from 'react';

import { queryDataHandler } from './__utils__';

import { MODAL_DEFAULT_Z_INDEX } from '@components/ui/CustomModal/constants';
import { SHARE_EXPERIENCE_ORDER_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import { useSearchParams } from 'next/navigation';

import { ListTypes, ShareExperienceOrdersListTypes } from './types';

const useShareExperienceOrders = () => {
  const searchParams = useSearchParams();
  const [shareExperienceOrdersList, setShareExperienceOrdersList] = useState<ShareExperienceOrdersListTypes>({});

  const queryParams = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    const queryParamsList = Object.entries(queryParams);
    let result: ShareExperienceOrdersListTypes = {};
    let list: ListTypes = [];

    queryParamsList.forEach((item) => {
      const queryData = queryDataHandler(item[1]);

      if (queryData) {
        const orderNumber = queryData[SHARE_EXPERIENCE_ORDER_QUERY_NAME];
        list.push({ queryName: item[0], orderNumber });
      }
    });

    list = list.sort((a, b) => a.orderNumber - b.orderNumber);

    list.forEach((item, index) => {
      result = { ...result, [item.queryName]: MODAL_DEFAULT_Z_INDEX + index };
    });

    setShareExperienceOrdersList(result);
  }, [JSON.stringify(queryParams)]);

  return { shareExperienceOrdersList };
};

export default useShareExperienceOrders;
