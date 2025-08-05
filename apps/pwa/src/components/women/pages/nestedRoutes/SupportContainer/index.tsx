'use client';

import React from 'react';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import SupportLinkGenerator from './SupportLinkGenerator';
import { SUPPORT_LINK_LIST } from './constants';

const SupportContainer = () => {
  const { colors } = useTheme();

  return (
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript="پشتیبانی"
      backgroundColor={colors.Grey_50}
      className="flex flex-col gap-4  px-4"
    >
      {SUPPORT_LINK_LIST.map((link, index) => {
        return <SupportLinkGenerator {...link} key={index} />;
      })}
    </WomenPageLayout>
  );
};

export default SupportContainer;
