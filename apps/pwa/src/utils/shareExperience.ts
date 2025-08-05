import {
  SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
  SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME,
} from '@components/women/pages/mainRoutes/shareExperience/constants';

export const shareExperienceTopicQueryMaker = (id: string) => {
  const queryValue = JSON.stringify({ id, dummyData: Math.random() });
  const queryKey = SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME;
  return { queryKey, queryValue };
};

export const shareExperienceCommentQueryMaker = (id: string) => {
  const queryValue = JSON.stringify({ id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
  const queryKey = SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME;
  return { queryKey, queryValue };
};
