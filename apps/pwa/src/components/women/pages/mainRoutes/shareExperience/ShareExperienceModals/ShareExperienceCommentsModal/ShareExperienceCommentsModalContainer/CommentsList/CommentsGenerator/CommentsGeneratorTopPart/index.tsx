import Typography from '@components/ui/Typography';
import ShareExperienceProfileIconModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileIconModule';
import useShareExperiencePassedTime from '@components/women/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { CommentsGeneratorTopPartProps } from './types';

const CommentsGeneratorTopPart = (props: CommentsGeneratorTopPartProps) => {
  const timeScript = useShareExperiencePassedTime(props.createTime);

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <Typography scale="Lable" size="Small" color="Grey_500">
          {`. ${timeScript}`}
        </Typography>

        <Typography scale="Lable" size="Small" color="Neutral_OnBackground">
          {props.name}
        </Typography>
      </div>

      <ShareExperienceProfileIconModule
        approvedProfile={props.approvedProfile}
        isSelf={props.selfComment}
        avatar={props.avatar}
        size={36}
        id={props.userId}
      />
    </div>
  );
};

export default CommentsGeneratorTopPart;
