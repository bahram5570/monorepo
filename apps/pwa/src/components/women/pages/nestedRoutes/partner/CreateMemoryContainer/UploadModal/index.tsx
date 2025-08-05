import CustomModal from '@components/ui/CustomModal';
import FileInputManager from '@components/ui/FileInputManager';

import { UploadModalPropsType } from './type';

const UploadModal = ({ fileDataHandler, uploadImageLoading }: UploadModalPropsType) => {
  return (
    <CustomModal isSlidingMode>
      <div className=" divide-y flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default UploadModal;
