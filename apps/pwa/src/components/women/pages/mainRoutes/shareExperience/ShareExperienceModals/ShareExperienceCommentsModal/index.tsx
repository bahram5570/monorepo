import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceCommentsModalContainer from './ShareExperienceCommentsModalContainer';
import { ShareExperienceCommentsModalProps } from './types';

const ShareExperienceCommentsModal = (props: ShareExperienceCommentsModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME);
  const queryData = queryParams === null ? null : (JSON.parse(queryParams) as { id: string });
  const isOpen = queryData !== null;

  const zIndex = props.shareExperienceOrdersList?.[SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME];

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0 !px-0" zIndex={zIndex}>
        <>{isOpen && <ShareExperienceCommentsModalContainer id={queryData.id} />}</>
      </CustomModal>
    </>
  );
};

export default ShareExperienceCommentsModal;
