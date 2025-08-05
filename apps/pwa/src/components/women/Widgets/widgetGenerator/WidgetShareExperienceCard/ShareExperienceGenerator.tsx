import BlueTickIcon from '@assets/icons/blueTick.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { ShareExperienceGeneratorProps } from './types';

const ShareExperienceGenerator = ({ approvedProfile, avatar, name, text }: ShareExperienceGeneratorProps) => {
  return (
    <div className="flex justify-between gap-2 w-full rounded-xl p-2">
      <div className="flex flex-col items-end gap-1 w-full">
        <div className="flex">
          <Typography scale="Lable" size="Small">
            {name}
          </Typography>

          {approvedProfile && <BlueTickIcon />}
        </div>

        <Typography scale="Body" size="Small" color="Surface_OnSurfaceVariant">
          {text}
        </Typography>
      </div>

      <CustomImage src={avatar} width={50} height={50} />
    </div>
  );
};

export default ShareExperienceGenerator;
