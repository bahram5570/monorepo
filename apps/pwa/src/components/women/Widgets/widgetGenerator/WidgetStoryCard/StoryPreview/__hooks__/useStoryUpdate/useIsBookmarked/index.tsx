import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';

import { ApiInfoTypes, IsBookmarkedHandlerTypes, IsBookmarkedListTypes, useIsBookmarkedProps } from './types';

const useIsBookmarked = ({ list, isOpen }: useIsBookmarkedProps) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [apiInfo, setApiInfo] = useState<ApiInfoTypes>(null);
  const [updateList, setUpdateList] = useState<IsBookmarkedListTypes>([]);

  useEffect(() => {
    if (isOpen) {
      const newList: IsBookmarkedListTypes = [];

      list.forEach((item) => {
        if (item.isBookmarked) {
          newList.push(item.id);
        }
      });

      setUpdateList(newList);
    }
  }, [list, isOpen]);

  const isBookmarkedHandler: IsBookmarkedHandlerTypes = (storyId) => {
    const isInList = updateList.includes(storyId);
    const newList: IsBookmarkedListTypes = [];

    if (isInList) {
      updateList.forEach((id) => id !== storyId && newList.push(id));
      setApiInfo({ api: `story/bookmark/${storyId}`, method: 'DELETE', payload: {} });
    } else {
      newList.push(...updateList, storyId);
      setApiInfo({ api: 'story/bookmark', method: 'POST', payload: { storyId } });
    }

    setIsUpdated(true);
    setUpdateList(newList);
  };

  const resetIsBookmarkedHandler = () => {
    setUpdateList([]);
    setIsUpdated(false);
  };

  const isBookmarkedList: IsBookmarkedListTypes | null = isUpdated ? updateList : null;

  //  # Call api
  const api = apiInfo?.api || '';
  const method = apiInfo?.method || 'POST';
  const { callApi } = useApi({ api, method });

  useEffect(() => {
    if (apiInfo) {
      setApiInfo(null);
      callApi(apiInfo.payload);
    }
  }, [apiInfo]);

  return { isBookmarkedList, isBookmarkedHandler, resetIsBookmarkedHandler };
};

export default useIsBookmarked;
