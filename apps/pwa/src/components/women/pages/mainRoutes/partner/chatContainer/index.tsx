'use client';

import { useEffect, useRef, useState } from 'react';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';
import { useParams } from 'next/navigation';

import ChatContainerSkeleton from './ChatContainerSkeleton';
import ChatHeader from './ChatHeader';
import Input from './Input';
import MessageListContainer from './MessageListContainer';
import useGetData from './__hooks__/useGetData';
import useMessageList from './__hooks__/useMessageList';
import useSubmit from './__hooks__/useSubmit';

const ChatContainer = () => {
  const { colors } = useTheme();
  const { chatId } = useParams();
  const [key, setKey] = useState(0);
  const { data, isLoading } = useGetData({ id: typeof chatId === 'string' ? chatId : '' });
  const {
    submitHandler,
    data: newMessageData,
    isLoading: submitLoading,
  } = useSubmit({ id: typeof chatId === 'string' ? chatId : '', resetChild: () => setKey((prev) => prev + 1) });

  const { messageList, onChangeMessageListHandler, progressData } = useMessageList({
    data,
    newMessageData,
    submitLoading,
  });

  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messageList]);

  return (
    <>
      {isLoading && !data && <ChatContainerSkeleton />}
      {!isLoading && data && (
        <div className={`w-full min-h-[100dvh] relative`} style={{ backgroundColor: colors.White }}>
          <ChatHeader {...data} progress={progressData} />

          <div
            className=" flex relative z-0 flex-col overflow-y-auto  gap-5 pb-28 justify-center bg-[url('/assets/images/bg-chat.webp')] bg-contain"
            style={{ paddingTop: HEADER_HEIGHT + 90 }}
            ref={messageListRef}
          >
            <div style={{ background: colors.Surface_SurfaceVariant }} className="px-[10px] py-3">
              <Typography scale="Lable" size="Large" className="w-full" textAlign="center">
                {data.text}
              </Typography>
            </div>

            <MessageListContainer messageList={messageList} partnerAvatar={data.partnerAvatar} />
            <Input submitHandler={submitHandler} onChange={onChangeMessageListHandler} key={key} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatContainer;
