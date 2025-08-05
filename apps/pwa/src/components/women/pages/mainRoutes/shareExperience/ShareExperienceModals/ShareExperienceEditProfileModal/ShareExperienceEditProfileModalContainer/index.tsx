import { useEffect, useState } from 'react';

import EditIcon from '@assets/icons/Pen 2.svg';
import InfoIcon from '@assets/icons/info.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import ShareExperienceAvatarModule from '../../../ShareExperienceModules/ShareExperienceAvatarModule';
import useUpdateProfile from '../../ShareExperienceChangeAvatarModal/ShareExperienceChangeAvatarModalContainer/__hooks__/useUpdateProfile';
import useGetData from './__hooks__/useGetData';
import { ShareExperienceEditProfileModalContainerPropsType } from './type';

const ShareExperienceEditProfileModalContainer = ({ id }: ShareExperienceEditProfileModalContainerPropsType) => {
  const { profileData } = useGetData(id);
  const { colors } = useTheme();
  const [userName, setUserName] = useState<string>('');
  const { onProfileChangeHandler, isLoading } = useUpdateProfile();

  const onUserChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const clickHandler = () => {
    onProfileChangeHandler({ username: userName, avatarImage: profileData?.profile.avatarImage });
  };

  useEffect(() => {
    if (profileData) {
      setUserName(profileData.profile.username);
    }
  }, [profileData]);

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="ویرایش پروفایل" paddingTop={0}>
      {profileData && (
        <div
          className="flex flex-col gap-6 min-h-[100dvh]"
          style={{ paddingTop: HEADER_HEIGHT, paddingBottom: HEADER_HEIGHT - 20 }}
        >
          <ShareExperienceAvatarModule
            avatarImage={profileData.profile.avatarImage}
            username={profileData.profile.username}
            showChangeAvatarIcon={true}
            id={profileData.profile.id}
          />
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex flex-col justify-end items-end gap-2">
              <Typography scale="Body" size="Medium" className="px-3">
                نام کاربری
              </Typography>
              <div className="flex flex-wrap-reverse justify-between border rounded-xl px-4 py-3 w-full">
                <EditIcon className="w-5 h-5" style={{ fill: colors.Neutral_OnBackground }} />
                <input type="text" className="" value={userName} onChange={onUserChangeHandler} />
              </div>
            </div>
            <div className="rounded-lg flex flex-row gap-2 p-1" style={{ background: colors.Warning_WarininContainer }}>
              <Typography scale="Body" size="Small">
                {profileData.usernameHintText}
              </Typography>
              <InfoIcon className="w-5 h-5" style={{ stroke: colors.Warning_Warning }} />
            </div>
          </div>

          <Button
            size="medium"
            variant="fill"
            color="primary"
            className="mt-auto"
            isLoading={isLoading}
            onClick={clickHandler}
            isDisable={profileData.profile.username === userName}
          >
            ثبت تغییرات
          </Button>
        </div>
      )}
    </WomenPageLayout>
  );
};

export default ShareExperienceEditProfileModalContainer;
