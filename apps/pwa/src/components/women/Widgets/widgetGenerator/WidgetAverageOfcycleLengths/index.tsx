import Typography from '@components/ui/Typography';

import WidgetAverageOfcycleLengthsCard from './WidgetAverageOfcycleLengthsCard';
import { WidgetAverageOfcycleLengthsProps } from './types';

const WidgetAverageOfcycleLengths = ({ data, isPdfDownloading }: WidgetAverageOfcycleLengthsProps) => {
  return (
    <div className="w-full">
      <Typography scale="Title" size="Small" color="Neutral_OnBackground" className="ml-auto">
        {data.title}
      </Typography>

      <div className="w-full flex gap-4 pt-4">
        <WidgetAverageOfcycleLengthsCard {...data.left} isPdfDownloading={isPdfDownloading} />
        <WidgetAverageOfcycleLengthsCard {...data.right} isPdfDownloading={isPdfDownloading} />
      </div>
    </div>
  );
};

export default WidgetAverageOfcycleLengths;
