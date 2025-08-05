import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RatingFeedbackListGeneratorProps } from './types';

const RatingFeedbackListGenerator = ({
  feedbackValuesHandler,
  feedbackValues,
  tabType,
  list,
}: RatingFeedbackListGeneratorProps) => {
  const { colors } = useTheme();

  const contextColor = tabType === 'positive' ? colors.Success_Success : colors.Error_Error;
  const backgroundColor = tabType === 'positive' ? colors.Success_SuccessContainer : colors.Error_ErrorContainer;
  const selectedValues = tabType === 'positive' ? feedbackValues.feedbackPositive : feedbackValues.feedbackNegative;

  return (
    <div className="w-full grid grid-cols-2 gap-4 px-3 py-4">
      {list.map((item, index) => {
        const isSelected = selectedValues.includes(item);

        const selectHandler = () => {
          let updatedList = selectedValues;

          const name = tabType === 'positive' ? 'feedbackPositive' : 'feedbackNegative';

          if (isSelected) {
            updatedList = selectedValues.filter((i) => i !== item);
          } else {
            updatedList.push(item);
          }

          feedbackValuesHandler({ name, value: updatedList });
        };

        return (
          <div
            key={index}
            onClick={selectHandler}
            className="w-[145px] h-[42px] mx-auto rounded-lg flex items-center justify-center border-[1px] cursor-pointer"
            style={{
              backgroundColor: isSelected ? backgroundColor : colors.Transparent,
              borderColor: isSelected ? contextColor : colors.Surface_OutlineVariant,
            }}
          >
            <Typography
              scale="Body"
              size="Small"
              color="FREE-STYLE"
              textAlign="center"
              className="scale-90"
              freeColor={isSelected ? contextColor : colors.Neutral_OnBackground}
            >
              {item}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default RatingFeedbackListGenerator;
