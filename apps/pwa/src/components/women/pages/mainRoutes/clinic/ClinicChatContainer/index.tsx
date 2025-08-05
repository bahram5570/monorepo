import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ChatFooter from './ChatFooter';
import { RATING_QUERY_NAME } from './ChatFooter/ChatFooterRating/constants';
import ChatHeading from './ChatHeading';
import ChatSkeleton from './ChatSkeleton';
import ChatsMessagesContainer from './ChatsMessagesContainer';
import RatingContainer from './RatingContainer';
import useGetData from './__hooks__/useGetData';
import { CHAT_HEADING_HEIGHT } from './constants';

const ClinicChatContainer = () => {
  const { isLoading, data } = useGetData();
  const { getQueryParams } = useQueryParamsHandler();

  const isRateModalOpen = getQueryParams(RATING_QUERY_NAME) !== null;

  return (
    <>
      <WomenPageLayout
        rightElement="BackButton"
        rightElementScript={data?.drName}
        paddingBottom={120}
        paddingTop={HEADER_HEIGHT + CHAT_HEADING_HEIGHT + 16}
      >
        {isLoading && <ChatSkeleton />}

        {!isLoading && !isRateModalOpen && data && (
          <>
            <ChatHeading />
            <ChatsMessagesContainer data={data} />
            <ChatFooter isRate={data.isRate} state={data.state} />
          </>
        )}
      </WomenPageLayout>

      {isRateModalOpen && (
        <RatingContainer
          drName={data?.drName}
          isLoading={isLoading}
          drImage={data?.drImage}
          feedbacks={data?.feedbacks}
        />
      )}
    </>
  );
};

export default ClinicChatContainer;
