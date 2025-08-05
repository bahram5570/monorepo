'use client';

import Image from 'next/image';

import { useState } from 'react';

import CustomImagePreview from './CustomImagePreview';
import { CustomImageTypes } from './types';

const CustomImage = (props: CustomImageTypes) => {
  const { onClick, hasPreviewImage, ...updatedProps } = props;

  const [previewImage, setPreviewImage] = useState(false);

  const clickHandler = () => {
    if (props.hasPreviewImage) {
      setPreviewImage(true);
    }
  };

  return (
    <>
      <Image {...updatedProps} onClick={clickHandler} />

      {hasPreviewImage && (
        <CustomImagePreview
          src={updatedProps.src}
          previewImage={previewImage}
          closeHandler={() => setPreviewImage(false)}
          previewBackground={props.previewBackground}
        />
      )}
    </>
  );
};

export default CustomImage;
