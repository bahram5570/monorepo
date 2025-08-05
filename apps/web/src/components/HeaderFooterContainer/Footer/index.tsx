'use server';

import { headers } from 'next/headers';

import { operatingSystemDetector } from '@utils/system';

import DeviceFooter from './DeviceFooter';
import NormalFooter from './NormalFooter';
import { FooterTypes } from './types';

const Footer = ({ hasFooterLink, isArticlePage }: FooterTypes) => {
  const userAgent = headers().get('user-agent');
  const os = operatingSystemDetector(userAgent);

  const isDeviceMode = os === 'ios' || os === 'android';

  return (
    <>
      {isDeviceMode ? <DeviceFooter isArticlePage={isArticlePage} hasFooterLink={hasFooterLink} /> : <NormalFooter />}
    </>
  );
};

export default Footer;
