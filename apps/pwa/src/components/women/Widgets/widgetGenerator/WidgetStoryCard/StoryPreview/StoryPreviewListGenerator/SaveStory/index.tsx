import { useEffect, useState } from 'react';

import SaveEmptyIcon from '@assets/icons/saveEmpty.svg';
import SaveFillIcon from '@assets/icons/saveFill.svg';

import useTheme from '@hooks/useTheme';

import { SaveStoryProps } from './types';

const SaveStory = ({ selectHandler, isBookmarked }: SaveStoryProps) => {
  const { colors } = useTheme();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(isBookmarked);
  }, [isBookmarked]);

  const isSavedHandler = () => {
    selectHandler();
    setIsSaved((state) => !state);
  };

  return (
    <div
      className="absolute left-4 bottom-8 w-12 h-12 flex items-center justify-center cursor-pointer z-[30]"
      onClick={isSavedHandler}
    >
      {!isSaved && <SaveEmptyIcon className="w-6 h-auto" style={{ stroke: colors.White }} />}
      {isSaved && <SaveFillIcon className="w-6 h-auto" style={{ fill: colors.White }} />}
    </div>
  );
};

export default SaveStory;
