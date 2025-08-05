import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';
import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import useGetData from '@components/women/pages/mainRoutes/partner/PartnerContainer/__hooks__/useGetData';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { PROFILE_MODAL_QUERY_NAME } from '../../ProfileLinkList/constants';
import { ProfileModalNameEnums } from '../../ProfileModals/enum';
import { UserNameDetailsProps } from './type';

const UserNameDetail = ({ name, username, avatar }: UserNameDetailsProps) => {
  const { data } = useGetData();
  const { colors, typography } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const handleClick = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      [PROFILE_MODAL_QUERY_NAME]: ProfileModalNameEnums.EditProfileImage,
      canDeleteProfile: String(data?.canDeleteProfile),
    });

    pageNavigationHandler({ showProgressBar: false, id: ProfileModalNameEnums.EditProfileImage });
  };

  function preventIOSPhoneLink(number: string) {
    return number.split('').join('\u200B'); // inserts zero-width space between each digit
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="relative" onClick={handleClick}>
        <div
          className="overflow-hidden rounded-full flex justify-center items-center "
          style={{ backgroundColor: colors.White }}
        >
          <CustomImage src={data?.womanAvatar || avatar} width={90} height={90} className="!object-cover" />
        </div>

        <div className="absolute top-[60%] left-3/4 z-30 select-none">
          <div
            className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
            style={{
              backgroundColor: colors.Neutral_OnBackground,
              opacity: 50,
            }}
          >
            {data?.canDeleteProfile ? (
              <EditIcon style={{ fill: colors.White }} className="w-3 h-3" />
            ) : (
              <UploadIcon style={{ fill: colors.White }} className="w-3 h-3" />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <p style={{ userSelect: 'none' }}>
          <span style={{ pointerEvents: 'none', ...typography.Title.Small }}>{name}</span>
        </p>
        {/* <Typography scale="Title" size="Small">
          {name}
        </Typography> */}
        <p style={{ userSelect: 'none', ...typography.Lable.Medium }}>
          <span style={{ pointerEvents: 'none' }}>{preventIOSPhoneLink(toPersianNumbers(username))}</span>
        </p>
      </div>
    </div>
  );
};

export default UserNameDetail;
