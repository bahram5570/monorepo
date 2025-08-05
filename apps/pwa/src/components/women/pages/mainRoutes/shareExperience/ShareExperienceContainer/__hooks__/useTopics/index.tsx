import { useEffect, useState } from 'react';

import { TopicsListTypes } from './type';

const useTopics = (data: TopicsListTypes) => {
  const [topics, setTopics] = useState<null | TopicsListTypes>(null);

  useEffect(() => {
    if (data) {
      setTopics(data);
    }
  }, [data]);

  return { topics };
};

export default useTopics;
