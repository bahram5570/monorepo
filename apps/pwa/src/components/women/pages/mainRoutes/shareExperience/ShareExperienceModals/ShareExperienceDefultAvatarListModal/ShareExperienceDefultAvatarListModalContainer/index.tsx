import { useEffect, useState } from 'react';

import TickIcon from '@assets/icons/CheckCircle-2.svg';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { useRouter } from 'next/navigation';

import useUpdateProfile from '../../ShareExperienceChangeAvatarModal/ShareExperienceChangeAvatarModalContainer/__hooks__/useUpdateProfile';
import useGetData from '../../ShareExperienceEditProfileModal/ShareExperienceEditProfileModalContainer/__hooks__/useGetData';
import { ShareExperienceDefultAvatarListModalContainerPropsType } from './type';

const ShareExperienceDefultAvatarListModalContainer = ({
  id,
}: ShareExperienceDefultAvatarListModalContainerPropsType) => {
  const { profileData } = useGetData(id);
  const avatarList: string[] = profileData?.profile.avatars ? profileData?.profile.avatars : [''];
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const { onProfileChangeHandler } = useUpdateProfile();
  const router = useRouter();

  const onClick = () => {
    onProfileChangeHandler({ avatarImage: selectedAvatar, username: profileData?.profile.username });
    router.back();
  };

  const onSelectedAvatarChange = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  useEffect(() => {
    if (profileData) {
      setSelectedAvatar(profileData?.profile.avatarImage);
    }
  }, [profileData]);

  return (
    <div className="flex flex-col gap-5  relative">
      <div className="px-4 overflow-y-auto max-h-[calc(100vh-200px)]">
        <div className="flex justify-center items-center mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Typography scale="Lable" size="Large">
              پروفایل من
            </Typography>
            <div className="overflow-hidden rounded-full flex justify-center items-center">
              <CustomImage src={profileData?.profile.avatarImage || ''} width={120} height={120} />
            </div>
          </div>
        </div>

        {avatarList.length > 0 && (
          <div className="flex flex-col gap-2 justify-end items-end">
            <Typography scale="Lable" size="Large" className="mt-4">
              آواتار های پیش‌فرض
            </Typography>
            <div className="grid grid-cols-3 gap-4 px-3  w-full">
              {avatarList.map((avatar, index) => {
                return (
                  <div key={index} className="relative" onClick={() => onSelectedAvatarChange(avatar)}>
                    <CustomImage src={avatar} />
                    {selectedAvatar === avatar && <TickIcon className="w-7 h-7 absolute right-0 bottom-0" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="py-4 px-2 sticky bottom-0 bg-white w-full">
        <Button size="medium" variant="fill" color="primary" fullWidth={true} onClick={onClick} className="py-2  ">
          <Typography scale="Lable" size="Large" color="White">
            انتخاب پروفایل
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default ShareExperienceDefultAvatarListModalContainer;
