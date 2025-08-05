import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { WidgetCardHealthReportContainerProps } from './types';

const WidgetCardHealthReportContainer = ({ children, button, title }: WidgetCardHealthReportContainerProps) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  return (
    <div className="w-full h-fit rounded-2xl p-4" style={{ backgroundColor: colors.White }}>
      <Typography scale="Lable" size="Large" color="Neutral_OnBackground" className="pb-1 ml-auto">
        {title}
      </Typography>

      <>{children}</>

      {button && (
        <Button
          size="medium"
          variant="fill"
          className="mt-4"
          color="FREE-STYLES"
          onClick={() => actionHandler(button.action)}
          buttonColor={colorFormatConverter(button.backgroundColor)}
          contentsColor={colorFormatConverter(button.foregroundColor)}
          isDisable={button?.action.actionType === ActionTypeEnum.None}
        >
          {button.text}
        </Button>
      )}
    </div>
  );
};

export default WidgetCardHealthReportContainer;
