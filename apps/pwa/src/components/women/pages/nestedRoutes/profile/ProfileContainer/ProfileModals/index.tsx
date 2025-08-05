import CustomModal from '@components/ui/CustomModal';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import UploadImageModal from '@components/women/pages/mainRoutes/partner/PartnerContainer/PartnerModals/UploadImageModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { PROFILE_MODAL_QUERY_NAME } from '../ProfileLinkList/constants';
import LogoutModal from './LogoutModal';
import { ProfileModalNameEnums } from './enum';

const ProfileModals = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const hasModal = getQueryParams(MODAL_QUERY_NAME) !== null;
  const profileQueryName = getQueryParams(PROFILE_MODAL_QUERY_NAME) as ProfileModalNameEnums;

  const isOpen = hasModal;

  return (
    <CustomModal isSlidingMode={profileQueryName === ProfileModalNameEnums.EditProfileImage} isOpen={isOpen}>
      <>{profileQueryName === ProfileModalNameEnums.Logout && <LogoutModal />}</>
      <>{profileQueryName === ProfileModalNameEnums.EditProfileImage && <UploadImageModal />}</>
    </CustomModal>
  );
};

export default ProfileModals;
