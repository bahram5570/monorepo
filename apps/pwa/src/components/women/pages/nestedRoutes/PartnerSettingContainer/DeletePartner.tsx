import TrashIcon from '@assets/icons/trash.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

const DeletePartner = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { colors } = useTheme();

  return (
    <div
      className="flex items-center justify-end gap-2 p-3"
      onClick={() => {
        (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: 'DeletePartnerModal' }),
          pageNavigationHandler({ showProgressBar: true, id: 'DeletePartner' }));
      }}
    >
      <Typography scale="Lable" size="Large" color="Error_Error">
        حذف همدل من
      </Typography>
      <TrashIcon className="w-6 h-6" style={{ stroke: colors.Error_Error }} />
    </div>
  );
};

export default DeletePartner;
