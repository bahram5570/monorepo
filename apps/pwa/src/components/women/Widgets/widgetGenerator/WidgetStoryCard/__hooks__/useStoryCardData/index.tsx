import { useEffect } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { STORY_CARD_DATA_NAME } from '../../constants';
import { OriginalStoryDataTypes } from './types';

const useStoryCardData = (originalStoryData: OriginalStoryDataTypes) => {
  const { getQuery, newQuery } = useCustomReactQuery([STORY_CARD_DATA_NAME]);

  useEffect(() => {
    newQuery({ queryKey: [STORY_CARD_DATA_NAME], payload: originalStoryData });
  }, [originalStoryData]);

  const data = getQuery<OriginalStoryDataTypes>({ queryKey: [STORY_CARD_DATA_NAME] });

  useEffect(() => {
    if (data) {
      data.list.sort((a, b) => {
        return (b.isViewed === false ? 1 : 0) - (a.isViewed === false ? 1 : 0);
      });
    }
  }, [data]);

  return { data };
};

export default useStoryCardData;
