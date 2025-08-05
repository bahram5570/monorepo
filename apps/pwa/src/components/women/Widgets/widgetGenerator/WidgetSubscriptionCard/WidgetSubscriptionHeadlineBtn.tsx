import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { WidgetSubscriptionHeadlineBtnProps } from './types';

const WidgetSubscriptionHeadlineBtn = ({
  backgroundColor,
  foregroundColor,
  action,
  text,
}: WidgetSubscriptionHeadlineBtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <Button
      size="small"
      variant="fill"
      color="FREE-STYLES"
      onClick={() => actionHandler(action)}
      buttonColor={colorFormatConverter(backgroundColor)}
      contentsColor={colorFormatConverter(foregroundColor)}
      isDisable={action.actionType === ActionTypeEnum.None}
    >
      {text}
    </Button>
  );
};

export default WidgetSubscriptionHeadlineBtn;
