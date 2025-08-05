import CustomModal from '@components/ui/CustomModal';
import FileInputManager from '@components/ui/FileInputManager';

import useFileValue from '../ChatFooterMessageInput/__hooks__/useFileValue';
import { ChatFooterModalProps } from './type';

const ChatFooterModal = ({ ticketId }: ChatFooterModalProps) => {
  const { fileDataHandler, uploadImageLoading } = useFileValue(ticketId);

  return (
    <CustomModal isSlidingMode>
      <div className="divide-y flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default ChatFooterModal;
