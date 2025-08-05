import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import ProgressCycleLoading from '@components/ProgressCycleLoading';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import { JAAN_PANAH_QUESTIONS_LIST } from '../../constants';
import ProgressBar from './ProgressBar';
import QuestionContents from './QuestionContents';
import QuestionImageGenerator from './QuestionImageGenerator';
import QuestionOptionGenerator from './QuestionOptionGenerator';
import useQuestions from './__hooks__/useQuestions';
import { JaanPanahQuestionsTypes } from './types';

const JaanPanahQuestions = ({ onResult }: JaanPanahQuestionsTypes) => {
  const { breakPoint } = useBreakPoint();
  const [isLoading, setIsLoading] = useState(false);
  const { values, valuesHandler, step, stepHandler, progressPercent } = useQuestions();

  const curentData = JAAN_PANAH_QUESTIONS_LIST[step];
  const currentValue = values[step];
  const isLastStep = progressPercent >= 100;
  const btnScript = isLastStep ? 'ثبت اطلاعات' : 'مرحله بعد';

  const clickHandler = () => {
    if (isLastStep) {
      setIsLoading(true);
    } else {
      stepHandler(true);
    }
  };

  const completeHandler = () => {
    onResult(values);
  };

  return (
    <>
      <div
        className="w-full max-w-[360px] flex flex-col mx-auto"
        style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
      >
        <ProgressBar progressPercent={progressPercent} isLoading={isLoading} onBack={() => stepHandler(false)} />

        <div className="relative w-full h-[360px] flex flex-col items-center">
          {isLoading && (
            <div
              style={{ backgroundColor: COLORS_LIST.White }}
              className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center z-10"
            >
              <CustomTypography
                className="text-center pb-16"
                fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
              >
                تا ساخته شدن محتوای متناسب با اطلاعاتی که وارد کردی، چند لحظه صبر کن...
              </CustomTypography>

              <ProgressCycleLoading onComplete={completeHandler} />
            </div>
          )}

          <CustomTypography fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'} className="text-center pb-16">
            {curentData.mainTitle}
          </CustomTypography>

          {curentData.type === 'image' && (
            <div className="w-full flex justify-center gap-8">
              {curentData.list.map((item, index) => (
                <QuestionImageGenerator
                  key={index}
                  title={item.title}
                  image={item.image}
                  isSelected={currentValue === item.value}
                  onClick={() => valuesHandler(step, item.value)}
                />
              ))}
            </div>
          )}

          {curentData.type === 'option' && (
            <div className="w-full flex flex-col gap-3">
              {curentData.list.map((item, index) => (
                <QuestionOptionGenerator
                  key={index}
                  title={item.title}
                  isSelected={currentValue === item.value}
                  onClick={() => valuesHandler(step, item.value)}
                />
              ))}
            </div>
          )}

          <CustomButton varient="fill" isDisable={!currentValue} onClick={clickHandler} className="!mt-auto">
            {btnScript}
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default JaanPanahQuestions;
