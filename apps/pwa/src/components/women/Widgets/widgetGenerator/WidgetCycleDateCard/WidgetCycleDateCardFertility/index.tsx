import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetCycleDateCardFertilityProps } from './types';

const WidgetCycleDateCardFertility = (props: WidgetCycleDateCardFertilityProps) => {
  const { colors } = useTheme();

  if (!props.hasFertility) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full"
      style={{
        right: `${props.fertilityStart * props.percentRatio}%`,
        backgroundColor: colors.CycleWoman_Ovulation_Eyebrow,
        width: `${(props.fertilityEnd - props.fertilityStart) * props.percentRatio}%`,
      }}
    >
      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {props.startFertility}
      </Typography>

      {props.hasOvulation && (
        <div
          className="absolute top-[2px] max-w-[20px] max-h-[20px] min-w-[20px] min-h-[20px] flex items-center justify-center border-[1px] rounded-full"
          style={{
            borderColor: `${colors.Neutral_Background}99`,
            right: `${props.ovulationDay * props.percentRatio}%`,
          }}
        >
          <Typography scale="Lable" size="Medium" color="Neutral_Background" className="!h-[19px] overflow-hidden">
            {props.ovulationLabel}
          </Typography>
        </div>
      )}

      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {props.endFertility}
      </Typography>
    </div>
  );
};

export default WidgetCycleDateCardFertility;
