import { useEffect, useState } from 'react';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { PreviewImageTypes } from '@providers/PreviewImageProvider/types';

import { PreviewImageHandlerTypes } from './types';

const usePreviewImage = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const [previewImageLoading, setPreviewImageLoading] = useState(false);

  const isPreview = getQueryParams(MODALS.PREVIEW_IMAGE);
  const isLoading = pageNavigationLoading === MODALS.PREVIEW_IMAGE;

  const previewImageHandler: PreviewImageHandlerTypes = (v) => {
    const { src, shape, hasPreviewImage } = v;

    if (hasPreviewImage && !isLoading) {
      pageNavigationHandler({ showProgressBar: false, id: MODALS.PREVIEW_IMAGE });
      setPreviewImageLoading(true);

      const result: PreviewImageTypes = { shape, src };
      newQueryParamsHandler({ [MODALS.PREVIEW_IMAGE]: JSON.stringify(result) });
    }
  };

  useEffect(() => {
    if (isPreview) {
      setPreviewImageLoading(false);
    }
  }, [isPreview]);

  return { previewImageHandler, previewImageLoading };
};

export default usePreviewImage;
