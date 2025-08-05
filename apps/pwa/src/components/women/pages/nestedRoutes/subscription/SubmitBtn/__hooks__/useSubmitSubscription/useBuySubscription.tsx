import { setPaymentCookie } from '@utils/cookies';
import { externalLink } from '@utils/navigation';

import { USER_COOKIE_NAME } from '@constants/cookie.constants';
import useApi from '@hooks/useApi';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Cookies from 'js-cookie';

import { BuySubscriptionResponseTypes } from './types';

const useBuySubscription = () => {
  const user = Cookies.get(USER_COOKIE_NAME);
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = 'buySubscription';
  const identity = user ? JSON.parse(user).identity : '';

  const buySubscriptionSuccessHandler = async (v: BuySubscriptionResponseTypes) => {
    if (v.isSuccess) {
      setPaymentCookie({ route: '/protected/cycle' });
      externalLink(`https://web.impo.app/financial/AsanPardakht/${v.token}/${identity}`);
    }
  };

  const { callApi } = useApi<BuySubscriptionResponseTypes>({
    method: 'POST',
    api: 'financial/subscribtiondiscount',
    onSuccess: buySubscriptionSuccessHandler,
  });

  const buySubscription = (payload?: object) => {
    callApi(payload);
    pageNavigationHandler({ showProgressBar: false, id: loadingId });
  };

  const buyLoading = pageNavigationLoading === loadingId;

  return { buySubscription, buyLoading };
};

export default useBuySubscription;
