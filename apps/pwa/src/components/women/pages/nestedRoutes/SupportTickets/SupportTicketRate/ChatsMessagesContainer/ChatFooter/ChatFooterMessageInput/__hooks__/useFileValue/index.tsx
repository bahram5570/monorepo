import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useFileUpload from '@hooks/useFileUpload';
import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';
import { useParams, useRouter } from 'next/navigation';

import useUpdateChatReactQuery from '../useUpdateChatReactQuery';

const useFileValue = () => {
  const [uploadingFileType, setUploadingFileType] = useState('');
  const [storedFileName, setStoredFileName] = useState('');
  const router = useRouter();
  const { upgateHandler } = useUpdateChatReactQuery();
  const { updateQuery } = useCustomReactQuery();

  const { ticketId } = useParams();

  const successHandler = () => {
    upgateHandler({ text: '', fileName: storedFileName });
    setUploadingFileType('');
    router.back();
  };

  const { callApi, isLoading: fileLoading } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `support/ticket/${ticketId}`,
  });

  const { fileDataHandler: uploadHandler, uploadImageLoading } = useFileUpload({
    onError: () => {
      setUploadingFileType('');
    },
    onSuccess: (v) => {
      callApi({ text: '', fileName: v });
      setStoredFileName(v);
    },
  });

  useEffect(() => {
    const isLoading = uploadImageLoading || fileLoading;
    updateQuery({ queryKey: ['chatFileLoading'], payload: { isLoading, uploadingFileType } });

    if (!isLoading) {
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

  return { fileDataHandler, uploadImageLoading };
};

export default useFileValue;
