import ArrowIcon from '@assets/icons/arrowElbowDown.svg';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { NewReplyQueriesTypes } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceNewReplyModal/types';
import { SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { ReplyBtnProps } from './types';

const ReplyBtn = ({ avatar, name, shareId, commentId, userId }: ReplyBtnProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = `ReplyBtn ${shareId} ${commentId} ${userId}`;
  const isLoading = pageNavigationLoading === loadingId;

  const clickHandler = () => {
    if (!isLoading) {
      const queries: NewReplyQueriesTypes = { name, avatar, type: 'reply', shareId, commentId, userId };
      const queryData = JSON.stringify(queries);

      newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME]: queryData });
      pageNavigationHandler({
        showProgressBar: false,
        id: loadingId,
      });
    }
  };

  return (
    <>
      <div
        onClick={clickHandler}
        className="relative flex items-center justify-center gap-[2px] w-[72px] h-[30px] rounded-full py-1"
        style={{
          backgroundColor: colors.Neutral_Surface,
        }}
      >
        <Typography scale="Lable" size="Small" color="Neutral_OnSurface" style={{ opacity: isLoading ? 0 : 1 }}>
          پاسخ
        </Typography>

        <ArrowIcon className="w-4" style={{ fill: colors.Surface_Outline, opacity: isLoading ? 0 : 1 }} />

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
            <Spinner color="outline" width={16} />
          </div>
        )}
      </div>
    </>
  );
};

export default ReplyBtn;
