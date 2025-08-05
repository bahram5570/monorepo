import { useEffect } from 'react';

import { NO_NEED_SUBSCRIPTION_PAGES_LIST } from '@providers/ProfileProvider/constants';
import { usePathname, useRouter } from 'next/navigation';

const useSubscriptionGuard = (remainDays?: number) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof remainDays !== 'undefined' && remainDays <= 0) {
      const isNoNeedSubscription = NO_NEED_SUBSCRIPTION_PAGES_LIST.find((path) => path === pathname);

      if (!isNoNeedSubscription) {
        router.push('/protected/subscription');
      }
    }
  }, [remainDays, pathname]);
};

export default useSubscriptionGuard;
