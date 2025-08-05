import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import ChatFooterClosed from './ChatFooterClosed';
import ChatFooterMessageInput from './ChatFooterMessageInput';
import ChatFooterRating from './ChatFooterRating';
import ChatFooterRejected from './ChatFooterRejected';
import useChatFooterType from './__hooks__/useChatFooterType';
import { ChatFooterProps } from './types';

const ChatFooter = ({ isRate, state }: ChatFooterProps) => {
  const { colors } = useTheme();
  const { footerType } = useChatFooterType({ isRate, state });

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-2 pb-6 z-30"
      style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
    >
      {footerType === 'rated' && <ChatFooterClosed />}
      {footerType === 'rating' && <ChatFooterRating />}
      {footerType === 'banner' && <ChatFooterRejected />}
      {footerType === 'chatMessageInput' && <ChatFooterMessageInput />}
    </div>
  );
};

export default ChatFooter;
