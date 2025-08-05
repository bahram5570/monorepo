import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';

import { FileInputTypes } from './enum';

export interface FileInputManagerPropsType {
  fileDataHandler: FileDataHandlerTypes;
  uploadImageLoading: boolean;
  ShowGalleryInput?: boolean;
  ShowCameraInput?: boolean;
  ShowFileInput: boolean;
}

export type FileInputHandlerTypes = (type: FileInputTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
