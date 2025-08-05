import SaveEmptyIcon from '@assets/icons/saveEmpty.svg';
import SaveFillIcon from '@assets/icons/saveFill.svg';

import useTheme from '@hooks/useTheme';

import useShareExperienceBookmark from './__hooks__/useShareExperienceBookmark';
import { ShareExperienceBookmarkModuleProps } from './types';

const ShareExperienceBookmarkModule = (props: ShareExperienceBookmarkModuleProps) => {
  const { colors } = useTheme();
  const { isBookmarked, toggleBookmarkHandler } = useShareExperienceBookmark(props);

  return (
    <div className="w-10 flex justify-center" onClick={toggleBookmarkHandler}>
      {isBookmarked ? (
        <SaveFillIcon className="w-5" style={{ fill: colors.Surface_InverseSurface }} />
      ) : (
        <SaveEmptyIcon className="w-5" style={{ stroke: colors.Surface_InverseSurface }} />
      )}
    </div>
  );
};

export default ShareExperienceBookmarkModule;
