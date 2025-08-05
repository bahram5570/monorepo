import useActionComplete from '../useActionComplete';

const useActionTypeDone = (onActionComplete: () => void) => {
  const { onComplete } = useActionComplete(onActionComplete);

  const callDone = () => {
    onComplete();
  };

  return { callDone };
};

export default useActionTypeDone;
