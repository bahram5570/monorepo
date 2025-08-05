import Typography from '@components/ui/Typography';
import useShareExperiencePassedTime from '@components/women/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import ShareExperienceFollowModule from '../../../../ShareExperienceModules/ShareExperienceFollowModule';
import ShareExperienceProfileIconModule from '../../../../ShareExperienceModules/ShareExperienceProfileIconModule';
import { CommentsTopPartProps } from './types';

const CommentsTopPart = (props: CommentsTopPartProps) => {
  const timeScript = useShareExperiencePassedTime(props.createTime);

  return (
    <div className="w-full flex justify-between" dir="rtl">
      <div className="flex gap-2">
        <ShareExperienceProfileIconModule
          size={40}
          id={props.userId}
          isSelf={props.self}
          avatar={props.avatar}
          approvedProfile={props.approvedProfile}
        />

        <div className="flex flex-col">
          <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
            {props.name}
          </Typography>

          <Typography scale="Lable" size="Small" color="Grey_500">
            {timeScript}
          </Typography>
        </div>
      </div>

      {!props.self && (
        <ShareExperienceFollowModule
          name={props.name}
          userId={props.userId}
          experienceId={props.id}
          isFollow={props.isFollow}
        />
      )}
    </div>
  );
};

export default CommentsTopPart;
