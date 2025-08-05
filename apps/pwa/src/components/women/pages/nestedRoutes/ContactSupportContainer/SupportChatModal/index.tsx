import CustomModal from '@components/ui/CustomModal';
import FileInputManager from '@components/ui/FileInputManager';
import useFileUpload from '@hooks/useFileUpload';
import { useRouter } from 'next/navigation';

import { SupportChatModalPropsType } from './type';

const SupportChatModal = ({ valuesHandler }: SupportChatModalPropsType) => {
  const router = useRouter();

  const successHandler = (v: string) => {
    valuesHandler({ name: 'fileName', value: v });
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => successHandler(v),
  });

  return (
    <CustomModal isSlidingMode>
      <div className="divide-y flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default SupportChatModal;
