import Typography from '@components/ui/Typography';
import { SideEnum } from '@components/women/pages/mainRoutes/partner/chatContainer/MessageListContainer/Message/constants';

import ChatContainerMaker from './ChatContainerMaker';
import MessageGeneratorMedia from './MessageGeneratorMedia';
import { MessageGeneratorProps } from './types';

const MessageGenerator = ({ createTime, fileName, id, sendByUser, text }: MessageGeneratorProps) => {
  const sideType = sendByUser ? SideEnum.Self : SideEnum.Partner;
  return (
    <>
      {text.trim() !== '' && (
        <ChatContainerMaker dateTime={createTime} sideType={sideType} width={240}>
          <Typography scale="Body" size="Small">
            {text}
          </Typography>
        </ChatContainerMaker>
      )}

      {fileName && <MessageGeneratorMedia dateTime={createTime} media={fileName} sideType={sideType} />}
    </>
  );
};

export default MessageGenerator;
