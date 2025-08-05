import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { usePathname } from 'next/navigation';

import { NAME_SELECTOR_ACTIVATION_PAGES_INFO } from '../../constants';
import { NameSelectorActivationPageNamesTypes } from '../../types';

const useNameSelectorActivationSteps = () => {
  const pageName = usePathname();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const stageName = pageName.replace('/protected/nameSelectorActivation/', '') as NameSelectorActivationPageNamesTypes;
  const stepInfo = NAME_SELECTOR_ACTIVATION_PAGES_INFO[stageName];

  const loadingId = stageName;
  const isNextStepLoading = pageNavigationLoading === loadingId;

  const nextStepNavigation = () => {
    pageNavigationHandler({ showProgressBar: false, linkTo: stepInfo.nextStep || '', id: loadingId });
  };

  return { stepInfo, nextStepNavigation, isNextStepLoading };
};

export default useNameSelectorActivationSteps;
