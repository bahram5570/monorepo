import { useState } from 'react';

import Image from 'next/image';

import Spinner from '../Spinner';
import CustomImageError from './CustomImageError';
import useImageSrc from './__hooks__/useImageSrc';
import usePreviewImage from './__hooks__/usePreviewImage';
import { CustomImageProps } from './types';

const CustomImage = (props: CustomImageProps) => {
  const [hasError, setHasError] = useState(false);
  const { previewImageHandler, previewImageLoading } = usePreviewImage();

  const isLoadedHandler = () => {
    if (props.onLoad) {
      props.onLoad();
    }
  };

  const errorHandler = () => {
    setHasError(true);
  };

  const { updatedSrc } = useImageSrc({ src: props.src, imageApi: props.imageApi, onError: errorHandler });

  const parentStyles =
    props.width === undefined
      ? {}
      : {
          width: props.width,
          minWidth: props.width,
          height: props.height || props.width,
          minHeight: props.height || props.width,
        };

  const imageStyles =
    props.width === undefined
      ? { width: 0, height: 0, sizes: '100vw', style: { width: '100%', height: 'auto' } }
      : { fill: true };

  return (
    <div className={`overflow-hidden ${props.className}`} style={{ ...parentStyles, ...props.style }}>
      <div className="relative w-full h-full">
        {hasError && <CustomImageError />}

        {previewImageLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-surface-variant bg-[#00000066] backdrop-blur-sm">
            <Spinner color="surface" />
          </div>
        )}

        {!hasError && (
          <>
            <Image
              {...imageStyles}
              alt={props.alt || ''}
              onError={errorHandler}
              onLoad={isLoadedHandler}
              objectFit={props.objectFit}
              priority={props.priority || false}
              src={updatedSrc || '/assets/icons/noImage.svg'}
              className={`${props.hasPreviewImage ? 'cursor-pointer' : 'pointer-events-none'} ${props.className || ''}`}
              onClick={() =>
                previewImageHandler({
                  src: updatedSrc,
                  shape: props.previewImageShape,
                  hasPreviewImage: props.hasPreviewImage,
                })
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CustomImage;
