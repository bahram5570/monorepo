import { CAFEBAZAAR_LINK_MEN_URL, DIRECT_LINK_MEN_URL, MYKET_LINK_MEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

import Bazar1Icon from '@assets/icons/bazar1.svg';
import Bazar2Icon from '@assets/icons/bazar2.svg';
import AndroidIcon from '@assets/icons/downloads/android.svg';
import MyKet1Icon from '@assets/icons/myket1.svg';
import MyKet2Icon from '@assets/icons/myket2.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import DownloadAppLinkGenerator from '../DownloadAppLinkGenerator';

const DownloadAppAndroid = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <CustomTypography fontSize="Title_Small">نسخه اندروید</CustomTypography>

      <div className="relative w-full mt-4 mb-2">
        <CustomLink
          id="men-android-direct"
          target="_blank"
          href={DIRECT_LINK_MEN_URL}
          aria-label="DownloadAppAndroid"
          style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
          className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2"
        >
          <CustomTypography fontSize="Title_Small" color="Primary_OnPrimary">
            دانلود مستقیم
          </CustomTypography>

          <AndroidIcon className="w-6 min-w-6 h-auto" style={{ fill: COLORS_LIST.White }} />
        </CustomLink>

        <AndroidIcon
          className="w-[50px] h-auto absolute -top-[30px] right-[40px]"
          style={{ fill: COLORS_LIST.Surface_OutlineVariant }}
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-2">
        <DownloadAppLinkGenerator href={MYKET_LINK_MEN_URL} id="men-myket">
          <div className="w-full flex items-center justify-center gap-1">
            <MyKet1Icon className="w-6 min-w-6 h-auto" />

            <CustomTypography fontSize="Body_Medium" color={'Neutral_OnSurface'}>
              دریافت از
            </CustomTypography>

            <MyKet2Icon className="w-[50px] min-w-[50px] h-auto" />
          </div>
        </DownloadAppLinkGenerator>

        <DownloadAppLinkGenerator href={CAFEBAZAAR_LINK_MEN_URL} id="men-bazar">
          <div className="w-full flex items-center justify-center gap-1">
            <Bazar1Icon className="w-6 min-w-6 h-auto" />

            <CustomTypography fontSize="Body_Medium" color="Neutral_OnSurface">
              دریافت از
            </CustomTypography>

            <Bazar2Icon className="w-[38px] h-auto" />
          </div>
        </DownloadAppLinkGenerator>
      </div>
    </div>
  );
};

export default DownloadAppAndroid;
