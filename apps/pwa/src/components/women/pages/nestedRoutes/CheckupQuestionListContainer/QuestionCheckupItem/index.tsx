import { segmentActionHandler } from '../../PregnancyCheckup/PregnancyCheckupContainer/utils';
import ArrowIcon from '@assets/icons/calendarArrow.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import { QuestionCheckupItemPropsType } from './type';

const QuestionCheckupItem = ({ icon, name, type }: QuestionCheckupItemPropsType) => {
  const { colors } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();
  const pregnancyWeek = getQueryParams('week');
  const { actionHandler } = useWidgetActions();

  const linkTo = () => {
    const action = segmentActionHandler(Number(pregnancyWeek), type, name);
    actionHandler(action);
  };

  return (
    <div className="flex flex-row-reverse justify-between items-center p-4 " onClick={linkTo}>
      <div className="flex flex-row items-center gap-3">
        <Typography scale="Body" size="Medium">
          {name}
        </Typography>
        <CustomImage src={icon} />
      </div>

      <div className="flex flex-row-reverse items-center justify-between gap-3">
        <ArrowIcon className="w-4 h-4" style={{ stroke: colors.Surface_OutlineVariant }} />
      </div>
    </div>
  );
};

export default QuestionCheckupItem;
