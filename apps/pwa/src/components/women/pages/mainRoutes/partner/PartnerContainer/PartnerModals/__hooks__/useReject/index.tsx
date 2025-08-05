import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

const useReject = () => {
  const { refetchQuery } = useCustomReactQuery();
  const route = useRouter();

  const successHandler = () => {
    refetchQuery({ queryKey: ['partnerRequest'] });
    route.back();
  };

  const { data, callApi: reject } = useApi({ api: 'partner/reject', method: 'PUT', onSuccess: successHandler });

  const rejectHandler = (id: string | null) => {
    const payload = {
      id,
    };
    reject(payload);
  };
  return { rejectHandler };
};

export default useReject;
