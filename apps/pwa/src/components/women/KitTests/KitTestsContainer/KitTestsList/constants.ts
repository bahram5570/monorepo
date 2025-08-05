import BabyCheckIcon from '@assets/icons/testKitBabyCheck.svg';
import OvulationIcon from '@assets/icons/testKitOvulation.svg';

import { KitTestsListInfoTypes } from './types';

export const kitTestMainInfo: KitTestsListInfoTypes = ({ moduleType, data }) => {
  let result = null;

  if (data) {
    if (moduleType === 'ovulation') {
      if (data.ovulationResult !== null) {
        const hasCount = typeof data.ovulationResult?.count === 'undefined' || data.ovulationResult.count > 0;

        if (hasCount) {
          result = { buttonScript: 'یک تست تخمک‌گذاری در چرخه شما انجام شده', Icon: OvulationIcon };
        }
      }
    } else if (moduleType === 'babyCheck') {
      if (data.babyChecks && data?.babyChecks?.length > 0) {
        result = {
          buttonScript: `${data?.babyChecks?.length || -1} تست بارداری در چرخه شما انجام شده`,
          Icon: BabyCheckIcon,
        };
      }
    }
  }

  return result;
};
