import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { SHARE_EXPERIENCE_NEW_MAX_CHARACTERS } from '../constants';
import { ShareExperienceNewTopPartProps } from './types';

const ShareExperienceNewTopPart = ({ text, avatarImage, username }: ShareExperienceNewTopPartProps) => {
  const countScript = `${text.trim().length}/${SHARE_EXPERIENCE_NEW_MAX_CHARACTERS}`;

  return (
    <>
      <div className="w-full flex justify-between">
        <Typography scale="Body" size="Medium" color="Surface_Outline">
          {countScript}
        </Typography>

        <div className="flex gap-2">
          <Typography scale="Body" size="Medium">
            {username}
          </Typography>

          <CustomImage src={avatarImage} width={40} className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default ShareExperienceNewTopPart;
