import { useEffect, useState } from 'react';

import PregnancySettingsIcon from '@assets/icons/pregnancySettings.svg';

import { InstallationPurposeEnum } from '@constants/activation.constants';

import ProfileLinkGenerator from '../ProfileLinkGenerator';
import { PregnancySettingsProps } from './types';

const PregnancySettings = ({ status, isDelivery, pregnancyDate }: PregnancySettingsProps) => {
  const [linkTo, setLinkTo] = useState<null | string>(null);

  useEffect(() => {
    if (status === InstallationPurposeEnum.pregnancy.status) {
      setLinkTo(`/protected/pregnancySettings?isDelivery=${isDelivery}&pregnancyDate=${pregnancyDate}`);
    }
  }, [status, isDelivery, pregnancyDate]);

  return (
    <>
      {linkTo && (
        <ProfileLinkGenerator
          link={linkTo}
          needsSubscription
          isLastItem={false}
          name={'تنظیمات بارداری'}
          Icon={PregnancySettingsIcon}
        />
      )}
    </>
  );
};

export default PregnancySettings;
