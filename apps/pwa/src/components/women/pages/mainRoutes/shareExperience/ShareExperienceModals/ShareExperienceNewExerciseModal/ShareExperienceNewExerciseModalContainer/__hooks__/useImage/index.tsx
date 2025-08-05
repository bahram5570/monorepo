import { useEffect, useState } from 'react';

import useFileUpload from '@hooks/useFileUpload';

const useImage = () => {
  const [image, setImage] = useState('');

  const successHandler = (v: string) => {
    setImage(v);
  };

  const { fileDataHandler, imageFile, removeFileHandler, uploadImageLoading } = useFileUpload({
    api: 'shareeexperience/v3/file',
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (imageFile === null) {
      setImage('');
    }
  }, [imageFile]);

  return { fileDataHandler, imageFile, removeFileHandler, uploadImageLoading, image };
};

export default useImage;
