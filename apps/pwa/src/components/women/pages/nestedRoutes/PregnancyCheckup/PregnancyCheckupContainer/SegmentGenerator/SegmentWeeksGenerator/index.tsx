import useTheme from '@hooks/useTheme';

import SegmentWeekItemGenerator from './SegmentWeekItemGenerator';
import { WeekGeneratorPropsType } from './type';

const SegmentWeeksGenerator = ({ weeks }: WeekGeneratorPropsType) => {
  const { colors } = useTheme();
  return (
    <div
      className="divide-y-[1px] px-3 rounded-br-2xl rounded-bl-2xl"
      style={{ background: colors.Neutral_Background }}
    >
      {weeks.map((week, index) => {
        return <SegmentWeekItemGenerator {...week} key={index} />;
      })}
    </div>
  );
};

export default SegmentWeeksGenerator;
