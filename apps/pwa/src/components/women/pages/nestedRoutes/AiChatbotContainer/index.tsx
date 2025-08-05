'use client';

import AiChatbotFooter from './AiChatbotFooter';
import AiChatbotLayout from './AiChatbotLayout';
import AiChatbotMessageList from './AiChatbotMessageList';
import AiChatbotSkeleton from './AiChatbotSkeleton';
import EmptyState from './EmptyState';
import useGetHistoryChatData from './__hooks__/useGetHistoryChatData';
import useSubmit from './__hooks__/useSubmit';

const AiChatbotContainer = () => {
  const { aiChatData, aiChatbotList, addChatHandler, historyLoading } = useGetHistoryChatData();
  const { submitHandler, isLoading } = useSubmit({ chatId: aiChatData?.chatId, addChatHandler });
  const NotChatData = aiChatData && aiChatbotList.length <= 0;
  const hasChatData = aiChatbotList.length > 0;

  return (
    <>
      {historyLoading && <AiChatbotSkeleton />}
      {!historyLoading && (
        <AiChatbotLayout chatTitle={aiChatData?.chatTitle}>
          <>
            {NotChatData && (
              <EmptyState
                emptyStateMessage={aiChatData?.emptyStateMessage}
                emptyStateTitle={aiChatData?.emptyStateTitle}
              />
            )}
            {hasChatData && <AiChatbotMessageList chats={aiChatbotList} isLoading={isLoading} />}

            {aiChatData && <AiChatbotFooter {...aiChatData} submitHandler={submitHandler} isLoading={isLoading} />}
          </>
        </AiChatbotLayout>
      )}
    </>
  );
};

export default AiChatbotContainer;
