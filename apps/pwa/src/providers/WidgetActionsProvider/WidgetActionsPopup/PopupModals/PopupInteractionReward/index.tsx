import { useEffect, useState } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import PopupTwoStepsContainer from '../PopupTwoStepsContainer';
import { PopupInteractionRewardProps } from './types';

const PopupInteractionReward = ({ data, hasTwoStepsInteractionReward }: PopupInteractionRewardProps) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  const submitHandler = () => {
    actionHandler(data.button.action);
  };

  return (
    <PopupTwoStepsContainer currentStep={hasTwoStepsInteractionReward ? 2 : null}>
      <>
        <div className="w-full px-8 py-5">
          <CustomImage src={data.image} />
        </div>

        <div className="flex flex-col items-center h-full px-4 pt-10 pb-5" style={{ backgroundColor: colors.White }}>
          <Typography scale="Headline" size="Small" textAlign="center" className="w-full px-6">
            {data.title}
          </Typography>

          <Typography scale="Body" size="Medium" textAlign="center" className="w-full px-4 pt-1">
            {data.description}
          </Typography>

          <Button
            size="large"
            variant="fill"
            className="mt-auto"
            color="FREE-STYLES"
            onClick={submitHandler}
            buttonColor={colorFormatConverter(data.button.backgroundColor)}
            contentsColor={colorFormatConverter(data.button.foregroundColor)}
          >
            {data.button.text}
          </Button>
        </div>
      </>
    </PopupTwoStepsContainer>
  );
};

export default PopupInteractionReward;
