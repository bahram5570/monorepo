import { colorFormatConverter, textShorter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import WidgetRoutinWriter from './WidgetRoutinWriter';
import { WidgetRoutinProps } from './types';

const WidgetRoutin = ({ data }: WidgetRoutinProps) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  return (
    <>
      <div
        className="flex justify-end items-center border-b-[1px] pb-3 mb-3"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {data.title}
        </Typography>
      </div>

      <div className="flex flex-col items-end rounded-xl p-3 ">
        <WidgetRoutinWriter
          writerName={data.writerName}
          writerIcon={data.writerIcon}
          writerSpeciality={data.writerSpeciality}
        />

        <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Blue_100 }} />

        <Typography scale="Body" size="Small">
          {textShorter(data.description, 80)}
        </Typography>
      </div>

      <Button
        size="medium"
        variant="fill"
        className="mt-4"
        color="FREE-STYLES"
        onClick={() => actionHandler(data.button.action)}
        buttonColor={colorFormatConverter(data.button.backgroundColor)}
        contentsColor={colorFormatConverter(data.button.foregroundColor)}
        isDisable={data.button?.action.actionType === ActionTypeEnum.None}
      >
        {data.button.text}
      </Button>
    </>
  );
};

export default WidgetRoutin;
