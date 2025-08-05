import { APP_VERSION } from '@constants/app.constants';
import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import EmailIcon from '@assets/icons/email.svg';
import InstagramIcon from '@assets/icons/instagram2.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import XIcon from '@assets/icons/x.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { currentDate } from '@utils/dates';

const { jYear } = currentDate();

const FooterSocials = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <>
      <div
        className="w-full h-[1px] my-6 md:opacity-0 md:mt-0 md:mb-9"
        style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
      />

      <div className="w-full flex flex-col items-center gap-4 pb-4">
        <div className="flex justify-center gap-4">
          <CustomLink href="support@impo.app" target="_blank" aria-label="FooterSocials">
            <EmailIcon className="w-6" style={{ stroke: COLORS_LIST.Surface_Outline }} />
          </CustomLink>

          <CustomLink href="https://t.me/impo_app" target="_blank" aria-label="FooterSocials">
            <TelegramIcon className="w-6" style={{ stroke: COLORS_LIST.Surface_Outline }} />
          </CustomLink>

          <CustomLink href="https://twitter.com/impoapp" target="_blank" aria-label="FooterSocials">
            <XIcon className="w-6" style={{ stroke: COLORS_LIST.Surface_Outline }} />
          </CustomLink>

          <CustomLink href="https://www.instagram.com/impo.app" target="_blank" aria-label="FooterSocials">
            <InstagramIcon className="w-6" style={{ stroke: COLORS_LIST.Surface_Outline }} />
          </CustomLink>
        </div>

        <CustomTypography
          color={'Surface_Outline'}
          className="px-4 text-center"
          fontSize={breakPoint.tablet ? 'Lable_Small' : 'Body_Small'}
        >
          {`کپی رایت © ${jYear} تمامی حقوق مادی و معنوی متعلق به هلدینگ تاک است.`}
        </CustomTypography>

        <CustomTypography fontSize={'Lable_Small'} color={'Surface_Outline'} numbersMode="english">
          {APP_VERSION}
        </CustomTypography>
      </div>
    </>
  );
};

export default FooterSocials;
