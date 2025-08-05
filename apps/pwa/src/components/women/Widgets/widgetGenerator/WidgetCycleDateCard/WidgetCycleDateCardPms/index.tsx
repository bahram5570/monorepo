import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetCycleDateCardPmsProps } from './types';

const WidgetCycleDateCardPms = (props: WidgetCycleDateCardPmsProps) => {
  const { colors } = useTheme();
  const right = props.isInLatePeriod ? props.pmsStart * props.percentRatio - 4 : props.pmsStart * props.percentRatio;

  if (!props.hasPms) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full"
      style={{
        right: `${right}%`,
        backgroundColor: colors.CycleWoman_Pms_Eyebrow,
        width: `${(props.pmsEnd - props.pmsStart) * props.percentRatio}%`,
      }}
    >
      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {props.startPmsLabel}
      </Typography>

      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {props.endPmsLabel}
      </Typography>
    </div>
  );
};

export default WidgetCycleDateCardPms;
