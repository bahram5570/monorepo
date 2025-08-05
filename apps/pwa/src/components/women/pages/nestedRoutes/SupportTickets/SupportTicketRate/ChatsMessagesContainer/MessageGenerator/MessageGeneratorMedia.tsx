import { chatFileTypeDetector } from '@components/women/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/__utils__';

import CustomImage from '@components/ui/CustomImage';
import ChatsFileGenerator from '@components/women/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/ChatsFileGenerator';

import ChatContainerMaker from './ChatContainerMaker';
import { MessageGeneratorMediaProps } from './types';

const MessageGeneratorMedia = ({ dateTime, sideType, media }: MessageGeneratorMediaProps) => {
  const { isImageType } = chatFileTypeDetector(media);

  return (
    <>
      <ChatContainerMaker dateTime={dateTime} sideType={sideType} width="fit-content">
        {isImageType && (
          <CustomImage hasPreviewImage={true} src={media} width={260} className="rounded-xl" objectFit="cover" />
        )}
        {!isImageType && <ChatsFileGenerator media={media} />}
      </ChatContainerMaker>
    </>
  );
};

export default MessageGeneratorMedia;
