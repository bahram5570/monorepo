import { ResponseTypes } from '../__hooks__/useGetData/types';
import { SelectedPackageIndexHandlerTypes } from '../__hooks__/useSelectedPackageIndex/types';
import { ShowAllHandlerTypes } from '../__hooks__/useShowAll/types';

export interface SubscriptionPackagesProps extends Pick<ResponseTypes, 'packages' | 'visibleCount'> {
  selectedPackageIndexHandler: SelectedPackageIndexHandlerTypes;
  showAllHandler: ShowAllHandlerTypes;
  selectedPackageIndex: number;
  showAll: boolean;
}
