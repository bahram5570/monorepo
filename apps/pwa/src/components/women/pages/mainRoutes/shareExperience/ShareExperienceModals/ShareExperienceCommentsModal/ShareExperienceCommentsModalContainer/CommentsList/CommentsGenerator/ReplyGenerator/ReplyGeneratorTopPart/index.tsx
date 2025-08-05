import Typography from '@components/ui/Typography';
import ShareExperienceProfileIconModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileIconModule';
import useShareExperiencePassedTime from '@components/women/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { ReplyGeneratorTopPartProps } from './types';

const ReplyGeneratorTopPart = (props: ReplyGeneratorTopPartProps) => {
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
        size={36}
        id={props.userId}
        avatar={props.avatar}
        isSelf={props.selfExperience}
        approvedProfile={props.approvedProfile}
      />
    </div>
  );
};

export default ReplyGeneratorTopPart;
