import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const router = useRouter();
  const { refetchQuery } = useCustomReactQuery();
  const onSuccessHandler = () => {
    refetchQuery({ queryKey: ['partnerSection'] });
    router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'POST',
    onSuccess: onSuccessHandler,
    api: `info/unpair?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION || ''}`,
  });

  const deleteHandler = () => {
    const payload = {};
    callApi(payload);
  };

  return { deleteHandler, isLoading };
};

export default useDelete;
