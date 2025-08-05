import { useState } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import OptionButton from '@components/ui/OptionButton';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import PopupTwoStepsContainer from '../PopupTwoStepsContainer';
import { PopupSexTrackerProps } from './types';

const PopupSexTracker = ({ data }: PopupSexTrackerProps) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectHandler = (i: number) => {
    setSelectedIndex(i);
  };

  const submitHandler = () => {
    actionHandler(data.items[selectedIndex].action);
  };

  return (
    <PopupTwoStepsContainer currentStep={1}>
      <div className="w-full px-4">
        <div className="flex flex-col items-center gap-1 pb-10">
          <Typography scale="Title" size="Medium" color="Neutral_OnBackground">
            {data.title}
          </Typography>

          <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="center">
            {data.description}
          </Typography>
        </div>

        <div className="w-full px-4 pt-4 pb-6 rounded-xl" style={{ backgroundColor: colors.White }}>
          <div className="flex flex-col gap-3 w-full pb-[130px]">
            {data.items.map((option, index) => (
              <OptionButton
                key={index}
                text={option.title}
                onClick={() => selectHandler(index)}
                isSelected={selectedIndex === index}
              />
            ))}
          </div>

          <Button
            size="large"
            variant="fill"
            color="FREE-STYLES"
            onClick={submitHandler}
            buttonColor={colorFormatConverter(data.submit.backgroundColor)}
            contentsColor={colorFormatConverter(data.submit.foregroundColor)}
          >
            {data.submit.text}
          </Button>
        </div>
      </div>
    </PopupTwoStepsContainer>
  );
};

export default PopupSexTracker;
