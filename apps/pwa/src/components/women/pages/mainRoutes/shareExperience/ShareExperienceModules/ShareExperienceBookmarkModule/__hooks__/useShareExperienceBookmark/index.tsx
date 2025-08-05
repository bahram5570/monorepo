import { useState } from 'react';

import useApi from '@hooks/useApi';

import { UseShareExperienceBookmarkProps } from './types';

const useShareExperienceBookmark = (props: UseShareExperienceBookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

  const api = `shareeexperience/v3/experience/${props.id}/bookmark`;

  const { callApi: callPostApi } = useApi({ api, method: 'POST' });
  const { callApi: callDeleteApi } = useApi({ api, method: 'DELETE' });

  const toggleBookmarkHandler = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      callDeleteApi({});
    } else {
      setIsBookmarked(true);
      callPostApi({});
    }
  };

  return { isBookmarked, toggleBookmarkHandler };
};

export default useShareExperienceBookmark;
