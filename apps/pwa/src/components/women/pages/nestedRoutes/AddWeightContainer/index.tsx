'use client';

import { useState } from 'react';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import useSubmit from './__hooks__/useSubmit';

const AddWeightContainer = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const weight = getQueryParams('currentWeight');

  const [currentWeight, setCurrentWeight] = useState<number>(Number(weight) || 20);
  const { isLoading, submitHandler } = useSubmit();
  const { colors } = useTheme();

  const generateList = (start: number, end: number, step: number): { value: number; title: string }[] => {
    const list = [];
    for (let value = start; value <= end; value += step) {
      list.push({ value, title: `${value}` });
    }
    return list;
  };

  const weightList = generateList(20, 200, 1);

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        scripts={{
          description: 'برای اینکه بتونیم بهتر کمکت کنیم لازمه بدونیم:',
          subtitle: '',
          title: 'در حال حاضر وزنت چقدره؟',
        }}
      />
      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span
            className="absolute left-0 right-0 h-10   pointer-events-none rounded-full mx-5"
            style={{ background: colors.Neutral_Surface }}
          >
            <div className="flex justify-center items-center h-full ml-20">
              <Typography scale="Title" size="Medium">
                kg
              </Typography>
            </div>
          </span>
          <div className="flex gap-2 relative">
            <WheelPicker
              list={weightList}
              defaultValue={currentWeight}
              valueHandler={(v) => setCurrentWeight(Number(v))}
            />
          </div>
        </>
      </div>

      <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
        <Button
          size="large"
          variant="fill"
          color="primary"
          onClick={() => submitHandler(currentWeight)}
          isLoading={isLoading}
          navigationLoadingId="DatesContainer"
        >
          ثبت اطلاعات
        </Button>
      </div>
    </div>
  );
};

export default AddWeightContainer;
