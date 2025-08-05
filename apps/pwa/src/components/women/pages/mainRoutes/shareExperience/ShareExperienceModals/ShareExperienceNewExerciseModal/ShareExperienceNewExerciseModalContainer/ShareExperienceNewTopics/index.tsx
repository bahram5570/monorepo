import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceNewTopicsGenerator from './ShareExperienceNewTopicsGenerator';
import { ShareExperienceNewTopicsProps } from './types';

const ShareExperienceNewTopics = ({
  isSubmitLoading,
  topicIdHandler,
  submitHandler,
  topicsData,
  isLoading,
  topicId,
}: ShareExperienceNewTopicsProps) => {
  useOverflowHandler();
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME) !== null;

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        isSlidingMode={true}
        className="overflow-y-auto !pb-0"
        isFullScreen={true}
        zIndex={78}
      >
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="انتخاب تالار"
          paddingTop={0}
          className=" relative"
        >
          <div className="flex flex-col h-[calc(100dvh_-_48px)]" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            {isLoading && (
              <div className="w-full flex justify-center">
                <Spinner color="onBackground" />
              </div>
            )}

            {!isLoading && topicsData && (
              <>
                <Typography
                  scale="Body"
                  size="Medium"
                  color="Neutral_OnBackground"
                  className="pb-6 ml-auto !w-full flex justify-start items-start"
                >
                  این تجربه مربوط به کدوم تالاره؟
                </Typography>

                {topicsData.map((item, index) => (
                  <ShareExperienceNewTopicsGenerator
                    key={index}
                    name={item.name}
                    image={item.image}
                    isFirstIndex={index === 0}
                    isSelected={item.id === topicId}
                    onSelect={() => topicIdHandler(item.id)}
                  />
                ))}

                <div className=" sticky bottom-0 left-0 right-0 top-0 mx-auto w-full mt-auto px-4 py-6 z-[1000] bg-white">
                  <Button
                    size="medium"
                    variant="fill"
                    color="primary"
                    onClick={submitHandler}
                    isLoading={isSubmitLoading}
                    isDisable={topicId === null}
                  >
                    ثبت تجربه
                  </Button>
                </div>
              </>
            )}
          </div>
        </WomenPageLayout>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewTopics;
