import { useEffect, useState } from 'react';

import PregnancySettingsIcon from '@assets/icons/pregnancySettings.svg';

import { InstallationPurposeEnum } from '@constants/activation.constants';

import ProfileLinkGenerator from '../ProfileLinkGenerator';
import { BreastfeedingSettingPropsType } from './type';

const BreastfeedingSetting = ({ status, isDelivery, pregnancyDate }: BreastfeedingSettingPropsType) => {
  const [linkTo, setLinkTo] = useState<null | string>(null);

  useEffect(() => {
    if (status === InstallationPurposeEnum.breastfeeding.status) {
      setLinkTo(`/protected/breastfeedingSettings`);
    }
  }, [status, isDelivery, pregnancyDate]);
  return (
    <>
      {linkTo && (
        <ProfileLinkGenerator
          link={linkTo}
          needsSubscription
          isLastItem={false}
          name={'ویرایش اطلاعات زایمان'}
          Icon={PregnancySettingsIcon}
        />
      )}
    </>
  );
};

export default BreastfeedingSetting;
