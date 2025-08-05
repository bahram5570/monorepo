import { useRef } from 'react';

import FileLoading from '@components/women/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/FileLoading';
import useChatInitialSetUp from '@components/women/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/__hooks__/useChatInitialSetUp';
import { CHAT_PAGE_ID } from '@components/women/pages/mainRoutes/clinic/ClinicChatContainer/constants';

import MessageGenerator from './MessageGenerator';
import { ChatsMessagesContainerProps } from './type';

const ChatsMessagesContainer = ({ data }: ChatsMessagesContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useChatInitialSetUp(ref);

  return (
    <div className="relative flex flex-col gap-5 px-4 pt-4 z-0 pb-56" ref={ref} id={CHAT_PAGE_ID}>
      {data.items.map((chat, index) => (
        <MessageGenerator {...chat} key={index} />
      ))}

      <FileLoading />
    </div>
  );
};

export default ChatsMessagesContainer;
