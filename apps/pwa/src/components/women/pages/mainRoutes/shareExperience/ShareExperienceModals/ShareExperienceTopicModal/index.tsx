import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceTopicModalContainer from './ShareExperienceTopicModalContainer';
import { QueryDataShareExperienceTopicModal, ShareExperienceTopicModalProps } from './type';

const ShareExperienceTopicModal = ({ avatarImage }: ShareExperienceTopicModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME) !== null;

  const queryParams = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME);
  const queryData = queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceTopicModal);

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0 overflow-y-auto !px-0">
        <>{isOpen && <ShareExperienceTopicModalContainer topicId={queryData?.id} avatarImage={avatarImage} />}</>
      </CustomModal>
    </>
  );
};

export default ShareExperienceTopicModal;
