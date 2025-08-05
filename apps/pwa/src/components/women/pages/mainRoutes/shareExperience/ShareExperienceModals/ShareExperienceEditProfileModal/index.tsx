import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceEditProfileModalContainer from './ShareExperienceEditProfileModalContainer';
import { QueryDataShareExperienceEditProfileModal } from './type';

const ShareExperienceEditProfileModal = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME) !== null;
  const queryParams = getQueryParams(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME);
  const queryData = queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceEditProfileModal);

  return (
    <CustomModal isSlidingMode={false} isOpen={isOpen} isFullScreen>
      <>{isOpen && <ShareExperienceEditProfileModalContainer id={queryData?.id} />}</>
    </CustomModal>
  );
};

export default ShareExperienceEditProfileModal;
