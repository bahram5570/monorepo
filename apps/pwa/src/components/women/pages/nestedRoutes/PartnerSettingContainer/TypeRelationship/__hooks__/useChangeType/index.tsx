import useApi from '@hooks/useApi';

const useChangeType = () => {
  const { isLoading, callApi } = useApi({
    method: 'POST',
    api: 'partner/type',
  });

  const changeTypeHandler = (type: number) => {
    const payload = {
      type,
    };

    callApi(payload);
  };

  return { isLoading, changeTypeHandler };
};

export default useChangeType;
