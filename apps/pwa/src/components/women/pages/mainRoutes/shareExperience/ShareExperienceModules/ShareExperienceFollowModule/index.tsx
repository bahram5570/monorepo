import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import useShareExperienceFollow from '../../ShareExperienceModals/ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import { ShareExperienceFollowModuleProps } from './types';

const ShareExperienceFollowModule = (props: ShareExperienceFollowModuleProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { followHandler, isFollowLoading } = useShareExperienceFollow(props.experienceId);
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = `ShareExperienceFollowModule ${props.userId}`;
  const isLoading = isFollowLoading || pageNavigationLoading === loadingId;

  const clickHandler = () => {
    if (!isLoading) {
      if (props.isFollow) {
        const description = `مطمئنی دیگه نمی‌خوای تجربه‌های ${props.name} رو ببینی؟`;
        const queryData = JSON.stringify({
          description,
          experienceId: props.experienceId,
          userId: props.userId,
          dummyData: Math.random(),
        });
        newQueryParamsHandler({ [SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME]: queryData });

        pageNavigationHandler({
          showProgressBar: false,
          id: loadingId,
        });
      } else {
        followHandler({ userId: props.userId, isFollow: false });
      }
    }
  };

  return (
    <>
      <div
        onClick={clickHandler}
        className="relative flex justify-center  h-fit border-[1px] rounded-full py-1 cursor-pointer px-3"
        style={{
          borderColor: colors.Neutral_Surface,
          backgroundColor: props.isFollow ? colors.Neutral_Surface : colors.White,
        }}
      >
        <Typography
          scale="Body"
          size="Medium"
          color="Neutral_OnSurface"
          style={{ opacity: isLoading ? 0 : 1 }}
          className="w-full"
        >
          {props.isFollow ? 'دنبال شده' : 'دنبال کردن'}
        </Typography>

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
            <Spinner color="outline" width={16} />
          </div>
        )}
      </div>
    </>
  );
};

export default ShareExperienceFollowModule;
