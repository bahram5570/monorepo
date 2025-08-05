import PenIcon from '@assets/icons/Pen 2.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { BloodSugerBtnGeneratorPropsType } from './type';

const BloodSugerBtnGenerator = ({ name, value, label }: BloodSugerBtnGeneratorPropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === name;

  const currentValue =
    name === 'condition'
      ? value === 0
        ? 'ناشتا'
        : value === null
          ? ''
          : 'دو ساعت بعد از غذا'
      : value !== null && value;

  return (
    <div className="flex items-center flex-row-reverse p-2">
      <Typography scale="Lable" size="Medium" className="w-full">
        {label}
      </Typography>
      <div
        className="w-full flex  items-center"
        onClick={() => {
          (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', ['name']: name }),
            pageNavigationHandler({ showProgressBar: false, id: name }));
        }}
      >
        <div className="flex items-center flex-row-reverse gap-3">
          {isLoading && <Spinner color="primary" width={20} />}
          {!isLoading && (
            <>
              {!currentValue ? (
                <Typography scale="Body" size="Medium" color="Surface_Outline">
                  انتخاب نشده
                </Typography>
              ) : (
                <div className="flex  gap-1">
                  <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
                    {`${currentValue}`}
                  </Typography>
                  {name !== 'condition' && (
                    <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
                      mg/dL
                    </Typography>
                  )}
                </div>
              )}
            </>
          )}
          <PenIcon className="w-6 h-6" style={{ fill: colors.PrimaryWoman_Primary }} />
        </div>
      </div>
    </div>
  );
};

export default BloodSugerBtnGenerator;
