import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ChallengeResponseType } from '../__hooks__/useGetData/type';
import Inputs from './Inputs';
import useChangeImage from './__hooks__/useChangeImage';
import useDelete from './__hooks__/useDelete';
import useFileUpload from './__hooks__/useFileUpload';

const UploadBackgroundImageModal = () => {
  const { editHandler } = useChangeImage();
  const { getQuery, updateQuery } = useCustomReactQuery(['partner']);
  const { getQueryParams } = useQueryParamsHandler();
  const partnerInfo = getQuery<ChallengeResponseType>({ queryKey: ['partner'] });
  const { deleteHandler } = useDelete({
    api: `pair/cover/?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION || ''}`,
    onSuccess: () => updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, coverImage: '' } }),
  });

  const canDeleteImage = getQueryParams('canDeleteImage');

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => {
      updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, coverImage: v } });
      editHandler({ fileName: v });
    },
    api: 'pair/cover',
  });

  return (
    <Inputs
      canDeleteImage={canDeleteImage}
      fileDataHandler={fileDataHandler}
      deleteHandler={deleteHandler}
      uploadImageLoading={uploadImageLoading}
    />
  );
};

export default UploadBackgroundImageModal;
