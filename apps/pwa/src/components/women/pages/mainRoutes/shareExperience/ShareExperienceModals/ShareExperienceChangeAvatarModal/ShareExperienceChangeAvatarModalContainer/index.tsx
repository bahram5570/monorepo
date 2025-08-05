import GalleryWideIcon from '@assets/icons/galleryWide.svg';

import FileInputManager from '@components/ui/FileInputManager';
import Typography from '@components/ui/Typography';
import { SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useFileUpload from '@hooks/useFileUpload';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import useUpdateProfile from './__hooks__/useUpdateProfile';
import { ShareExperienceChangeAvatarModalContainerPropsType } from './type';

const ShareExperienceChangeAvatarModalContainer = ({
  username,
  id,
}: ShareExperienceChangeAvatarModalContainerPropsType) => {
  const { colors } = useTheme();
  const { onProfileChangeHandler } = useUpdateProfile();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => onProfileChangeHandler({ avatarImage: v, username: username }),
    api: 'shareeexperience/v3/file',
  });

  const selectAvatarHandler = () => {
    if (id) {
      pageNavigationHandler({ id: id, showProgressBar: true });

      const paramsData = JSON.stringify({ id, dummyData: Math.random() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME]: paramsData });
    }
  };

  return (
    <div className="py-5">
      <Typography scale="Title" size="Small" textAlign="center" className="w-full p-2">
        عکس خود را انتخاب کنید
      </Typography>
      <div className=" divide-y flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />
        <div className="flex justify-end items-center gap-2 p-2" onClick={selectAvatarHandler}>
          <Typography scale="Body" size="Large" color="Neutral_OnBackground">
            آواتار پیش فرض
          </Typography>
          <div
            className="w-14 h-14 rounded-full flex justify-center items-center"
            style={{ border: `1px solid ${colors.Surface_SurfaceVariant}` }}
          >
            <GalleryWideIcon className="w-6 h-6" style={{ stroke: colors.Neutral_OnBackground }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceChangeAvatarModalContainer;
