import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceApproveModalsModule from '../../ShareExperienceModules/ShareExperienceApproveModalsModule';
import useShareExperienceFollow from './__hooks__/useShareExperienceFollow';

const ShareExperienceUnfollowModal = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME);
  const queryData = queryParams && JSON.parse(queryParams);
  const { followHandler, isFollowLoading } = useShareExperienceFollow(queryData?.experienceId);

  const applyHandler = () => {
    const userId = queryData?.userId;
    followHandler({ userId, isFollow: true });
  };

  return (
    <>
      <ShareExperienceApproveModalsModule
        description={queryData?.description}
        isOpen={queryParams !== null}
        isLoading={isFollowLoading}
        applyHandler={applyHandler}
        title="لغو دنبال کردن"
        applyButtonText="بله"
        cancelButtonText="خیر"
      />
    </>
  );
};

export default ShareExperienceUnfollowModal;
