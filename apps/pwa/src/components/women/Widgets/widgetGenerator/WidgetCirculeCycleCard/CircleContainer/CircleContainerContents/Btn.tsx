import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { BtnProps } from './types';

const Btn = ({ button }: BtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <div
      className={`absolute left-0 right-0 bottom-12 w-full flex items-center justify-center gap-2 ${button.length > 1 ? 'scale-75' : 'scale-100'}`}
    >
      {button.map((item, index) => (
        <Button
          key={index}
          size="medium"
          variant="fill"
          fullWidth={false}
          color="FREE-STYLES"
          className="min-w-[130px]"
          onClick={() => actionHandler(item.action)}
          buttonColor={colorFormatConverter(item.backgroundColor)}
          contentsColor={colorFormatConverter(item.foregroundColor)}
          isDisable={item.action.actionType === ActionTypeEnum.None}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
};

export default Btn;
