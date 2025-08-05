import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { WidgetCardContainerProps } from './types';

const WidgetCardContainer = ({ title, titleElement, button, children }: WidgetCardContainerProps) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  const backgroundColor = colors.Neutral_Background.toLowerCase() + 'b3';

  return (
    <div className="w-full h-fit rounded-2xl p-4" style={{ backgroundColor }}>
      <div
        className="flex justify-between items-center border-b-[1px] pb-3 mb-3"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <div className="min-w-fit">{titleElement}</div>

        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {title}
        </Typography>
      </div>

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

export default WidgetCardContainer;
