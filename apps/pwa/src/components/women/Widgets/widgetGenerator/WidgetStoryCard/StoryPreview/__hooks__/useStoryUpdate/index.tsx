import { useEffect } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { OriginalStoryDataTypes } from '../../../__hooks__/useStoryCardData/types';
import { STORY_CARD_DATA_NAME } from '../../../constants';
import { UseStoryUpdateProps } from './types';
import useIsBookmarked from './useIsBookmarked';
import useIsView from './useIsView';

const useStoryUpdate = ({ isOpen, list }: UseStoryUpdateProps) => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { isViewList, viewStoryHandler, resetIsViewHandler } = useIsView({ list, isOpen });
  const { isBookmarkedList, isBookmarkedHandler, resetIsBookmarkedHandler } = useIsBookmarked({ list, isOpen });

  useEffect(() => {
    if (!isOpen && (isBookmarkedList || isViewList)) {
      const storyCardData = getQuery<OriginalStoryDataTypes>({ queryKey: [STORY_CARD_DATA_NAME] });

      if (storyCardData) {
        const storyItems = storyCardData.list;

        if (storyItems) {
          storyItems.forEach((list) => {
            // # Bookmark
            if (isBookmarkedList) {
              if (isBookmarkedList.includes(list.id)) {
                list.isBookmarked = true;
              } else {
                list.isBookmarked = false;
              }
            }

            // # Is viewed

            list.stories.forEach((story) => {
              if (isViewList) {
                if (isViewList.includes(story.id)) {
                  story.isViewed = true;
                }
              }
            });

            const isStoryListViewed = list.isViewed || list.stories.every((item) => item.isViewed === true);

            if (isStoryListViewed) {
              list.isViewed = true;
            }
          });
        }

        resetIsViewHandler();
        resetIsBookmarkedHandler();
        updateQuery({ queryKey: [STORY_CARD_DATA_NAME], payload: storyCardData });
      }
    }
  }, [isOpen, isBookmarkedList, isViewList]);

  return { viewStoryHandler, isBookmarkedHandler };
};

export default useStoryUpdate;
