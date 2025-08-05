'use client';

import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import { Suspense } from 'react';

import PwaIcon from '@assets/icons/downloads/pwa.svg';
import CustomTypography from '@components/ui/CustomTypography';

import DownloadAppLinkGenerator from '../../DownloadAppLinkGenerator';
import IranianStoresDesktop from './IranianStoresDesktop';
import IranianStoresMobile from './IranianStoresMobile';

const IranianStores = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <>
      <DownloadAppLinkGenerator href={PWA_LINK_WOMEN_URL} id="women-pwa">
        <div className="flex items-center justify-center gap-1">
          <PwaIcon className="w-6 min-w-6 h-auto" style={{ fill: COLORS_LIST.Black }} />

          <CustomTypography fontSize="Lable_Medium" color={'Neutral_OnSurface'}>
            نسخه وب اپ
          </CustomTypography>
        </div>
      </DownloadAppLinkGenerator>

      {breakPoint.tablet && (
        <Suspense>
          <IranianStoresMobile />
        </Suspense>
      )}

      {!breakPoint.tablet && <IranianStoresDesktop />}
    </>
  );
};

export default IranianStores;
