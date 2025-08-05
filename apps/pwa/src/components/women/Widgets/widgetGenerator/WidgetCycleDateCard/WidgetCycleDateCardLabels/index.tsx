import Typography from '@components/ui/Typography';

import { WidgetCycleDateCardLabelsProps } from './types';

const WidgetCycleDateCardLabels = ({ startLabel, endLabel }: WidgetCycleDateCardLabelsProps) => {
  return (
    <div className="w-full flex justify-between pt-3">
      <Typography scale="Lable" size="Small" color="Neutral_OnBackground">
        {endLabel}
      </Typography>

      <Typography scale="Lable" size="Small" color="Neutral_OnBackground">
        {startLabel}
      </Typography>
    </div>
  );
};

export default WidgetCycleDateCardLabels;
