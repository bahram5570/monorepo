'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';

import ShareExperienceAvatar from './ShareExperienceAvatar';
import ShareExperienceCategories from './ShareExperienceCategories';
import ShareExperienceExperiences from './ShareExperienceExperiences';
import ShareExperienceNewLink from './ShareExperienceNewLink';
import ShareExperienceSkeleton from './ShareExperienceSkeleton';
import ShareExperienceTopics from './ShareExperienceTopics';
import useCategories from './__hooks__/useCategories';
import useShareExperienceGetData from './__hooks__/useShareExperienceGetData';
import useShareExperienceInitialRedirect from './__hooks__/useShareExperienceInitialRedirect';
import useTopics from './__hooks__/useTopics';

const ShareExperienceContainer = () => {
  useShareExperienceInitialRedirect();
  const { isLoading, data, onSuccessNewHandler } = useShareExperienceGetData();

  const { categories, selectedCategoryId, selectedCategoryIdHandler } = useCategories(data?.categories);
  const { topics } = useTopics(data?.topics);

  return (
    <WomenPageLayout leftElement1="Profile">
      <>
        {isLoading && !data && <ShareExperienceSkeleton />}

        {!isLoading && data && (
          <>
            <ShareExperienceAvatar profile={data.profile} />
            <ShareExperienceNewLink />

            {topics && <ShareExperienceTopics topics={topics} />}

            {categories && selectedCategoryId && (
              <ShareExperienceCategories
                categories={categories}
                selectedCategoryId={selectedCategoryId}
                selectedCategoryIdHandler={selectedCategoryIdHandler}
              />
            )}

            {selectedCategoryId && (
              <ShareExperienceExperiences
                profile={data.profile}
                key={selectedCategoryId}
                selectedCategoryId={selectedCategoryId}
                onSuccessNewHandler={onSuccessNewHandler}
              />
            )}
          </>
        )}
      </>
    </WomenPageLayout>
  );
};

export default ShareExperienceContainer;
