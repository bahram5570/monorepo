import TrashIcon from '@assets/icons/trash.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

const DeleteNoteBtn = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const linkTo = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: 'deleteNote' });
    pageNavigationHandler({
      showProgressBar: true,
      id: 'deleteNote',
    });
  };

  return (
    <div className="w-full flex  items-center justify-end" onClick={linkTo}>
      <div className="flex items-center  gap-2">
        <Typography scale="Lable" size="Large" color="Error_Error">
          حذف یادداشت
        </Typography>

        <TrashIcon className="w-6 h-6" style={{ stroke: colors.PrimaryWoman_Primary }} />
      </div>
    </div>
  );
};

export default DeleteNoteBtn;
