import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceChangeAvatarModalContainer from './ShareExperienceChangeAvatarModalContainer';
import { QueryDataShareExperienceChangeAvatarModal } from './type';

const ShareExperienceChangeAvatarModal = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME) !== null;

  const queryParams = getQueryParams(SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME);
  const queryData =
    queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceChangeAvatarModal);

  return (
    <CustomModal isSlidingMode={true} isOpen={isOpen} zIndex={76}>
      <>{isOpen && <ShareExperienceChangeAvatarModalContainer username={queryData?.username} id={queryData?.id} />}</>
    </CustomModal>
  );
};

export default ShareExperienceChangeAvatarModal;
