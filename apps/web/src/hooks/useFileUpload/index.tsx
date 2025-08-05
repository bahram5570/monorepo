import useApi from '@hooks/useApi';

import { useState } from 'react';

import { FileDataHandlerTypes, FileResponseTypes, FileUploadImageFileTypes, OptionsTypes } from './types';

const useFileUpload = (options: OptionsTypes) => {
  const [imageFile, setImageFile] = useState<FileUploadImageFileTypes>(null);

  const successHandler = (v: FileResponseTypes) => {
    if (v.valid) {
      if (options?.onSuccess) {
        options.onSuccess(v.name);
      }
    }
  };

  const errorHandler = () => {
    if (options?.onError) {
      options.onError();
    }

    setImageFile(null);
  };

  const { callApi, isLoading: uploadImageLoading } = useApi({
    url: options.api,
    onError: errorHandler,
    onSuccess: successHandler,
    method: options.method || 'POST',
    contentType: 'multipart/form-data',
  });

  const fileDataHandler: FileDataHandlerTypes = async ({ e, file }) => {
    const finalFile = file ?? e.target.files?.[0];

    if (!finalFile) {
      return;
    }

    const formData = new FormData();
    formData.append('files', finalFile);
    callApi(formData);

    const image = URL.createObjectURL(finalFile);
    const imageType = finalFile.name.split('.')[1];
    setImageFile({ image, imageType });
  };

  const removeFileHandler = () => {
    setImageFile(null);
  };

  return { fileDataHandler, removeFileHandler, uploadImageLoading, imageFile };
};

export default useFileUpload;
