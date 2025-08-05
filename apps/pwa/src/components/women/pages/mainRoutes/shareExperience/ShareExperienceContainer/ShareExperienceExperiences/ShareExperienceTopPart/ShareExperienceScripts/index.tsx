import PinIcon from '@assets/icons/pin.svg';

import Typography from '@components/ui/Typography';
import useShareExperiencePassedTime from '@components/women/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';
import useTheme from '@hooks/useTheme';

import { ShareExperienceScriptsProps } from './types';

const ShareExperienceScripts = ({ createTime, name, isPin, topicName }: ShareExperienceScriptsProps) => {
  const { colors } = useTheme();
  const timeScript = useShareExperiencePassedTime(createTime);

  return (
    <div className="flex flex-col" dir="rtl">
      <div className="flex items-center gap-1">
        {isPin && <PinIcon className="w-[13px]" style={{ fill: colors.Surface_OnSurfaceVariant }} />}

        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          {name}
        </Typography>

        <Typography scale="Lable" size="Small" color="Grey_500">
          {`. ${timeScript}`}
        </Typography>
      </div>

      <Typography scale="Body" size="Small" color="Surface_InverseSurface">
        {topicName}
      </Typography>
    </div>
  );
};

export default ShareExperienceScripts;
