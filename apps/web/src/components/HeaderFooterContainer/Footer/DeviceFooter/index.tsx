'use client';

import { FOOTER_HEIGHT } from '@constants/app.constants';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';
import { usePathname } from 'next/navigation';

import ArticlesIcon from '@assets/icons/deviceFooter/articles.svg';
import CycleIcon from '@assets/icons/deviceFooter/cycle.svg';
import HomeIcon from '@assets/icons/deviceFooter/home.svg';
import LoginIcon from '@assets/icons/deviceFooter/login.svg';

import FooterDownloadApp from '../NormalFooter/FooterDownloadApp';
import DeviceFooterLinkGenerator from './DeviceFooterLinkGenerator';
import { DeviceFooterTypes } from './types';

const DeviceFooter = ({ isArticlePage, hasFooterLink }: DeviceFooterTypes) => {
  const pathname = usePathname();

  return (
    <>
      {hasFooterLink && <FooterDownloadApp />}

      <footer
        className="fixed left-0 right-0 bottom-0 w-full flex justify-around gap-2 px-4 pt-2 border-t-[1px] z-10"
        style={{
          height: FOOTER_HEIGHT,
          backgroundColor: COLORS_LIST.White,
          borderTopColor: COLORS_LIST.Neutral_Surface,
        }}
      >
        <DeviceFooterLinkGenerator title="خانه" Icon={HomeIcon} href="/" isSelected={pathname === '/'} />
        <DeviceFooterLinkGenerator title="چرخه" Icon={CycleIcon} href="/cycle" isSelected={pathname === '/cycle'} />
        <DeviceFooterLinkGenerator title="مقالات" Icon={ArticlesIcon} href="/blogs" isSelected={!!isArticlePage} />
        <DeviceFooterLinkGenerator title="ورود" Icon={LoginIcon} href={PWA_LINK_WOMEN_URL} isSelected={false} />
      </footer>
    </>
  );
};

export default DeviceFooter;
