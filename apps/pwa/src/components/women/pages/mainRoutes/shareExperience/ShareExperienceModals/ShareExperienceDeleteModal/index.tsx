import TrashIcon from '@assets/icons/trash.svg';

import { SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import ShareExperienceApproveModalsModule from '../../ShareExperienceModules/ShareExperienceApproveModalsModule';
import useCommentDelete from './__hooks__/useCommentDelete';
import useExperienceDelete from './__hooks__/useExperienceDelete';
import useReplyDelete from './__hooks__/useReplyDelete';
import { DELETE_MODAL_SCRIPTS } from './constants';
import { QueriesDataTypes } from './types';

const ShareExperienceDeleteModal = () => {
  const { colors } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();

  const { replyApplyHandler, isReplyLoading } = useReplyDelete();
  const { commentApplyHandler, isCommentLoading } = useCommentDelete();
  const { experienceApplyHandler, isExperienceLoading } = useExperienceDelete();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME);
  const queryData = queryParams === null ? null : (JSON.parse(queryParams) as QueriesDataTypes);

  const description = queryData ? DELETE_MODAL_SCRIPTS[queryData.type].description : '';
  const title = queryData ? DELETE_MODAL_SCRIPTS[queryData.type].title : '';

  const applyHandler = () => {
    if (queryData) {
      switch (queryData.type) {
        case 'experience':
          experienceApplyHandler(queryData.shareId);
          break;

        case 'comment':
          commentApplyHandler({ shareId: queryData.shareId, commentId: queryData.commentId });
          break;

        case 'reply':
          replyApplyHandler({ shareId: queryData.shareId, commentId: queryData.commentId, replyId: queryData.replyId });
          break;
      }
    }
  };

  const isLoading = isExperienceLoading || isCommentLoading || isReplyLoading;

  const Icon = (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-full"
      style={{ backgroundColor: colors.Error_ErrorContainer }}
    >
      <TrashIcon className="w-7" style={{ stroke: colors.Error_Error }} />
    </div>
  );

  return (
    <>
      <ShareExperienceApproveModalsModule
        isOpen={queryParams !== null}
        applyHandler={applyHandler}
        description={description}
        cancelButtonText="خیر"
        applyButtonText="بله"
        isLoading={isLoading}
        title={title}
        icon={Icon}
      />
    </>
  );
};

export default ShareExperienceDeleteModal;
