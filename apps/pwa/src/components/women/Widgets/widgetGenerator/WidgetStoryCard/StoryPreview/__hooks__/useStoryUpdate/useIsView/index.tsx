import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';

import { IsViewListTypes, UseIsViewProps, ViewStoryHandlerTypes } from './types';

const useIsView = ({ list, isOpen }: UseIsViewProps) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [api, setApi] = useState<string | null>(null);
  const [updateList, setUpdateList] = useState<IsViewListTypes>([]);
  const [alreadyViewList, setAlreadyViewList] = useState<IsViewListTypes>([]);

  useEffect(() => {
    if (isOpen) {
      const newList: IsViewListTypes = [];

      list.forEach((story) => {
        story.stories.forEach((slide) => {
          if (slide.isViewed) {
            newList.push(slide.id);
          }
        });
      });

      setAlreadyViewList(newList);
    }
  }, [list, isOpen]);

  const viewStoryHandler: ViewStoryHandlerTypes = (slideId) => {
    const isInList = updateList.includes(slideId) || alreadyViewList.includes(slideId);
    const newList: IsViewListTypes = [...updateList];

    if (!isInList) {
      setIsUpdated(true);
      newList.push(slideId);
      setApi(`story/view/${slideId}`);
    }

    setUpdateList(newList);
  };

  const resetIsViewHandler = () => {
    setUpdateList([]);
    setIsUpdated(false);
    setAlreadyViewList([]);
  };

  const isViewList: IsViewListTypes | null = isUpdated ? updateList : null;

  //  # Call api
  const { callApi } = useApi({ api: api || '', method: 'POST' });

  useEffect(() => {
    if (api) {
      callApi({});

      setTimeout(() => {
        setApi(null);
      }, 0);
    }
  }, [api]);

  return { isViewList, viewStoryHandler, resetIsViewHandler };
};

export default useIsView;
