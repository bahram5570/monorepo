import WidgetGenerator from '@components/women/Widgets/widgetGenerator';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';

import { HealthReportContainerWidgetsProps } from './types';

const HealthReportContainerWidgets = ({ data }: HealthReportContainerWidgetsProps) => {
  return (
    <div className="flex flex-col gap-4" style={{ marginBottom: FOOTER_HEIGTH + 16 }}>
      {data.widgets.map((widget, index) => (
        <WidgetGenerator {...widget} key={index} />
      ))}
    </div>
  );
};

export default HealthReportContainerWidgets;
