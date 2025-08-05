import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import WidgetMostRepeatedSignsList from './WidgetMostRepeatedSignsList';
import WidgetMostRepeatedSignsTitles from './WidgetMostRepeatedSignsTitles';
import { WidgetMostRepeatedSignsProps } from './types';

const WidgetMostRepeatedSigns = ({ data, isPdfDownloading }: WidgetMostRepeatedSignsProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <>
        <WidgetMostRepeatedSignsTitles
          guidDescription={data.guidDescription}
          isPdfDownloading={isPdfDownloading}
          description={data.description}
          guidTitle={data.guidTitle}
        />

        <WidgetMostRepeatedSignsList items={data.items} isPdfDownloading={isPdfDownloading} />
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetMostRepeatedSigns;
