'use client';

import { FOOTER_HEIGHT } from '@constants/app.constants';
import { COLORS_LIST } from '@theme/colors';
import { usePathname } from 'next/navigation';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { FooterNavLinkPropsType } from './type';

const FooterNavLink = (props: FooterNavLinkPropsType) => {
  const pathname = usePathname();
  const showFooterNavLink = props.pathList.some((item) => pathname.includes(item));

  const backgroundHandler = () => {
    let bg;
    if (props.backgroundImage && props.backgroundColorList) {
      bg = `url(${props.backgroundImage}), linear-gradient(260.28deg, ${props.backgroundColorList[0]} 5.11%, ${props.backgroundColorList[1]} 146.5%)`;
    } else if (!props.backgroundImage && props.backgroundColorList) {
      bg = `linear-gradient(260.28deg, ${props.backgroundColorList[0]} 5.11%, ${props.backgroundColorList[1]} 146.5%)`;
    } else {
      bg = `url(${props.backgroundImage})`;
    }

    return bg;
  };

  if (showFooterNavLink) {
    return <></>;
  }

  return (
    <div
      className="w-full h-[64px] flex items-center justify-between px-4 shadow-2xl z-10  bg-cover bg-no-repeat bg-center fixed lg:hidden"
      style={{
        bottom: FOOTER_HEIGHT,
        backgroundImage: backgroundHandler(),
      }}
    >
      <div className="flex flex-col items-start gap-1">
        <CustomTypography fontSize="Title_Small" color="Neutral_Background">
          {props.title}
        </CustomTypography>
        <CustomTypography fontSize="Body_Small" color="Neutral_Background">
          {props.description}
        </CustomTypography>
      </div>

      <CustomLink
        // target="_blank"
        id={props.link}
        href={props.link}
        style={{ backgroundColor: COLORS_LIST.White, borderColor: COLORS_LIST.Neutral_Surface }}
        className="rounded-full w-fit px-6 py-3 h-[38px]  flex items-center justify-center gap-2 relative z-10"
      >
        <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground">
          {props.linkTitle}
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default FooterNavLink;
