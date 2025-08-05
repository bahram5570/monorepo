import PlusIcon from '@assets/icons/plus.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import useFileUpload from '@hooks/useFileUpload';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { EmptyStatePropsType } from './type';

const EmptyState = ({ valuesHandler }: EmptyStatePropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const { uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => valuesHandler({ name: 'fileName', value: v }),
  });

  return (
    <div
      className="relative w-full flex items-center justify-center gap-2 py-2 cursor-pointer"
      onClick={() => {
        (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
          pageNavigationHandler({ showProgressBar: false, id: 'supportUploadChat' }));
      }}
    >
      {uploadImageLoading && <Spinner color="primary" width={20} />}

      {!uploadImageLoading && (
        <>
          <Typography scale="Lable" size="Medium" className="pointer-events-none">
            از اینجا میتونی عکس یا فایل اضافه کنی
          </Typography>

          <PlusIcon className="w-4 h-4  pointer-events-none" style={{ stroke: colors.Black }} />
        </>
      )}
    </div>
  );
};

export default EmptyState;
