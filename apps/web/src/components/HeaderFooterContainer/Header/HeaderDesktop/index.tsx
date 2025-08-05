import { COLORS_LIST } from '@theme/colors';

import ImpoNameIcon from '@assets/icons/impoName.svg';
import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomLink from '@components/ui/CustomLink';
import { scrollToIdHandler } from '@utils/navigation';

import HeaderDesktopLinks from './HeaderDesktopLinks';

const HeaderDesktop = () => {
  const downloadLinkHandler = () => {
    scrollToIdHandler(DOWNLOAD_APP_SECTION_ID);
  };

  return (
    <>
      <div
        style={{ backgroundColor: COLORS_LIST.White }}
        className="
                    relative 
                    w-full 
                    max-w-[calc(100%_-64px)]
                    xl:max-w-[1120px] 
                    h-[56px] 
                    lg:h-[80px] 
                    flex 
                    items-center 
                    lg:justify-between 
                    rounded-full 
                    px-4 
                    lg:px-8 
                    mt-4 
                    mx-auto 
                    shadow-[0_0_16px_0_#6c23371f]
                  "
      >
        <CustomLink href={'/'}>
          <ImpoNameIcon className="w-[68px] h-auto pointer-events-none" style={{ fill: COLORS_LIST.Primary_Primary }} />
        </CustomLink>

        <HeaderDesktopLinks />

        <CustomButton
          varient="fill"
          fontSize="Title_Small"
          className="w-[127px] h-[48px]"
          onClick={downloadLinkHandler}
        >
          نصب ایمپو
        </CustomButton>
      </div>
    </>
  );
};

export default HeaderDesktop;
