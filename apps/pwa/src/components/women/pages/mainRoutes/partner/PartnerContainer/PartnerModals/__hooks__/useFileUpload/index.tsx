import useApi from '@hooks/useApi';

import { FileDataHandlerTypes, FileResponseTypes, OptionsTypes } from './type';

const useFileUpload = (options?: OptionsTypes) => {
  const successHandler = (v: FileResponseTypes) => {
    if (v) {
      if (options?.onSuccess) {
        options.onSuccess(v.fileName);
      }
    }
  };

  const errorHandler = () => {
    if (options?.onError) {
      options.onError();
    }
  };

  const { callApi, isLoading: uploadImageLoading } = useApi<FileResponseTypes>({
    api: `${options?.api || 'profile/image'}?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION || ''}`,
    contentType: 'multipart/form-data',
    onSuccess: successHandler,
    onError: errorHandler,
    method: 'PUT',
  });

  const fileDataHandler: FileDataHandlerTypes = async ({ e, file }) => {
    const finalFile = file ?? e.target.files?.[0];

    if (!finalFile) return;

    const formData = new FormData();
    formData.append('files', finalFile);

    await callApi(formData);
  };

  return { fileDataHandler, uploadImageLoading };
};

export default useFileUpload;
