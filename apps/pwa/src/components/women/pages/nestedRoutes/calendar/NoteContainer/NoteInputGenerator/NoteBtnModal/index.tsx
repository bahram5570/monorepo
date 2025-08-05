import PenIcon from '@assets/icons/Pen 2.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { NoteBtnModalPropsType } from './type';

const NoteBtnModal = ({ description, label, name, value }: NoteBtnModalPropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === name;

  const displayDate = value ? value.replace(/-/g, '/') : 'تنظیم نشده';

  const linkTo = () => {
    (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name }),
      pageNavigationHandler({ showProgressBar: false, id: name }));
  };

  return (
    <div className="py-1  px-2 flex flex-col gap-2 ">
      <div className="flex items-center flex-row-reverse p-1">
        <div className="flex gap-1 flex-row-reverse ">
          <Typography scale="Lable" size="Large">
            {label}
          </Typography>
          {description && (
            <Typography scale="Lable" size="Large" color="Surface_Outline">
              {description}
            </Typography>
          )}
        </div>
        <div className="w-full flex  items-center" onClick={linkTo}>
          {isLoading && <Spinner color="primary" width={24} />}
          {!isLoading && (
            <div className="flex items-center flex-row-reverse gap-3">
              <Typography scale="Body" size="Large" color="Black">
                {displayDate}
              </Typography>

              <PenIcon className="w-6 h-6" style={{ fill: colors.PrimaryWoman_Primary }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteBtnModal;
