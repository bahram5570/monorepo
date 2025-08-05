import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const router = useRouter();

  const successHandler = () => {
    router.push('/protected/calendar');
  };
  const { callApi, isLoading } = useApi({ api: 'date/note', method: 'DELETE', onSuccess: successHandler });

  const deleteHandler = ({ noteId }: { noteId: string | null }) => {
    const payload = {
      noteId,
    };
    callApi(payload);
  };
  return { deleteHandler, isLoading };
};

export default useDelete;
