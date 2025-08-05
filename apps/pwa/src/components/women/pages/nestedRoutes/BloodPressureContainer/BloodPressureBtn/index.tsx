import PenIcon from '@assets/icons/Pen 2.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { BloodPressureBtnPropsType } from './type';

const BloodPressureBtn = ({ value }: BloodPressureBtnPropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === 'bloodPressureBtn';

  const currentValue = value.high !== undefined && value.low !== undefined ? `${value.high}/${value.low}` : null;

  return (
    <div className="flex items-center flex-row-reverse p-2">
      <Typography scale="Lable" size="Medium" className="w-full">
        عدد فشارخون
      </Typography>
      <div
        className="w-full flex  items-center"
        onClick={() => {
          (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
            pageNavigationHandler({ showProgressBar: false, id: 'bloodPressureBtn' }));
        }}
      >
        {isLoading && <Spinner color="primary" width={24} />}
        {!isLoading && (
          <div className="flex items-center flex-row-reverse gap-3">
            {!currentValue ? (
              <Typography scale="Body" size="Medium" color="Surface_Outline">
                انتخاب نشده
              </Typography>
            ) : (
              <div className="flex  gap-1">
                <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
                  {`${currentValue}`}
                </Typography>

                <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
                  mmHg
                </Typography>
              </div>
            )}

            <PenIcon className="w-6 h-6" style={{ fill: colors.PrimaryWoman_Primary }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodPressureBtn;
