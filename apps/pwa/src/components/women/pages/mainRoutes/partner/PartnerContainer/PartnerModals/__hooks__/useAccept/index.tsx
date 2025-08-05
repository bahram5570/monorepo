import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import { AcceptResponseType } from './type';

const useAccept = () => {
  const { refetchQuery } = useCustomReactQuery();
  const route = useRouter();

  const successHandler = (v: AcceptResponseType) => {
    if (v.canAccept) {
      refetchQuery({ queryKey: ['partnerKey'] });
      route.push('/protected/partner');
    }
  };

  const { data, callApi: accept } = useApi({
    api: 'partner/accept',
    method: 'PUT',
    onSuccess: (v: AcceptResponseType) => successHandler(v),
  });

  const acceptHandler = (id: string | null, type: number) => {
    const payload = {
      id,
      type,
    };
    accept(payload);
  };
  return { acceptHandler };
};

export default useAccept;
