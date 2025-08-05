import { useRef } from 'react';

import { CHAT_PAGE_ID } from '../constants';
import FileLoading from './FileLoading';
import MessageGenerator from './MessageGenerator';
import RatedMessageBanner from './RatedMessageBanner';
import useChatInitialSetUp from './__hooks__/useChatInitialSetUp';
import { ChatsMessagesContainerProps } from './types';

const ChatsMessagesContainer = ({ data }: ChatsMessagesContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useChatInitialSetUp(ref);

  return (
    <div className="relative flex flex-col gap-5 px-4 pt-4 z-0" ref={ref} id={CHAT_PAGE_ID}>
      {data.chats.map((chat, index) => (
        <MessageGenerator {...chat} key={index} />
      ))}

      <FileLoading />

      {data.isRate && <RatedMessageBanner rate={data.rate} description={data.description} />}
    </div>
  );
};

export default ChatsMessagesContainer;
