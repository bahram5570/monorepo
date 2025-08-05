import { getUserCookie } from '@utils/cookies';

import { CyclePhaseEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { currentPhaseFinder } from './currentPhaseFinder';

export const enterphaseHandler = (queries: string) => {
  let result = '';
  const { user } = getUserCookie();
  const storedInstallationPurpose = user?.installationPurpose || null;

  const queryPhase = new URLSearchParams(queries || '')?.get('phase');
  const phase = queryPhase === null ? null : (Number(queryPhase) as CyclePhaseEnum);

  if (storedInstallationPurpose !== null && phase !== null) {
    const { currentPhase } = currentPhaseFinder(storedInstallationPurpose);

    if (phase === CyclePhaseEnum.PeriodTracker) {
      switch (currentPhase) {
        case 'intention':
          result = '/protected/phaseChange/intentionToTracker/step1';
          break;

        case 'pregnancy':
          result = '/protected/phaseChange/pregnancyToTracker/step1';
          break;

        case 'prevention':
          result = '/protected/phaseChange/preventionToTracker/step1';
          break;

        case 'breastfeeding':
          result = '/protected/phaseChange/breastfeedingToTracker/step1';
          break;
      }
    }

    if (phase === CyclePhaseEnum.PeriodIntention) {
      switch (currentPhase) {
        case 'tracker':
          result = '/protected/phaseChange/trackerToIntention/step1';
          break;

        case 'prevention':
          result = '/protected/phaseChange/preventionToIntention/step1';
          break;
      }
    }

    if (phase === CyclePhaseEnum.PeriodPrevention) {
      switch (currentPhase) {
        case 'tracker':
          result = '/protected/phaseChange/trackerToPrevention/step1';
          break;

        case 'intention':
          result = '/protected/phaseChange/intentionToPrevention/step1';
          break;
      }
    }

    if (phase === CyclePhaseEnum.Pregnancy) {
      result = '/protected/phaseChange/toPregnancy/step1';
    }

    if (phase === CyclePhaseEnum.Breastfeeding) {
      result = '/protected/phaseChange/toBreastfeeding/step1';
    }

    if (phase === CyclePhaseEnum.EditPregnancyCycle) {
      result = `/protected/phaseChange/editPregnancy/step1?${queries}`;
    }
  }

  return result;
};
