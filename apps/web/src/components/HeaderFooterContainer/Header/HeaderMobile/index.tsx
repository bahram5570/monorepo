'use client';

import { COLORS_LIST } from '@theme/colors';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';

import ImpoIcon from '@assets/icons/impoName.svg';
import CustomLink from '@components/ui/CustomLink';

import HeaderMobileLInks from './HeaderMobileLInks';
import useIsOpen from './__hooks__/useIsOpen';
import { HEADER_MOBILE_HEIGHT } from './constants';

const HeaderMobile = () => {
  const { isOpen, isOpenHandler } = useIsOpen();

  return (
    <>
      <div
        className="w-full pl-4 pr-6 flex items-center justify-between border-b-[1px]"
        style={{
          height: HEADER_MOBILE_HEIGHT,
          backgroundColor: COLORS_LIST.White,
          borderBottomColor: COLORS_LIST.Surface_SurfaceVariant,
        }}
      >
        <CustomLink href="/">
          <ImpoIcon className="w-14 h-auto" style={{ fill: COLORS_LIST.Primary_Primary }} />
        </CustomLink>

        <div className="w-12 h-12 flex items-center justify-center" onClick={() => isOpenHandler(!isOpen)}>
          {!isOpen && <MenuIcon className="w-8 h-auto" style={{ fill: COLORS_LIST.Black }} />}
          {isOpen && <CloseRoundedIcon className="w-5 h-auto" style={{ fill: COLORS_LIST.Black }} />}
        </div>
      </div>

      <HeaderMobileLInks isOpen={isOpen} isOpenHandler={isOpenHandler} />
    </>
  );
};

export default HeaderMobile;
