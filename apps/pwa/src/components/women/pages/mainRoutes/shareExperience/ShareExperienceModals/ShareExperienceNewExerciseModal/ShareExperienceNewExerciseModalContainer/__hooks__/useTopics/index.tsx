import { useState } from 'react';

import useShareExperienceGetData from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/__hooks__/useShareExperienceGetData';

import { TopicIdHandlerTypes, TopicIdTypes } from './types';

const useTopics = () => {
  const { data, isLoading } = useShareExperienceGetData();
  const [topicId, setTopicId] = useState<TopicIdTypes>(null);

  const topicIdHandler: TopicIdHandlerTypes = (id) => {
    setTopicId(id);
  };

  const topicsData = data?.topics;

  return { isLoading, topicsData, topicId, topicIdHandler };
};

export default useTopics;
