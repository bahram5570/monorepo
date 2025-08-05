import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const router = useRouter();

  const successHandler = () => {
    router.back();
    router.back();
  };
  const { callApi, isLoading } = useApi({ api: 'memory', method: 'POST', onSuccess: successHandler });

  const deleteHandler = ({ id }: { id: string | null }) => {
    const payload = {
      id,
    };
    callApi(payload);
  };
  return { deleteHandler, isLoading };
};

export default useDelete;
