import { externalLink } from '@utils/navigation';

import useActionComplete from '../useActionComplete';

const useActionTypeExternalRout = (onActionComplete: () => void) => {
  const { onComplete } = useActionComplete(onActionComplete);

  const callExternalRout = (api: string) => {
    onComplete();
    externalLink(api, true);
  };

  return { callExternalRout };
};

export default useActionTypeExternalRout;
