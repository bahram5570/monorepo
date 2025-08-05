import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceNewReplyModalContainer from './ShareExperienceNewReplyModalContainer';
import { NewReplyQueriesTypes } from './types';

const ShareExperienceNewReplyModal = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const queries = getQueryParams(SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME);
  const queriesData = queries === null ? null : (JSON.parse(queries) as NewReplyQueriesTypes);

  const isOpen = queriesData !== null;

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0" zIndex={75}>
        <>{isOpen && <ShareExperienceNewReplyModalContainer data={queriesData} />}</>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewReplyModal;
