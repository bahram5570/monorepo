import { FileDataHandlerTypes, FileUploadImageFileTypes } from '@hooks/useFileUpload/types';

export interface ShareExperienceNewFileProps {
  fileDataHandler: FileDataHandlerTypes;
  imageFile: FileUploadImageFileTypes;
  removeFileHandler: () => void;
  uploadImageLoading: boolean;
}
