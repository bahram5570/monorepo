import { shareExperienceCommentQueryMaker, shareExperienceTopicQueryMaker } from '@utils/shareExperience';

import { SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE } from '@components/women/pages/mainRoutes/shareExperience/constants';

export const shareExperienceHandler = (queries?: string) => {
  const params = new URLSearchParams(queries);
  const route = params.get('route') as null | '/topic' | '/comment';
  const id = params.get('id');

  if (route && id) {
    let modal = { queryKey: '', queryValue: '' };

    switch (route) {
      case '/topic':
        modal = shareExperienceTopicQueryMaker(id);
        break;
      case '/comment':
        modal = shareExperienceCommentQueryMaker(id);
        break;
    }

    sessionStorage.setItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE, `${modal.queryKey}=${modal.queryValue}`);
  }

  // # Adding 'dummyData' to force router update when navigating to the same route
  return `/protected/shareExperience?dummyData=${Math.random()}`;
};
