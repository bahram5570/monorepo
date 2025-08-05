import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceDefultAvatarListModalContainer from './ShareExperienceDefultAvatarListModalContainer';
import { QueryDataShareExperienceDefultAvatarListModal } from './type';

const ShareExperienceDefultAvatarListModal = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME) !== null;

  const queryParams = getQueryParams(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME);
  const queryData =
    queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceDefultAvatarListModal);

  return (
    <CustomModal
      className=" !min-h-fit mt-32 !rounded-s-xl !rounded-e-xl !px-0"
      isSlidingMode={false}
      isOpen={isOpen}
      zIndex={77}
      isFullScreen
    >
      <>{isOpen && <ShareExperienceDefultAvatarListModalContainer id={queryData?.id} />}</>
    </CustomModal>
  );
};

export default ShareExperienceDefultAvatarListModal;
