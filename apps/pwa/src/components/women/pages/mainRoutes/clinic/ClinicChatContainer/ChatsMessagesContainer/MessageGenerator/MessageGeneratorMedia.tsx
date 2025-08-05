import { chatFileTypeDetector } from '../__utils__';

import CustomImage from '@components/ui/CustomImage';
import VoiceMessagePlayer from '@components/ui/VoiceMessagePlayer';

import ChatsFileGenerator from '../ChatsFileGenerator';
import ChatContainerMaker from './ChatContainerMaker';
import { MessageGeneratorMediaProps } from './types';

const MessageGeneratorMedia = ({ dateTime, sideType, media }: MessageGeneratorMediaProps) => {
  const { isImageType, isVoiceType, isFileType } = chatFileTypeDetector(media);

  return (
    <>
      <ChatContainerMaker dateTime={dateTime} sideType={sideType} width="fit-content">
        {isImageType && <CustomImage hasPreviewImage={true} src={media} width={260} className="rounded-xl" />}
        {isFileType && <ChatsFileGenerator media={media} />}
        {isVoiceType && <VoiceMessagePlayer voiceUrl={media} />}
      </ChatContainerMaker>
    </>
  );
};

export default MessageGeneratorMedia;
