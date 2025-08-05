import Typography from '@components/ui/Typography';

import ChatContainerMaker from './ChatContainerMaker';
import MessageGeneratorMedia from './MessageGeneratorMedia';
import { MessageGeneratorProps } from './types';

const MessageGenerator = ({ dateTime, media, sideType, text }: MessageGeneratorProps) => {
  return (
    <>
      {text.trim() !== '' && (
        <ChatContainerMaker dateTime={dateTime} sideType={sideType} width={240}>
          <Typography scale="Body" size="Small">
            {text}
          </Typography>
        </ChatContainerMaker>
      )}

      {media && <MessageGeneratorMedia dateTime={dateTime} media={media} sideType={sideType} />}
    </>
  );
};

export default MessageGenerator;
