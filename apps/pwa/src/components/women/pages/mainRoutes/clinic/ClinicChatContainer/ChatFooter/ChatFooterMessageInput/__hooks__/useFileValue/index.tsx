import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useFileUpload from '@hooks/useFileUpload';
import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';
import { useRouter } from 'next/navigation';

import useUpdateChatReactQuery from '../useUpdateChatReactQuery';

const useFileValue = (ticketId: string) => {
  const [inputFileResetKey, setInputFileResetKey] = useState(Math.random());
  const [uploadingFileType, setUploadingFileType] = useState('');
  const [storedFileName, setStoredFileName] = useState('');
  const { upgateHandler } = useUpdateChatReactQuery();
  const { updateQuery } = useCustomReactQuery();
  const router = useRouter();

  const successHandler = () => {
    upgateHandler({ text: '', fileName: storedFileName });
    setUploadingFileType('');
  };

  const { callApi, isLoading: fileLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: `advice/ticket/${ticketId}`,
  });

  const { fileDataHandler: uploadHandler, uploadImageLoading } = useFileUpload({
    onError: () => {
      setUploadingFileType('');
    },
    onSuccess: (v) => {
      router.back();
      callApi({ text: '', fileName: v });
      setStoredFileName(v);
    },
  });

  useEffect(() => {
    const isLoading = uploadImageLoading || fileLoading;
    updateQuery({ queryKey: ['chatFileLoading'], payload: { isLoading, uploadingFileType } });

    if (!isLoading) {
      setInputFileResetKey(Math.random());
      setStoredFileName('');
    }
  }, [uploadImageLoading, fileLoading]);

  const fileDataHandler: FileDataHandlerTypes = ({ e }) => {
    const fileName = e.target.files?.[0]?.name;

    if (fileName) {
      setUploadingFileType(fileName);
    }

    uploadHandler({ e });
  };

  return { fileDataHandler, inputFileResetKey, uploadImageLoading };
};

export default useFileValue;
