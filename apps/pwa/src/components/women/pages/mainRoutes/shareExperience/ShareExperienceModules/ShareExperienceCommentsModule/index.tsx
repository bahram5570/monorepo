import CommentsIcon from '@assets/icons/comment.svg';

import Typography from '@components/ui/Typography';
import {
  SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { ShareExperienceCommentsModuleProps } from './types';

const ShareExperienceCommentsModule = (props: ShareExperienceCommentsModuleProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = () => {
    if (!props.isSelf) {
      pageNavigationHandler({ id: props.id, showProgressBar: true });

      const paramsData = JSON.stringify({ id: props.id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME]: paramsData });
    }
  };

  return (
    <>
      <div onClick={clickHandler} className="flex items-center justify-center gap-1 w-10">
        <Typography scale="Body" size="Large" color="Surface_InverseSurface" className="!h-5">
          {props.commentCount.toString()}
        </Typography>

        <CommentsIcon className="w-5" style={{ fill: colors.Surface_InverseSurface }} />
      </div>
    </>
  );
};

export default ShareExperienceCommentsModule;
