import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetBabyCheckHistoryCardItemsProps } from './types';

const WidgetBabyCheckHistoryCardItems = (props: WidgetBabyCheckHistoryCardItemsProps) => {
  const { colors } = useTheme();

  const clickHandler = (v: number, hasData: boolean) => {
    if (props.onSelect && hasData) {
      props.onSelect(v);
    }
  };

  return (
    <div className="w-full flex flex-col py-4" style={{ gap: props.onSelect ? '16px' : '8px' }}>
      {props.items.map((item, index) => (
        <div
          key={index}
          onClick={() => clickHandler(index, item.details.length > -1)}
          style={{ backgroundColor: colors.Surface_SurfaceVariant }}
          className="w-full h-[40px] px-2 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-1">
            <div
              className="w-[54px] h-[22px] flex items-center justify-center rounded-full"
              style={{ backgroundColor: colors.Success_Success }}
            >
              <Typography scale="Lable" size="Small" color="PrimaryWoman_OnPrimary">
                {item.positive}
              </Typography>
            </div>

            <div
              className="w-[54px] h-[22px] flex items-center justify-center rounded-full"
              style={{ backgroundColor: colors.Error_Error }}
            >
              <Typography scale="Lable" size="Small" color="PrimaryWoman_OnPrimary">
                {item.negative}
              </Typography>
            </div>
          </div>

          <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
            {item.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default WidgetBabyCheckHistoryCardItems;
