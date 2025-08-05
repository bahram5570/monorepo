import { isLikedMaker } from './__utils__';

import useApi from '@hooks/useApi';

import useNameSelectorData from '../useNameSelectorData';
import { IsLikedHandlerTypes } from './types';

const useNameSelectorLike = () => {
  const { data, setData } = useNameSelectorData();

  const { callApi: callAdd } = useApi({ api: 'feature/babyname/favorite/add', method: 'PUT' });
  const { callApi: callRemove } = useApi({ api: 'feature/babyname/favorite/remove', method: 'PUT' });

  const isLikedHandler: IsLikedHandlerTypes = (card) => {
    if (data) {
      const result = isLikedMaker({ data, card });
      setData(result);
    }

    if (card.isLiked) {
      callRemove({ nameId: card.id });
    } else {
      callAdd({ nameId: card.id });
    }
  };

  return { isLikedHandler };
};

export default useNameSelectorLike;
