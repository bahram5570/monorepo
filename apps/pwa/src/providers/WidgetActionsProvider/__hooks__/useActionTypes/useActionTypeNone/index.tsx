import useActionComplete from '../useActionComplete';

const useActionTypeNone = (onActionComplete: () => void) => {
  const { onComplete } = useActionComplete(onActionComplete);

  const callNone = () => {
    onComplete();
  };

  return { callNone };
};

export default useActionTypeNone;
