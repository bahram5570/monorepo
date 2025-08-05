import Spinner from '@components/ui/Spinner';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { SHARE_EXPERIENCE_PROFILE_CONTAINER_ID } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperenceProfileTabList from './ShareExperenceProfileTabList';
import ShareExperienceProfileTopPart from './ShareExperienceProfileTopPart';
import ShareExperienceTabs from './ShareExperienceTabs';
import useShareExperenceProfileGetData from './__hooks__/useGetData';
import useShareExperienceProfileTabs from './__hooks__/useShareExperienceProfileTabs';
import { ShareExperienceProfileTabEnum } from './enum';
import { ShareExperienceProfileModalContainerPropsTypes } from './type';

const ShareExperienceProfileModalContainer = ({ userId }: ShareExperienceProfileModalContainerPropsTypes) => {
  useOverflowHandler();
  const { data, isLoading } = useShareExperenceProfileGetData(userId);
  const { tab, tabHandler } = useShareExperienceProfileTabs();

  const optionList = data
    ? [
        {
          text: data?.selfTitleText,
          id: ShareExperienceProfileTabEnum.Self,
        },
        {
          text: data?.activitiesTitleText,
          id: ShareExperienceProfileTabEnum.Activities,
        },
      ]
    : [];

  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript={!isLoading && data ? `پروفایل ${data?.isSelf ? 'شما' : data?.profile.username}` : undefined}
    >
      {isLoading && (
        <div className="w-full flex justify-center pb-10">
          <Spinner color="primary" />
        </div>
      )}

      <div
        id={SHARE_EXPERIENCE_PROFILE_CONTAINER_ID}
        className="relative h-[100dvh] overflow-y-auto flex flex-col px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT * 2 }}
      >
        {isLoading && (
          <div className="w-full flex justify-center pb-10">
            <Spinner color="primary" />
          </div>
        )}

        {!isLoading && data && (
          <>
            <ShareExperienceProfileTopPart
              followCount={data.followCount}
              storyCount={data.storyCount}
              isFollow={data.isFollow}
              profile={data.profile}
              isSelf={data.isSelf}
            />

            <ShareExperienceTabs tab={tab} tabHandler={tabHandler} options={optionList} />

            <ShareExperenceProfileTabList id={data.profile.id} isSelf={data.isSelf} tab={tab} />
          </>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default ShareExperienceProfileModalContainer;
