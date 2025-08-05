import { useEffect, useState } from 'react';

import BookmarkEmptyIcon from '@assets/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/icons/saveFill.svg';

import useApi from '@hooks/useApi';
import useTheme from '@hooks/useTheme';

import { ApiInfoTypes, WidgetHintCardBookmarkProps } from './types';

const WidgetHintCardBookmark = (props: WidgetHintCardBookmarkProps) => {
  const { colors } = useTheme();
  const [apiInfo, setApiInfo] = useState<ApiInfoTypes>(null);
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

  const clickHandler = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      setApiInfo({ api: 'archive/hint/bookmark', payload: { id: props.id }, method: 'DELETE' });
    } else {
      setIsBookmarked(true);
      setApiInfo({ api: 'archive/hint/bookmark', payload: { id: props.id }, method: 'POST' });
    }
  };

  const { callApi } = useApi({ api: apiInfo?.api || '', method: apiInfo?.method || 'DELETE' });

  useEffect(() => {
    if (apiInfo) {
      setApiInfo(null);
      callApi({ ...apiInfo.payload });
    }
  }, [apiInfo]);

  return (
    <div
      onClick={clickHandler}
      className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] cursor-pointer"
    >
      {!isBookmarked && <BookmarkEmptyIcon className="w-5 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />}
      {isBookmarked && <BookmarkFillIcon className="w-5 h-auto" style={{ fill: colors.Surface_InverseSurface }} />}
    </div>
  );
};

export default WidgetHintCardBookmark;
