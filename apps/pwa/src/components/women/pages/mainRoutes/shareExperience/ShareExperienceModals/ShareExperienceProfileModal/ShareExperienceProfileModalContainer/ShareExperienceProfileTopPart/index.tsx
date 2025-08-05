import EditIcon from '@assets/icons/Pen 2.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import ShareExperienceAvatarModule from '../../../../ShareExperienceModules/ShareExperienceAvatarModule';
import useShareExperienceFollow from '../../../ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import ProfileInfo from './ProfileInfo';
import { ShareExperienceProfileTopPartPropsType } from './type';

const ShareExperienceProfileTopPart = ({
  followCount,
  storyCount,
  isFollow,
  profile,
  isSelf,
}: ShareExperienceProfileTopPartPropsType) => {
  const { colors } = useTheme();
  const { followHandler, isFollowLoading } = useShareExperienceFollow();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const textBtn = isSelf ? 'ویرایش پروفایل' : isFollow ? 'دنبال شده' : 'دنبال کردن';

  const clickHandler = () => {
    if (isSelf) {
      pageNavigationHandler({ id: profile.id, showProgressBar: true });

      const paramsData = JSON.stringify({ id: profile.id, dummyData: Math.random() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME]: paramsData });
    } else {
      followHandler({ userId: profile.id, isFollow });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row-reverse  items-start justify-evenly">
        <div className="flex flex-col justify-center gap-3 items-center">
          <ShareExperienceAvatarModule
            avatarImage={profile.avatarImage}
            showChangeAvatarIcon={isSelf}
            username={profile.username}
            id={profile.id}
          />

          <Typography scale="Lable" size="Medium" textAlign="right" className="w-full">
            {profile.username}
          </Typography>
        </div>

        <ProfileInfo followCount={followCount} storyCount={storyCount} />
      </div>

      <Button
        color={isSelf ? 'surface' : 'primary'}
        isLoading={isFollowLoading}
        onClick={clickHandler}
        fullWidth={true}
        className="py-2"
        variant="fill"
        size="medium"
      >
        <div className="flex flex-row gap-2">
          <Typography scale="Lable" size="Medium" color={`${isSelf ? 'Black' : 'White'}`}>
            {textBtn}
          </Typography>

          {isSelf && <EditIcon className="w-5 h-5 rotate-[360]" style={{ fill: colors.Neutral_OnBackground }} />}
        </div>
      </Button>
    </div>
  );
};

export default ShareExperienceProfileTopPart;
