import { useEffect } from 'react';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import {
  ACTIVATION_HEADING_ICON_ID,
  ACTIVATION_HEADING_SCRIPTS_ID,
} from '@components/activation/ActivationHeading/constants';
import CustomImage from '@components/ui/CustomImage';
import { OrderOfQuestionScriptsTypes } from '@providers/__activation__/types';

import { PartnerCodeInputHeadingProps } from './types';

const PartnerCodeInputHeading = ({ title, description, isLargeScreen }: PartnerCodeInputHeadingProps) => {
  const scripts = { title, description, subtitle: '' };
  const scriptsOrder: OrderOfQuestionScriptsTypes = {
    title: 1,
    description: 2,
    subtitle: 3,
  };

  useEffect(() => {
    const iconEl = document.getElementById(ACTIVATION_HEADING_ICON_ID);
    const scriptsEl = document.getElementById(ACTIVATION_HEADING_SCRIPTS_ID);

    if (iconEl) {
      iconEl.style.opacity = '0';
    }

    if (scriptsEl) {
      scriptsEl.style.paddingTop = isLargeScreen ? '250px' : '180px';
    }
  }, [isLargeScreen]);

  return (
    <>
      <ActivationBackBtn />

      <ActivationHeading scripts={scripts} orderOfQuestionScripts={scriptsOrder} />

      <CustomImage
        src="/assets/images/partnerCode.webp"
        className="absolute top-5 left-0 right-0 bottom-0 z-10 pointer-events-none"
      />
    </>
  );
};

export default PartnerCodeInputHeading;
