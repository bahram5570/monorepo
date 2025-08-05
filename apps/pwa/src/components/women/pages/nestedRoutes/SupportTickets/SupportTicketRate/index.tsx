'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';

import ChatsMessagesContainer from './ChatsMessagesContainer';
import ChatFooter from './ChatsMessagesContainer/ChatFooter';
import SupportTicketDetailSkeleton from './SupportTicketDetailSkeleton';
import useGetData from './__hooks__/useGetData';

const SupportTicketDetailContainer = () => {
  const { data, isLoading } = useGetData();

  return (
    <>
      <WomenPageLayout rightElement="BackButton" rightElementScript="تیکت به پشتیبانی">
        {isLoading && <SupportTicketDetailSkeleton />}
        {!isLoading && (
          <>
            {!data && <></>}
            {data && (
              <>
                <ChatsMessagesContainer data={data} />
                <ChatFooter {...data} />
              </>
            )}
          </>
        )}
      </WomenPageLayout>
    </>
  );
};

export default SupportTicketDetailContainer;
