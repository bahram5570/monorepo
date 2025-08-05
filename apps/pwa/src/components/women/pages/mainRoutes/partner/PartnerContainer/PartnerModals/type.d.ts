import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';

export type ModalPropsType = {
  onCloseModal: () => void;
};

export type InputsPropsType = {
  fileDataHandler: FileDataHandlerTypes;
  deleteHandler: () => void;
  canDeleteImage: string | null;
  uploadImageLoading: boolean;
};
