import { APP_STORE_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';
import AppleIcon from '@assets/icons/downloads/apple.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import IranianStores from './IranianStores';

const DownloadAppIos = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <CustomTypography fontSize="Title_Small">نسخه iOS</CustomTypography>

      <div className="relative w-full mt-4 mb-2">
        <CustomLink
          target="_blank"
          id="women-ios-direct"
          aria-label="DownloadAppAndroid"
          href={APP_STORE_LINK_WOMEN_URL}
          style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
          className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
        >
          <AppStoreDownloadIcon className="w-[100px] h-auto" style={{ fill: COLORS_LIST.White }} />
        </CustomLink>

        <AppleIcon
          className="absolute -top-[40px] right-[40px] w-[50px] h-auto z-0"
          style={{ fill: COLORS_LIST.Surface_OutlineVariant }}
        />

        <div
          className="absolute top-0 bottom-0 right-0 left-0 pointer-events-none"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-1">
        <IranianStores />
      </div>
    </div>
  );
};

export default DownloadAppIos;
