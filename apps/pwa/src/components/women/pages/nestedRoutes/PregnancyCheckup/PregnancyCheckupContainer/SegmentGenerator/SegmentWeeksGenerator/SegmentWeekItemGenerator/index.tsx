import { segmentActionHandler } from '../../../utils';
import PolygonIcon from '@assets/icons/Polygon.svg';
import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import { WeekItemGeneratorPropsType } from './type';

const SegmentWeekItemGenerator = ({ isCurrentWeek, items, label, needTest, week }: WeekItemGeneratorPropsType) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    if (items.length === 1) {
      const action = segmentActionHandler(week, items[0].type, items[0].name);
      actionHandler(action);
    } else {
      pageNavigationHandler({
        showProgressBar: true,
        linkTo: `/protected/checkupQuestionList?items=${encodeURIComponent(JSON.stringify(items))}&title=${label}&week=${week}`,
        id: 'checkupQuestionList',
      });
    }
  };

  return (
    <div className="flex flex-row-reverse justify-between items-center p-4" onClick={linkTo}>
      {isCurrentWeek && (
        <div className="flex flex-row-reverse items-center gap-1">
          <PolygonIcon className="w-4 h-4" style={{ fill: colors.Pink_500 }} />
          <Typography scale="Lable" size="Large">
            {label}
          </Typography>
        </div>
      )}

      {!isCurrentWeek && (
        <Typography scale="Body" size="Medium">
          {label}
        </Typography>
      )}

      <div className="flex flex-row-reverse items-center justify-between gap-3">
        {needTest && (
          <div style={{ background: colors.Warning_Warning }} className="px-2 py-[6px] rounded-full">
            <Typography scale="Lable" size="Small" color="Warning_OnWarning">
              نیاز به پر کردن آزمایش
            </Typography>
          </div>
        )}

        <ArrowIcon className="w-4 h-4" style={{ stroke: colors.Surface_OutlineVariant }} />
      </div>
    </div>
  );
};

export default SegmentWeekItemGenerator;
