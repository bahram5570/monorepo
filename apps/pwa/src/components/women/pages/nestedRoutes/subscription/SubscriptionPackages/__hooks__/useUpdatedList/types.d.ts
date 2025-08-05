import { SubscriptionPackagesProps } from '../../types';

export interface UseUpdatedListProps extends Pick<SubscriptionPackagesProps, 'packages' | 'showAll' | 'visibleCount'> {}
