import Typography from '@components/ui/Typography';
import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import { WidgetMostRepeatedSignsEmptyProps } from './types';

const WidgetMostRepeatedSignsEmpty = ({ data, isPdfDownloading }: WidgetMostRepeatedSignsEmptyProps) => {
  if (isPdfDownloading) {
    return <></>;
  }

  return (
    <WidgetCardHealthReportContainer title={data.title} button={data.button}>
      <Typography scale="Body" size="Small" color="Neutral_OnBackground" className="w-full">
        هنوز نشانه پرتکراری برات شناسایی نشده
      </Typography>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetMostRepeatedSignsEmpty;
