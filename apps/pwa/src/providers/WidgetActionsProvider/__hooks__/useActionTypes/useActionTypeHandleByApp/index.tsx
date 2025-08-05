import useActionComplete from '../useActionComplete';

const useActionTypeHandleByApp = (onActionComplete: () => void) => {
  const { onComplete } = useActionComplete(onActionComplete);

  const callHandleByApp = () => {
    onComplete();
  };

  return { callHandleByApp };
};

export default useActionTypeHandleByApp;
