import TickIcon from '@assets/icons/subscriptionTick.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SubscriptionGeneratorTypes } from './types';

const SubscriptionGenerator = (props: SubscriptionGeneratorTypes) => {
  const { colors } = useTheme();

  const isSelected = typeof props.isSelected === 'undefined' ? true : props.isSelected;
  const totalPayText = props.isFree ? 'رایگان' : `${props.totalPayText} تومان`;
  const realValueText = props.isFree ? null : props.realValueText;

  const selectHandler = () => {
    if (props.onSelect) {
      props.onSelect();
    }
  };

  return (
    <div
      onClick={selectHandler}
      className="w-full rounded-xl border-[1px] my-4 overflow-hidden "
      style={{
        borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant,
        backgroundColor: isSelected ? colors.PrimaryWoman_PrimaryContainer : colors.Neutral_Background,
      }}
    >
      {props.specificText && (
        <div
          className="w-full flex justify-center py-1"
          style={{ backgroundColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant }}
        >
          <Typography scale="Lable" size="SmallProminet" color={isSelected ? 'White' : 'Surface_Outline'}>
            {props.specificText}
          </Typography>
        </div>
      )}

      <div className="w-full px-4 py-3 flex flex-col items-end gap-2">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            <Typography scale="Lable" size="Medium" color={isSelected ? 'Neutral_OnBackground' : 'Surface_Outline'}>
              {totalPayText}
            </Typography>

            {realValueText && (
              <div className="relative">
                <Typography scale="Lable" size="Small" color={isSelected ? 'Neutral_OnBackground' : 'Surface_Outline'}>
                  {realValueText}
                </Typography>

                <div
                  style={{ backgroundColor: isSelected ? colors.Neutral_OnBackground : colors.Surface_Outline }}
                  className="absolute top-1.5 left-0 right-0 w-full h-[1px] block"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Typography scale="Lable" size="Large" color={isSelected ? 'Neutral_OnBackground' : 'Surface_Outline'}>
              {props.text}
            </Typography>

            {isSelected && (
              <TickIcon className="w-4 h-auto" style={{ stroke: colors.PrimaryWoman_Primary, strokeWidth: 2 }} />
            )}

            {!isSelected && (
              <div
                className="w-4 h-4 min-w-4 min-h-4 rounded-full border-[1px]"
                style={{ borderColor: colors.Surface_OutlineVariant }}
              />
            )}
          </div>
        </div>

        {props.desciption && (
          <>
            <div
              className="w-full h-[1px] block"
              style={{ backgroundColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant }}
            />

            <Typography
              scale="Body"
              size="Small"
              color={isSelected ? 'Neutral_OnBackground' : 'Surface_OutlineVariant'}
            >
              {props.desciption}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionGenerator;
