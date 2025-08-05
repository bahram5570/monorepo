'use client';

import { useState } from 'react';

import CustomButton from '@components/ui/CustomButton';

import DownloadModal from './DownloadModal';
import GuideContentContainer from './GuideContentContainer';
import GuideHeaderContainer from './GuideHeaderContainer';
import useStep from './__hooks__/useStep';
import { STEP_LIST } from './constants';
import { GuideContainerPropsType } from './type';

const GuideContainer = ({ stepsContent }: GuideContainerPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentStep, nextStep, prevStep } = useStep();

  const clickHandler = () => {
    if (currentStep !== 4) {
      return nextStep();
    }
    setIsOpen(true);
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto h-dvh">
      <div className="w-full px-4  ">
        <GuideHeaderContainer currentStep={currentStep} prevStep={prevStep} stepList={STEP_LIST} />
        <GuideContentContainer stepsContent={stepsContent} currentStep={currentStep} />
        <div className="!fixed left-0 right-0 bottom-6 max-w-[500px] !mx-auto px-4">
          <CustomButton onClick={clickHandler} varient="fill" className="w-full    !rounded-xl !h-12">
            {stepsContent[currentStep].btnText}
          </CustomButton>
        </div>
      </div>
      <DownloadModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default GuideContainer;
