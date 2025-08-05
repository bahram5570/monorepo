import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { BiorhythmContainerProps } from './type';

const BiorhythmContainer = ({ Icon, percent, text, typeText, type }: BiorhythmContainerProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div
      className="flex rounded-2xl p-3 w-1/3 justify-center"
      style={{ background: colors.Surface_SurfaceVariant }}
      onClick={() => {
        (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', typeText, type }),
          pageNavigationHandler({ showProgressBar: true, id: 'BiorhythmModal' }));
      }}
    >
      <div className="flex flex-col justify-center items-center gap-2 p-1">
        <Icon className="w-12 h-12" />
        <div className="flex flex-row-reverse gap-1">
          <Typography scale="Lable" size="Large">
            {` ${text}:`}
          </Typography>
          <Typography scale="Lable" size="Medium">
            {`%${percent.toString()}`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BiorhythmContainer;
