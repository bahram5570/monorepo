'use client';

import { useState } from 'react';

import Button from '@components/ui/Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import BloodPressureBtn from './BloodPressureBtn';
import BloodPressureHeader from './BloodPressureHeader';
import BloodPressureModal from './BloodPressureModal';
import TestResult from './TestResult/TestResult';
import useSubmit from './__hooks__/useSubmit';
import { initailValue } from './constants';
import { InputValueType } from './type';

const BloodPressureContainer = () => {
  const [inputValue, setInputValue] = useState<InputValueType>(initailValue);
  const { isLoading, submitHandler } = useSubmit();
  const { colors } = useTheme();

  const onChangeHandler = (v: InputValueType) => {
    setInputValue(v);
  };

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0}>
      <div
        style={{ paddingTop: HEADER_HEIGHT, background: colors.Surface_SurfaceVariant }}
        className="min-h-[100dvh] relative flex flex-col gap-3"
      >
        <BloodPressureHeader />
        <div style={{ background: colors.Surface_SurfaceVariant, paddingTop: HEADER_HEIGHT }} className="px-3">
          <div className="flex flex-col gap-4 ">
            <div
              style={{ background: colors.White }}
              className="p-3 w-full divide-y-[1px] flex flex-col gap-2 rounded-xl mt-4"
            >
              <BloodPressureBtn value={inputValue} />
            </div>
            <TestResult high={inputValue.high} low={inputValue.low} />
          </div>

          <BloodPressureModal onChange={onChangeHandler} value={inputValue} />
        </div>
        <footer className="mt-auto">
          <div className="flex flex-col justify-center items-center p-4">
            <Button
              variant="fill"
              size="medium"
              color="primary"
              onClick={() => {
                submitHandler({ high: inputValue.high, low: inputValue.low });
              }}
              fullWidth={true}
              isDisable={!inputValue.high && !inputValue.low}
              isLoading={isLoading}
            >
              ثبت اطلاعات
            </Button>
          </div>
        </footer>
      </div>
    </WomenPageLayout>
  );
};

export default BloodPressureContainer;
