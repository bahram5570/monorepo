import UploadIcon from '@assets/icons/upload.svg';

import CustomImage from '@components/ui/CustomImage';
import { SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { ShareExperienceAvatarModulePropsType } from './type';

const ShareExperienceAvatarModule = ({
  showChangeAvatarIcon,
  avatarImage,
  username,
  id,
}: ShareExperienceAvatarModulePropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectProfileHandler = () => {
    pageNavigationHandler({ id: id, showProgressBar: true });

    const paramsData = JSON.stringify({
      id: id,
      avatar: avatarImage,
      username: username,
      dummyData: Math.random(),
    });

    newQueryParamsHandler({ [SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME]: paramsData });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative">
        <div className="overflow-hidden rounded-full flex justify-center items-center">
          <CustomImage
            src={avatarImage}
            hasPreviewImage={true}
            width={88}
            height={88}
            previewImageShape="circle"
            className="!object-cover"
          />
        </div>

        {showChangeAvatarIcon && (
          <div className="absolute top-[65%] left-[76%] z-30 select-none" onClick={selectProfileHandler}>
            <div
              className="w-[28px] h-[28px] flex justify-center items-center rounded-full cursor-pointer"
              style={{
                backgroundColor: colors.Neutral_OnBackground,
                opacity: 50,
              }}
            >
              <UploadIcon style={{ fill: colors.White }} className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareExperienceAvatarModule;
