import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { PartnerModalNameEnums } from '../PartnerModals/enums';
import { AvatarContainerPropsType } from './type';

const AvatarContainer = ({
  manAvatar,
  manName,
  womanAvatar,
  womanName,
  canDeleteProfile,
  valid,
}: AvatarContainerPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const handleClick = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.UploadImage,
      canDeleteProfile: String(canDeleteProfile),
    }),
      pageNavigationHandler({
        showProgressBar: true,
        id: 'UploadProfileImage',
      }));
  };

  return (
    <div className="flex gap-9 absolute top-[-38px] justify-between">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div
            className="overflow-hidden rounded-full flex justify-center items-center bg-white"
            style={{ border: '4px solid #f2eeee' }}
          >
            <CustomImage
              src={manAvatar}
              width={96}
              height={96}
              className="!object-cover"
              hasPreviewImage={valid}
              previewImageShape="circle"
            />
          </div>
        </div>

        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          {manName}
        </Typography>
      </div>

      <div className="flex flex-col items-center justify-center gap-4" onClick={handleClick}>
        <div className="relative">
          <div
            className="overflow-hidden rounded-full flex justify-center items-center bg-white"
            style={{ border: '4px solid #f2eeee' }}
          >
            <CustomImage
              src={womanAvatar || '/assets/images/defaultProfile.webp'}
              width={96}
              height={96}
              className="!object-cover"
            />
          </div>

          <div className="absolute top-[60%] left-3/4 z-30 select-none">
            <div
              className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
              style={{
                backgroundColor: colors.Neutral_OnBackground,
                opacity: 50,
              }}
            >
              {canDeleteProfile ? (
                <EditIcon style={{ fill: colors.White }} className="w-3 h-3" />
              ) : (
                <UploadIcon style={{ fill: colors.White }} className="w-3 h-3" />
              )}
            </div>
          </div>
        </div>

        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          {womanName}
        </Typography>
      </div>
    </div>
  );
};

export default AvatarContainer;
