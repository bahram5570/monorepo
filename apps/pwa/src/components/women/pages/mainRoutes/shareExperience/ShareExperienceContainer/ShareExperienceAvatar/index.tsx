import CustomImage from '@components/ui/CustomImage';
import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ShareExperienceAvatarProps } from './types';

const ShareExperienceAvatar = ({ profile }: ShareExperienceAvatarProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const selectHandler = () => {
    pageNavigationHandler({ id: profile.userId, showProgressBar: true });

    const paramsData = JSON.stringify({ id: profile.userId, dummyData: Math.random() });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: paramsData });
  };

  return (
    <div
      className="w-[100dvw] fixed top-7 left-0 right-6 bottom-0 flex justify-end mx-auto pr-4 pb-[100px] pointer-events-none z-40"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="h-fit pointer-events-auto" onClick={selectHandler}>
        <CustomImage src={profile.avatarImage} width={48} className="rounded-full" />
      </div>
    </div>
  );
};

export default ShareExperienceAvatar;
