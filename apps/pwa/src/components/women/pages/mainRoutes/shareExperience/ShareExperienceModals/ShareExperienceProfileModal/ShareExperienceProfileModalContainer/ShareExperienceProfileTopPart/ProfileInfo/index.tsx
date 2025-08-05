import Typography from '@components/ui/Typography';

import { ProfileInfoPropsType } from './type';

const ProfileInfo = ({ followCount, storyCount }: ProfileInfoPropsType) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center gap-1">
        <Typography scale="Title" size="Small">
          {followCount.followingCount.toString()}
        </Typography>

        <Typography scale="Body" size="Small">
          دنبال شده
        </Typography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <Typography scale="Title" size="Small">
          {followCount.followerCount.toString()}
        </Typography>

        <Typography scale="Body" size="Small">
          دنبال کننده
        </Typography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <Typography scale="Title" size="Small">
          {storyCount.toString()}
        </Typography>

        <Typography scale="Body" size="Small">
          تجربه ها
        </Typography>
      </div>
    </div>
  );
};

export default ProfileInfo;
