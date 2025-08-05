import LikeEmptyIcon from '@assets/icons/like.svg';
import LikeFillIcon from '@assets/icons/likeFill.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ShareExperienceStateEnum } from '../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/enum';
import useLikes from './__hooks__/useLikes';
import { ShareExperienceLikesModuleProps } from './types';

const ShareExperienceLikesModule = (props: ShareExperienceLikesModuleProps) => {
  const { colors } = useTheme();
  const { likeHandler } = useLikes(props);

  const selectHandler = (v: ShareExperienceStateEnum) => {
    if (!props.isSelf) {
      likeHandler(v);
    }
  };

  const iconsStyles = { opacity: props.isSelf ? 0.4 : 1, width: 20 };
  const filledIcon = <LikeFillIcon style={{ fill: colors.Red_500, ...iconsStyles }} />;
  const emptiedIcon = <LikeEmptyIcon style={{ fill: colors.Surface_InverseSurface, ...iconsStyles }} />;

  return (
    <>
      <div className="flex w-10 gap-1" onClick={() => selectHandler(ShareExperienceStateEnum.Dislike)}>
        <Typography scale="Body" size="Large" color="Surface_InverseSurface" className="!h-5 !w-2/5">
          {props.disliked.toString()}
        </Typography>

        <div className="-scale-y-100 w-3/5">
          {props.state === ShareExperienceStateEnum.Dislike ? filledIcon : emptiedIcon}
        </div>
      </div>

      <div className="flex w-10 gap-1" onClick={() => selectHandler(ShareExperienceStateEnum.Like)}>
        <Typography scale="Body" size="Large" color="Surface_InverseSurface" className="!h-5 !w-2/5">
          {props.likeCount.toString()}
        </Typography>

        <div className="w-3/5">{props.state === ShareExperienceStateEnum.Like ? filledIcon : emptiedIcon}</div>
      </div>
    </>
  );
};

export default ShareExperienceLikesModule;
